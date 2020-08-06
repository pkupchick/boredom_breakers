import { RECEIVE_ALL_TICKETS } from '../actions/registration_actions';

const ticketsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = {};
    switch (action.type) {
        case RECEIVE_ALL_TICKETS:
            let ticketsArray = Object.values(action.events);
            ticketsArray.forEach(ticket => {
                nextState[ticket.id] = ticket;
            });
            return nextState;
        default:
            return state;
    }
};

export default ticketsReducer;