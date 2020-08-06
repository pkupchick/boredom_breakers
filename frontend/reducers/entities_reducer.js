import { combineReducers } from 'redux';

import events from './events_reducer';
import users from './users_reducer';
import tickets from './tickets_reducer';

export default combineReducers({
    tickets,
    events,
    users
});


// const entitiesReducer = (state = {}, action) => {
//     switch (action.type) {
//         default: 
//             return state;
//     }
// }

// export default entitiesReducer;