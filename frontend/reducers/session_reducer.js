import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  VERIFY_EMAIL
} from "../actions/session_actions";

const _nullUser = Object.freeze({
  id: null,
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case VERIFY_EMAIL:
      debugger;
      return { email: action.currentUser.email }
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;