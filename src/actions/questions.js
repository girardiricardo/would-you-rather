import { saveQuestionAnswer } from '../utils/api';

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const VOTE_QUESTION = 'VOTE_QUESTION';

export function setQuestions(payload) {
  return {
    type: SET_QUESTIONS,
    payload
  };
}

export function voteQuestion(payload) {
  return {
    type: VOTE_QUESTION,
    payload
  };
}

export function handleVoteQuestion(id, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(voteQuestion({ id, option, authedUser: authedUser.id }));

    return saveQuestionAnswer(id, option, authedUser.id);
  };
}