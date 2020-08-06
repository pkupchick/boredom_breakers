import * as APITicketUtil from '../util/registration_api_util';

export const RECEIVE_ALL_TICKETS = "RECEIVE_ALL_TICKETS";

export const receiveAllTickets = () => {
    return {
        type: RECEIVE_ALL_TICKETS,
        tickets
    }
};

export const fetchTickets = user => (dispatch) => {
    return APITicketUtil.fetchTickets(user)
        .then(user => dispatch(fetchTickets(user))
    )
};

export const createTicket = ticket => dispatch => (
    APITicketUtil.createTicket(ticket)
        .then(ticket => (dispatch(receiveAllTickets()))
    )
);