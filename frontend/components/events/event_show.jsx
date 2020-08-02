import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  componentDidUpdate(){
      debugger;
  }

  eventDisplay() {
    return  (
        <div>
            {this.props.events.title}
            <img src={this.props.events.photoUrl} />
        </div>
    )   
  }

  render() {
    return (
      <div>
        {this.eventDisplay()}
      </div>
    );
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