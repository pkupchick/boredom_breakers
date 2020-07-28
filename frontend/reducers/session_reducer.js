import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  VERIFY_EMAIL
} from "../actions/session_actions";

const _nullUser = Object.freeze({
  currentUser: null,
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case VERIFY_EMAIL:
      return action.user;
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;