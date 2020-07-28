import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;
        let headerComponent = null;
        if (!currentUser.name) {
            headerComponent = <div className="login-signup">
                <p className="login-signup-greeting">Sign up or log in</p>
            </div>;
        } else {
                headerComponent = (<div>
                <h2>Hi, {currentUser.email}!</h2>
                <button className="logout-button" onClick={logout()}>Log Out</button>
                 </div>)
        }
        return (
            <div>
                {headerComponent}
            </div>
        )
    };
};

const msp = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.currentUser
    }
}

const mdp = (dispatch) => {
    return {
        logout: (currentUser) => dispatch(logout())
    };
};

export default connect(msp, mdp)(Header);