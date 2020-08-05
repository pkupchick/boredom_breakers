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
      .then((event) => {
        this.setState(event)
      })
  }

  eventDisplay() {
    return (
      <div>
        <div className="event-show-banner">
          {this.props.entities.events.title}
          <br/>
          <NavLink to={`/events/${this.props.entities.events.id}/edit`}>
            <img src={this.props.entities.events.photoUrl} alt="" />
          </NavLink>
        </div>
        <br/>
        <div className="under-header-container">
          <button className="register-button">Tickets</button>
        </div>
      </div>
    );
  }

  toggleModal() {
    debugger;
    if (this.state.modalStatus) {
      this.setState({modalStatus: false})
    } else {
      this.setState({modalStatus: true})
    }
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

