import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function saveQuestionAnswer(id, question, authedUser) {
  return _saveQuestionAnswer({ authedUser, qid: id, answer: question });
}

export function saveQuestion(optionOneText, optionTwoText, author) {
  return _saveQuestion({ optionOneText, optionTwoText, author });
}
