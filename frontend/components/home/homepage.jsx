import React from 'react';
import {connect} from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';
import { fetchUser } from '../../actions/user_actions';
import {Link, NavLink} from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
    };
  }

  componentDidMount() {
    this.props.fetchEvents();
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
      meridian = "AM";
    }
    return `${standardHour}:${min} ${meridian} EDT`;
  }

  events() {
    const events = this.props.entities.events || [];
    let eventsArray = Object.values(events) || [];
    eventsArray.sort((e1, e2) => {
      if (e1.event_start > e2.event_start) {
        return 1;
      } else if (e2.event_start > e1.event_start) {
        return -1;
      } else {
        return 0;
      }
    });
    eventsArray = eventsArray.map((event) => {
      const eventDate = new Date(event.event_start) || new Date('August 19, 1975 23:15:30');
      let eventTime = event.event_start_time || "11:11";
      return (
        <div key={event.id} className="individual-event">
          <Link to={`events/${event.id}/`}>
            <div
              className="image-wrap"
              style={{ backgroundImage: `url(${event.photoUrl})` }}
            ></div>
          </Link>
          <div className="bottom-card">
            <p className="event-date-time">
              {eventDate.toDateString()} {this.toSTime(eventTime)}
            </p>
            <Link to={`events/${event.id}/`}>
              <h3 className="event-description">
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
          entities: state.entities
      }
  }

  const mdp = (dispatch) => {
      return {
          fetchEvents: () => dispatch(fetchEvents()),
          fetchEvent: (id) => dispatch(fetchEvent(id)),
          fetchUser: (id) => dispatch(fetchUser(id)),
      }
  }

export default connect(msp, mdp)(HomePage);