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
                    <button className="login-button" onClick={this.handleSubmit}>Save & Continue</button>
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