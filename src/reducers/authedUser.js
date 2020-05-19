import { SET_AUTHED_USER, SET_LOGOFF_USER, UPDATE_ANSWERS, UPDATE_QUESTIONS } from '../actions/authedUser';

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

    case UPDATE_QUESTIONS:
      return {
        ...state,
        questions: state.questions.concat([action.payload.id])
      }
    default:
      return state;
  }
}