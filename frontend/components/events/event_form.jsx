import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';

class EventForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            host_id: this.props.currentUser.id,
            title: "",
            description: "",
            price: "",
            location: "",
            category: "",
            max_attendees: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state);
    }



    render() {
        const { title, description, price, location, category, max_attendees} = this.state;
        const eventTitle = null;
        const eventDescription = null;
        const eventPrice = null;
        const eventLocation = null;
        const eventCategory = null;
        const maxAttEvent = null;

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
                        <br/>
                        <input
                            type="text"
                            className={eventDescription}
                            value={description}
                            onChange={this.handleInput("description")}
                            placeholder="Event Description"
                            autoComplete="on"
                        />
                        <br/>
                        <input
                            type="number"
                            className={eventPrice}
                            value={price}
                            onChange={this.handleInput("price")}
                            placeholder="Price per ticket/registration"
                        />
                        <br/>
                        <input
                            type="text"
                            className={eventLocation}
                            value={location}
                            onChange={this.handleInput("location")}
                            placeholder="Event Location"
                            autoComplete="on"
                        />
                        <br />
                        <select className={eventCategory} value={category} onChange={this.handleInput("category")}>
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
                            <option value="Performing & Visual Arts">Performing & Visual Arts</option>
                            <option value="School Activities">School Activities</option>
                            <option value="Science & Tech">Science & Tech</option>
                            <option value="Spirituality">Spirituality</option>
                            <option value="Sports & Fitness">Sports & Fitness</option>
                            <option value="Travel & Outdoor">Travel & Outdoor</option>
                            <option value="Other">Other</option>
                        </select>
                        <br />
                        <input
                            type="number"
                            className={maxAttEvent}
                            value={max_attendees}
                            onChange={this.handleInput("max_attendees")}
                            placeholder="Maximum number of people who can register/attend"
                        />
                        <br />
                    <button className="login-button" onClick={this.handleSubmit}>Save &amp; Continue</button>
                </form>
            </div>
        )
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