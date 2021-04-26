import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchEvent } from '../../actions/event_actions';
import { fetchTickets } from '../../actions/registration_actions';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.displayTickets = this.displayTickets.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
            .then(user => {
                this.setState(user);
            });
    }

    displayTickets() {
        // const ticketsArray = [];
        // this.props.fetchTickets(this.props.match.params.userId)
        //     .then(tickets => {
        //         ticketsArray = tickets
        //     });
        //     debugger;
        // console.log(ticketsArray)
        // console.log(this.props.currentUser.purchased_event_ids)
        console.log("hi")
    }

    render() {
        return(
            <div className="profile-container">
                <div className="profile-main">
                    <h1>
                        Hi <span className="user-name">{this.props.currentUser.name}</span> you have # tickets
                        {this.displayTickets()}
                    </h1>
                </div>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.currentUser,
        user: state.entities.users
    }
}

const mdp = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
        fetchTickets: (userId) => dispatch(fetchTickets(userId))
    }
}

export default connect(msp, mdp)(Profile);