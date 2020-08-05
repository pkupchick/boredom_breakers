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
    return currentEvent ?  (
      <div>
        <div className="event-show-banner">
          {currentEvent.title}
          <br/>
          <NavLink to={`/events/${currentEvent.id}/edit`}>
            <img src={currentEvent.photoUrl} alt="" />
          </NavLink>
        </div>
        <br/>
        <div className="under-header-container">
          <button className="register-button">Tickets</button>
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

