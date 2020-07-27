import React from "react";
import Greeting from './greeting';
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
