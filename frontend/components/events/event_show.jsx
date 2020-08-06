import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';
import { createTicket, fetchTickets } from '../../actions/registration_actions';
import { NavLink } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleTicket = this.handleTicket.bind(this);
  }

  componentDidMount() {
    // this.props.fetchTickets(this.props.currentUser);
    this.props.fetchEvent(this.props.match.params.eventId)
      .then(event => {
        const eventObj = Object.assign({}, event);
        this.setState(eventObj);
      })
  }

  handleTicket(e) {
    e.preventDefault();
    // const ticketData = new FormData();
    // ticketData.append("registration[user_id]", this.props.currentUser.id);
    // ticketData.append("registration[event_id]", this.props.match.params.eventId);
    const ticketData = {
      registration: {
        user_id: this.props.currentUser.id,
        event_id: this.props.match.params.eventId,
      }
    };
    // debugger;
    this.props.createTicket(ticketData);
    // const tickets = this.props.fetchTickets(this.props.currentUser);
    // this.setState(tickets);
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
                  <br/>
                  <h3>{currentEvent.title}</h3>
                </div>
              </div>
              <div className="under-header-container">
                <button 
                  onClick={this.handleTicket} className="register-button"
                  disabled={this.props.purchased}
              >{this.props.purchased ? "Already purchased" : "Tickets"}</button>
              </div>
            </div>
          </div>
          <div className="inner-content">
            <h3>Description</h3>
              <p className="event-description-body">
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

const msp = ({ entities, errors, session }, ownProps) => {
  const purchased = entities.users[session.currentUser.id].purchased_event_ids.includes(
    parseInt(ownProps.match.params.eventId)
  );
  return {
    errors: errors.session,
    currentUser: session.currentUser,
    entities: entities,
    tickets: entities.tickets,
    purchased,
  };
};

const mdp = (dispatch) => {
    return {
        fetchEvents: () => dispatch(fetchEvents()),
        fetchEvent: (id) => dispatch(fetchEvent(id)),
        createTicket: ticket => dispatch(createTicket(ticket)),
        fetchTickets: (user) => dispatch(fetchTickets(user))
    }
}

export default connect(msp, mdp)(EventShow);

