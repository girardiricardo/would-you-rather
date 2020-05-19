import { SET_QUESTIONS, VOTE_QUESTION, ADD_QUESTION } from '../actions/questions';

export default function questions(state = null, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.payload;
    case VOTE_QUESTION:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.option]: {
            ...state[action.payload.id][action.payload.option],
            votes: state[action.payload.id][action.payload.option].votes.concat([action.payload.authedUser])
          }
        }
      }

    case ADD_QUESTION:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      return state;
  }
}