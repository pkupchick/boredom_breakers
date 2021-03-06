import { RECEIVE_ALL_TICKETS, RECEIVE_TICKET } from '../actions/registration_actions';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

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
        case RECEIVE_TICKET:
            const newTicket = { [action.ticket.id]: action.ticket };
            return Object.assign({}, state, newTicket);
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.tickets);
        default:
            return state;
    }
};

export default ticketsReducer;