import React from 'react';
import {connect} from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchEvents();
        debugger;
    }

    events() {
        const events = this.props.events;
        const eventsArray = Object.values(events);
        eventsArray.map((event, idx) => {
            return(
                <ul>
                    <li key={idx}>{event.title}</li>
                </ul>
            )
        })
    }

    render() {
        return (
            <div>
                {this.events()}
            </div>
        )
    }
}

const msp = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.currentUser,
        events: state.events
    }
}

const mdp = (dispatch) => {
    return {
        fetchEvents: () => dispatch(fetchEvents()),
        fetchEvent: (id) => dispatch(fetchEvent(id))
    }
}

export default connect(msp, mdp)(HomePage);