import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <p>User Profile</p>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.currentUser
    }
}

const mdp = (dispatch) => {
    return {
        fetchTickets: () => dispatch(fetchTickets())
    }
}

export default connect(msp, mdp)(Profile);