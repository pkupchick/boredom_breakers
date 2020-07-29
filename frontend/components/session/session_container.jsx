import { connect } from 'react-redux';
import React from 'react';
import { login, verify, signup, logoutCurrentUser } from '../../actions/session_actions';
import EmailInput from './email_input';
import Login from './login_container';
import SignUp from './signup_container';

class Session extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { currentUser, login, verify, errors, signup, resetCurrentUser } = this.props;
        let formComponent = null;
        if (!currentUser.email) {
            formComponent = <EmailInput login={login} verify={verify} errors={errors} />;
        } else if (!currentUser.id) {
            formComponent = <SignUp signup={signup} props={currentUser} errors={errors} resetCurrentUser={resetCurrentUser} />
        } else {
            formComponent = <Login login={login} props={currentUser} errors={errors} />
        }
        return (
            <div>
                {formComponent}
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
        login: (currentUser) => dispatch(login(currentUser)),
        verify: (email) => dispatch(verify(email)),  
        signup: (currentUser) => dispatch(signup(currentUser)),
        resetCurrentUser: () => dispatch(logoutCurrentUser())
    };
};

export default connect(msp, mdp)(Session);