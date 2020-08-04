import { RECEIVE_USER } from "../actions/user_actions";


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return Object.assign({}, state, user);
    default:
      return state;
  }
};

export default usersReducer;