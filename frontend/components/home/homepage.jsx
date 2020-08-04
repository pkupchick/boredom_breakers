import React from 'react';
import {connect} from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';
import { fetchUser } from '../../actions/user_actions';
import {Link, NavLink} from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  toStandardTime(militaryTime) {
    // 12:00
    militaryTime = militaryTime.split(":");
    if (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) {
      return (
        militaryTime[0] -
        12 +
        ":" +
        militaryTime[1] +
        ":" +
        militaryTime[2] +
        " P.M."
      );
    } else {
      return militaryTime.join(":") + " A.M.";
    }
  }

  toSTime(time) {
    const timeArray = time.split(":");
    const hour = timeArray[0];
    const min = timeArray[1];
    let standardHour = null;
    let meridian = null;
    if (parseInt(hour) > 12) {
       standardHour = parseInt(hour) - 12;
       meridian = "PM";
    } else {
       standardHour = parseInt(hour);
       meridian = "AM"
    }
    return `${standardHour}:${min} ${meridian} EDT`
  }

  events() {
    const events = this.props.events;
    let eventsArray = Object.values(events);
    eventsArray = eventsArray.map((event, idx) => {
    const date = new Date(event.event_start);
    let time = event.event_start_time;
      if (!time) { 
        time = "default:default"
      }
      return (
        <div className="individual-event">
          <Link to={`events/${event.id}/`}>
            <div
              className="image-wrap"
              style={{ backgroundImage: `url(${event.photoUrl})` }}
            ></div>
          </Link>
          <div className="bottom-card">
            <p className="event-date-time">
              {date.toDateString()} - {this.toSTime(time)}
            </p>
            <Link to={`events/${event.id}/`}>
              <h3 key={idx} className="event-description">
                {event.title}
              </h3>
            </Link>
          </div>
        </div>
      );
    });
    return eventsArray;
  }

  render() {
    return (
      <div>
        <div>
          <img
            src="https://boredom-breakers-seed.s3.amazonaws.com/background-image.png"
            className="home-page-map"
          />
        </div>
        <div className="popular-in">
          <h1>
            Popular in <span className="online-events">Online Events</span>
          </h1>
        </div>
        <div className="category-nav">
          <div className="nav-item-1">
            <NavLink to="/">All</NavLink>
          </div>
          <div className="nav-item-1">
            <NavLink to="/">For you</NavLink>
          </div>
          <div className="nav-item-1">
            <NavLink to="/">Today</NavLink>
          </div>
          <div className="nav-item-1">
            <NavLink to="/">This Weekend</NavLink>
          </div>
          <div className="nav-item-1">
            <NavLink to="/">Free</NavLink>
          </div>
          <div className="nav-item-1">
            <NavLink to="/">All</NavLink>
          </div>
          <div className="nav-item-1">
            <NavLink to="/">Music</NavLink>
          </div>
          <div className="nav-item-1">
            <NavLink to="/">Food &amp; Drink</NavLink>
          </div>
          <div className="nav-item-1">
            <NavLink to="/">Charity &amp; Causes</NavLink>
          </div>
        </div>
        <div className="events-container">{this.events()}</div>
      </div>
    );
  }
}

  const msp = (state) => {
      return {
          errors: state.errors.session,
          currentUser: state.session.currentUser,
          events: state.events,
          user: state.user
      }
  }

  const mdp = (dispatch) => {
      return {
          fetchEvents: () => dispatch(fetchEvents()),
          fetchEvent: (id) => dispatch(fetchEvent(id)),
          fetchUser: (id) => dispatch(fetchUser(id))
      }
}

export default connect(msp, mdp)(HomePage);