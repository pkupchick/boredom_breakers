import { combineReducers } from "redux";
// import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import eventsReducer from "./events_reducer";
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  user: usersReducer,
  session: sessionReducer,
  events: eventsReducer,
  errors: errorsReducer,
});

export default rootReducer;
