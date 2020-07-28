import { connect } from 'react-redux';
import React from 'react';
import { login, verify } from '../../actions/session_actions';
import EmailInput from './email_input';

class Session extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { currentUser, login, verify, errors } = this.props;
        let formComponent = null;
        if (!currentUser.email) {
            formComponent = <EmailInput verify={verify} errors={errors} />;
        } else if (!currentUser.id) {
            formComponent = <p>Sign up form</p>;
        } else {
            formComponent = <p>Log in form</p>;
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
    };
};

export default connect(msp, mdp)(Session);