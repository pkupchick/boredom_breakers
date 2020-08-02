import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
} from '../actions/event_actions';

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
            const newEvent = action.event
            return Object.assign({}, state, newEvent);
        default:
            return state;
    }
};

export default eventsReducer;