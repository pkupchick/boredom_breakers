import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
} from '../actions/event_actions';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const eventsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = {};
    switch(action.type) {
        case RECEIVE_EVENTS:
            let eventsArray = Object.values(action.events);
            eventsArray.forEach(event => {
                nextState[event.id] = event;
            });
            return nextState;
        case RECEIVE_EVENT:
            const newEvent = { [action.event.id]: action.event };
            return Object.assign({}, state, newEvent);
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.events);
        default:
            return state;
    }
};

export default eventsReducer;