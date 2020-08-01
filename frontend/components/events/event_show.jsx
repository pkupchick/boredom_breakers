import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';

class EventShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId)
    }

    eventDisplay() {
        debugger;
        return (
            <div>
                Jill
            </div>
        )
    }

    render() {
        return(
        <div>
            <p>hello</p>
            {this.eventDisplay()}
        </div>
        )
    }
}

const msp = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.currentUser,
        event: state.event
    }
}

const mdp = (dispatch) => {
    return {
        fetchEvent: (id) => dispatch(fetchEvent(id))
    }
}

export default connect(msp, mdp)(EventShow);