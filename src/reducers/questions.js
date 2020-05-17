import { SET_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}
