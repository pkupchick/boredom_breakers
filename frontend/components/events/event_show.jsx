import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';
import { createTicket, fetchTickets } from '../../actions/registration_actions';
import { NavLink } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.tickets = {};
    this.handleTicket = this.handleTicket.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId)
      .then(event => {
        const eventObj = Object.assign({}, event);
        this.setState(eventObj);
      })
  }

  handleTicket(e) {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("user_id", this.props.currentUser.id);
    // formData.append("event_id", this.props.match.params.eventId);
    const data = {
      user_id: this.props.currentUser.id,
      event_id: this.props.match.params.eventId
    }
    this.props.createTicket(data)
      .then(ticket => {
        this.setState({[this.tickets]: ticket })
      })
  }

  eventDisplay() {
    const currentEvent = this.props.entities.events[this.props.match.params.eventId];
    const currentUserId = this.props.currentUser.id;
    let eventDate = null;
    if (currentEvent) {
      let dateObj = new Date(currentEvent.event_start);
      eventDate = dateObj.toDateString();
    }
    let eventOwner = null;
    if (currentEvent.host_id === currentUserId) {
      eventOwner = (<NavLink to={`/events/${currentEvent.id}/edit`}>Edit this event</NavLink>)
    } else {
      eventOwner = null;
    }
    return currentEvent ?  (
      <div className="event-show-container">
        <div className="event-show-background">
          <div className="event-show-banner">
            <div className="show-container-top">
                <img src={currentEvent.photoUrl} className="event-show-image" />
                <div className="event-show-card-right">
                  <div className="event-show-card-right-top">
                    <p>{eventDate}</p>
                    <br/>
                    <h3>{currentEvent.title}</h3>
                  </div>
                  <div className="event-show-card-right-bottom">
                    <div className="price-box">
                      <p>${currentEvent.price}</p>
                    </div>
                  </div>
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
                {eventOwner}
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

  return {
    errors: errors.session,
    currentUser: session.currentUser,
    entities: entities,
    tickets: entities.tickets,
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

