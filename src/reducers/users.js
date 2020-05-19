import { SET_USERS, UPDATE_USER_ANSWERS, UPDATE_USER_QUESTIONS } from '../actions/users';

export default function users(state = null, action) {
  switch (action.type) {
    case SET_USERS:
      return action.payload;

    case UPDATE_USER_ANSWERS:
      return {
        ...state,
        [action.payload.authedUser]: {
          ...state[action.payload.authedUser],
          answers: {
            ...state[action.payload.authedUser].answers,
            [action.payload.id]: action.payload.question
          }
        }
      }

    case UPDATE_USER_QUESTIONS:
      return {
        ...state,
        [action.payload.author]: {
          ...state[action.payload.author],
          questions: state[action.payload.author].questions.concat([action.payload.id])
        }
      }

    default:
      return state;
  }
}