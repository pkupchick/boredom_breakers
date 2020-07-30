import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;
        let headerComponent = null;
        if (!currentUser.name) {
            headerComponent = <div className="signin-header"><Link to="/signup">Sign in</Link></div>
        } else {
            headerComponent = (
                <div className="signin-header">
                    <img src="http://yogapattern.com/e-logo.png" className="logo-small" />
                    <h2>Hi, {currentUser.name}!</h2>
                    <button className="logout-button" onClick={this.props.logout}>Log Out</button>
                </div>
            );
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
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(Header);