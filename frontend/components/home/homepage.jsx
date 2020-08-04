import React from 'react';
import {connect} from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    events() {
        const events = this.props.events;
        let eventsArray = Object.values(events);
        eventsArray = eventsArray.map((event, idx) => {
            return (
              <div className="individual-event">
                <h3 className="event-date-time">
                  {event.event_start} - {event.event_start_time}
                </h3>
                <h3 key={idx} className="event-description">
                  {event.title}
                </h3>
                <Link to={`events/${event.id}/`}>
                  <img src={event.photoUrl} alt="" />
                </Link>
              </div>
            );
        })
        return eventsArray;
    }

    render() {
        return (
            <div>
                <div>
                    <img src="https://boredom-breakers-seed.s3.amazonaws.com/background-image.png" 
                    className="home-page-map"/>
                </div>
                <div className="events-container">
                    {this.events()}
                </div>
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