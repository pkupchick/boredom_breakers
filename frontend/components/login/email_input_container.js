import { connect } from "react-redux";
import { login } from '../../actions/session_actions'
import { verify } from '../../actions/session_actions'
import EmailInput from "./email_input";

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    currentUser: state.session.id,
  };
};

const mdp = (dispatch) => {
  return {
    login: (currentUser) => dispatch(login(currentUser)),
    verify: (email) => verify(email),
  };
};

export default connect(msp, mdp)(EmailInput);
