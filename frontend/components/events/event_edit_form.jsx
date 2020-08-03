import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent, updateEvent } from '../../actions/event_actions';

class EventEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
          host_id: this.props.currentUser.id,
          title: "",
          description: "",
          price: "",
          location: "",
          category: "",
          max_attendees: "",
          event_start: "",
          event_end: "",
          event_start_time: "",
          event_end_time: "",
          photoFile: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

      componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId)
          .then(event => {
            const eventObj = Object.assign({}, event, { photoFile: event.photo });
            this.setState(eventObj);
          });
      }

      componentDidUpdate() {
      }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('event[id]', this.state.id),
        formData.append('event[host_id]', this.state.host_id),
        formData.append('event[title]', this.state.title);
        formData.append('event[description]', this.state.description);
        formData.append('event[price]', this.state.price);
        formData.append('event[location]', this.state.location);
        formData.append('event[category]', this.state.category);
        formData.append('event[max_attendees]', this.state.max_attendees);
        formData.append('event[event_start]', this.state.event_start);
        formData.append('event[event_end]', this.state.event_end);
        formData.append('event[event_start_time]', this.state.event_start_time);
        formData.append('event[event_end_time]', this.state.event_end_time);
        // formData.append('event[photo]', this.state.photoFile);
        this.props.updateEvent(formData).then(() => {this.props.history.push("/")});
        // this.props.history.push("/")
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }



    render() {
        const {
            title, description, price, location, category, max_attendees,
            event_start, event_end, event_start_time, event_end_time
        } = this.state;
        
        const eventTitle = null;
        const eventDescription = null;
        const eventPrice = null;
        const eventLocation = null;
        const eventCategory = null;
        const maxAttEvent = null;
        const eventStartDate = null;
        const eventEndDate = null;
        const eventStartTime = null;
        const eventEndTime = null;

        if (!this.props.currentUser) {
            return (
                <p>Hey</p>
            )
        } else {
            return (
              <div className="event-form">
                <form onSubmit={this.handleSubmit}>
                  <h1>Basic Info</h1>
                  <h3>
                    Name your event and tell event-goers why they should come.
                    Add details that highlight what makes it unique.
                  </h3>
                  <input
                    type="text"
                    className={eventTitle}
                    value={title}
                    onChange={this.handleInput("title")}
                    placeholder="Event Title"
                    autoComplete="on"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    className={eventDescription}
                    value={description}
                    onChange={this.handleInput("description")}
                    placeholder="Event Description"
                    autoComplete="on"
                  />
                  <br />
                  <br />
                  <input
                    type="number"
                    className={eventPrice}
                    value={price}
                    onChange={this.handleInput("price")}
                    placeholder="Price per ticket/registration"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    className={eventLocation}
                    value={location}
                    onChange={this.handleInput("location")}
                    placeholder="Event Location"
                    autoComplete="on"
                  />
                  <br />
                  <br />
                  <select
                    className={eventCategory}
                    value={category}
                    onChange={this.handleInput("category")}
                  >
                    <option defaultValue>Category</option>
                    <option value="Auto, Boat & Air">Auto, Boat & Air</option>
                    <option value="Business">Business</option>
                    <option value="Charity & Causes">Charity & Causes</option>
                    <option value="Community">Community</option>
                    <option value="Family & Education">
                      Family & Education
                    </option>
                    <option value="Fashion">Fashion</option>
                    <option value="Film & Media">Film & Media</option>
                    <option value="Food & Drink">Food & Drink</option>
                    <option value="Government">Government</option>
                    <option value="Health">Health</option>
                    <option value="Hobbies">Hobbies</option>
                    <option value="Holiday">Holiday</option>
                    <option value="Home & Lifestyle">Home & Lifestyle</option>
                    <option value="Music">Music</option>
                    <option value="Performing & Visual Arts">
                      Performing & Visual Arts
                    </option>
                    <option value="School Activities">School Activities</option>
                    <option value="Science & Tech">Science & Tech</option>
                    <option value="Spirituality">Spirituality</option>
                    <option value="Sports & Fitness">Sports & Fitness</option>
                    <option value="Travel & Outdoor">Travel & Outdoor</option>
                    <option value="Other">Other</option>
                  </select>
                  <br />
                  <br />
                  <input
                    type="number"
                    className={maxAttEvent}
                    value={max_attendees}
                    onChange={this.handleInput("max_attendees")}
                    placeholder="Maximum number of people who can register/attend"
                  />
                  <br />
                  <br />
                  <input
                    type="date"
                    className={eventStartDate}
                    value={event_start}
                    onChange={this.handleInput("event_start")}
                  />
                  <br />
                  <br />
                  <input
                    type="date"
                    className={eventEndDate}
                    value={event_end}
                    onChange={this.handleInput("event_end")}
                  />
                  <br />
                  <br />
                  <input
                    type="time"
                    className={eventStartTime}
                    value={event_start_time}
                    onChange={this.handleInput("event_start_time")}
                  />
                  <br />
                  <br />
                  <input
                    type="time"
                    className={eventEndTime}
                    value={event_end_time}
                    onChange={this.handleInput("event_end_time")}
                  />
                  <br />
                  <br />
                  <input type="file" onChange={this.handleFile} />
                  <br />
                  <br />
                  <button className="login-button" onClick={this.handleSubmit}>
                    Save &amp; Continue
                  </button>
                </form>
              </div>
            );
        }
    }
}

const msp = (state) => {
  return {
        errors: state.errors.session,
        currentUser: state.session.currentUser,
        events: state.events,
  };
};

const mdp = (dispatch) => {
    return {
        updateEvent: event => dispatch(updateEvent(event)),
        fetchEvent: id => dispatch(fetchEvent(id))
    }
};

export default connect(msp, mdp)(EventEditForm);