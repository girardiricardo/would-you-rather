import { SET_USERS } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    default:
      return state;
  }
}
