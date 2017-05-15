import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = (user) => (dispatch) => ({
  APIUtil.login(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
});

export const receiveCurrentUser = (session) => ({
  type: RECEIVE_CURRENT_USER,
  session
});

export const logout = () => (dispatch) => ({
  APIUtil.logout().then.((currentUser) => dispatch(receiveCurrentUser(currentUser))
});

export const signup = (user) => (dispatch) => ({
  APIUtil.signup(user).then((currentUser => dispatch(receiveCurrentUser(currentUser))))
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
