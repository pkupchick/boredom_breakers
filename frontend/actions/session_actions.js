import * as  APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const VERIFY_EMAIL = "VERIFY_EMAIL";

export const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: payload.user,
  events: payload.events
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const verifyEmail = (user) => ({
  type: VERIFY_EMAIL,
  user
})

export const signup = (user) => (dispatch) =>
  APIUtil.signUp(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const login = (user) => (dispatch) =>
  APIUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  APIUtil.logout().then((user) => dispatch(logoutCurrentUser()));

export const verify = (email) => (dispatch) =>
  APIUtil.verify(email).then((user) => dispatch(verifyEmail(user)));