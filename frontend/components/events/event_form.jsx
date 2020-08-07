import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import DropZone from 'react-dropzone';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

        this.state = {
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
        photoFile: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    handleInput(type) {
        return (e) => {
        this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("event[host_id]", this.state.host_id);
        formData.append("event[title]", this.state.title);
        formData.append("event[description]", this.state.description);
        formData.append("event[price]", this.state.price);
        formData.append("event[location]", this.state.location);
        formData.append("event[category]", this.state.category);
        formData.append("event[max_attendees]", this.state.max_attendees);
        formData.append("event[event_start]", this.state.event_start);
        formData.append("event[event_end]", this.state.event_end);
        formData.append("event[event_start_time]", this.state.event_start_time);
        formData.append("event[event_end_time]", this.state.event_end_time);
        formData.append("event[photo]", this.state.photoFile);
        this.props.createEvent(formData);
        this.props.history.push(`/`);
    }

    onDrop(acceptedFiles) {
        const file = acceptedFiles[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    dropZone() {
        return (
        <div className="boxy">
            <DropZone
            onDrop={this.onDrop}
            accept="image/*"
            minSize={0}
            maxSize={20000000}
            >
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <div {...getRootProps()} className="heightUpload txt-light">
                <input {...getInputProps()} className="txt-light" />
                {!isDragActive && "Drag and drop a image"}
                {isDragActive && !isDragReject && "Drop Me!"}
                {isDragReject && "File type must be a image"}
                </div>
            )}
            </DropZone>
        </div>
        );
    }

    render() {
        const {
        title,
        description,
        price,
        location,
        category,
        max_attendees,
        event_start,
        event_end,
        event_start_time,
        event_end_time,
        } = this.state;
        let eventTitle = null;
        let eventDescription = null;
        let eventPrice = null;
        let eventLocation = null;
        let eventCategory = null;
        let maxAttEvent = null;
        let eventStartDate = null;
        let eventEndDate = null;
        let eventStartTime = null;
        let eventEndTime = null;

        eventTitle = "event-title-input";
        eventDescription = "event-title-input";
        eventCategory = "event-category-input";
        eventPrice = "event-price-input";
        eventLocation = "event-location-input";
        maxAttEvent = "max-attend-input";
        eventStartDate = "event-start-date";
        eventStartTime = "event-start-time";
        eventEndDate = "event-end-date";
        eventEndTime = "event-end-time";

        if (!this.props.currentUser) {
        return <p>Hey</p>;
        } else {
        return (
            <div className="event-form-container">
                <div className="event-form">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Basic Info</h1>
                        <p className="create-event-p">
                            Name your event and tell event-goers why they should come.
                            <br/> 
                            Add details that highlight what makes it unique.
                        </p>
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
                        <h1>Category and Max Attendees</h1>
                        <p className="create-event-p">
                            What category does your event fall under?
                            <br />
                            Please select one from the drop down list below.
                        </p>
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
                        <option value="Family & Education">Family & Education</option>
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
                        <input
                            type="time"
                            className={eventStartTime}
                            value={event_start_time}
                            onChange={this.handleInput("event_start_time")}
                        />
                        <br />
                        <br />
                        <input
                        type="date"
                        className={eventEndDate}
                        value={event_end}
                        onChange={this.handleInput("event_end")}
                        />
                        <input
                        type="time"
                        className={eventEndTime}
                        value={event_end_time}
                        onChange={this.handleInput("event_end_time")}
                        />
                        <br />
                        <br />
                        {this.dropZone()}
                        <br/>
                        <br/>
                        <button className="create-event-button" onClick={this.handleSubmit}>
                        Create Event
                        </button>
                    </form>
                </div>
            </div>
        );
        }
    }
}

const msp = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.currentUser,
    }
}

const mdp = (dispatch) => {
    return {
        createEvent: event => dispatch(createEvent(event))
    }
};

export default connect(msp, mdp)(EventForm);