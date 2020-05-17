import { SET_AUTHED_USER, SET_LOGOFF_USER } from '../actions/authedUser';

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.payload;

    case SET_LOGOFF_USER:
      return (state = null);
    default:
      return state;
  }
}
