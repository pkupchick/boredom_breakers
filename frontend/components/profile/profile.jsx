import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchEvent } from '../../actions/event_actions';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
            .then(user => {
                this.setState(user);
            });
    }

    // tickets() {
    //     const tickets = this.props.user.registrations;
    //     let ticketsArray = Object.values(tickets);
    //     ticketsArray = ticketsArray.map((ticket, idx)) => {
    //         return ticket.event_id
    //     }
    // }

    render() {
        return(
            <div className="profile-container">
                <div>
                    {this.props.user.name}
                </div>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.currentUser,
        user: state.user
    }
}

const mdp = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
    }
}

export default connect(msp, mdp)(Profile);