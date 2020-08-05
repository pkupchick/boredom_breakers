import { combineReducers } from 'redux';

import events from './events_reducer';
import users from './users_reducer';

export default combineReducers({
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