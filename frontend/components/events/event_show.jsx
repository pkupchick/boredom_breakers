import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';
import { NavLink } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId)
      .then(event => {
        const eventObj = Object.assign({}, event);
        this.setState(eventObj);
      })
  }

  eventDisplay() {
    const currentEvent = this.props.entities.events[this.props.match.params.eventId];
    let eventDate = null;
    if (currentEvent) {
      let dateObj = new Date(currentEvent.event_start);
      eventDate = dateObj.toDateString();
    }
    return currentEvent ?  (
      <div className="event-show-container">
        <div className="event-show-background">
          <div className="event-show-banner">
            <div className="show-container-top">
                <img src={currentEvent.photoUrl} className="event-show-image" />
                <div className="event-show-card-right">
                  <p>{eventDate}</p>
                  <p>{currentEvent.title}</p>
                </div>
              </div>
              <div className="under-header-container">
                <button className="register-button">Tickets</button>
              </div>
            </div>
          </div>
          <div className="inner-content">
              <p>
                {currentEvent.description}
                <br/>
                <br/>
                <NavLink to={`/events/${currentEvent.id}/edit`}>Edit this event</NavLink>
              </p>
          </div>
      </div>
    ) : null;
  }

  render() {
    return (
      <div>
        {this.eventDisplay()}
      </div>
    )
  }
}

const msp = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.currentUser,
        entities: state.entities
    }
}

const mdp = (dispatch) => {
    return {
        fetchEvents: () => dispatch(fetchEvents()),
        fetchEvent: (id) => dispatch(fetchEvent(id))
    }
}

export default connect(msp, mdp)(EventShow);

