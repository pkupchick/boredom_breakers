import * as APIEventUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});

export const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
});

export const fetchEvents = () => (dispatch) =>
    APIEventUtil.fetchEvents().then((events) => {
        return dispatch(receiveEvents(events))
    }
);

export const fetchEvent = id => (dispatch) => (
    APIEventUtil.fetchEvent(id).then(bench => (
        dispatch(receiveEvent(event))
    ))
);

export const createEvent = event => dispatch => (
    APIEventUtil.createEvent(event).then(event => (
        dispatch(receiveEvent(event))
    ))
);