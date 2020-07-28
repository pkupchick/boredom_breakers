import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;
        let headerComponent = null;
        if (!currentUser.name) {
            headerComponent = <div className="login-signup">
                <img src="http://yogapattern.com/e-logo.png" className="logo-small"/>
                <p className="login-signup-greeting"><Link to="/signup/">Sign up or log in</Link></p>
            </div>;
        } else {
                headerComponent = (<div>
                <img src="http://yogapattern.com/e-logo.png" className="logo-small" />
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