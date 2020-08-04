import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

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

    render() {
        return(
            <div>
                {this.props.user.name}
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
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(msp, mdp)(Profile);