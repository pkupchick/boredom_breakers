import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';
import { NavLink } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  eventDisplay() {
    return (
      <div>
        {this.props.events.title}
        <br/>
        <NavLink to={`/events/${this.props.events.id}/edit`}>
          <img src={this.props.events.photoUrl} alt="" />
        </NavLink>
        <br/>
        <button className="register-button">Tickets</button>
      </div>
    );
  }

  render() {
    return (
      <div className="event-show">
        {this.eventDisplay()}
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

export default connect(msp, mdp)(EventShow);

