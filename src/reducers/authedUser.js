import { SET_AUTHED_USER, SET_LOGOFF_USER, UPDATE_ANSWERS } from '../actions/authedUser';

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.payload;

    case SET_LOGOFF_USER:
      return null;

    case UPDATE_ANSWERS:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.id]: action.payload.option
        }
      }
    default:
      return state;
  }
}