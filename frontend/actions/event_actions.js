import * as APIEventUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";

export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});

export const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
});

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_EVENT_ERRORS,
        errors: errors,
    };
};

export const fetchEvents = () => (dispatch) =>
    APIEventUtil.fetchEvents().then((events) => {
        return dispatch(receiveEvents(events))
    }
);

export const fetchEvent = id => (dispatch) => (
    APIEventUtil.fetchEvent(id).then(event => {
        dispatch(receiveEvent(event))
        return event;
    })
);

export const createEvent = event => dispatch => (
    APIEventUtil.createEvent(event).then(event => (
        dispatch(receiveEvent(event))
    ))
);

export const updateEvent = event => dispatch => (
    APIEventUtil.updateEvent(event).then(event => (
        dispatch(receiveEvent(event))
    ))
);

export const deleteEvent = (id) => dispatch => {
    return APIEventUtil.deleteEvent(id)
        .then(id => dispatch(deleteEvent(id)),
    )
}