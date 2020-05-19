import { getInitialData, saveQuestion } from '../utils/api';
import { setUsers, updateUserQuestions } from '../actions/users';
import { updateQuestions } from '../actions/authedUser';
import { setQuestions, addQuestion } from '../actions/questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(setUsers(users));
      dispatch(setQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion(optionOneText, optionTwoText, authedUser.id).then((question) => {
      dispatch(addQuestion(question));
      dispatch(updateUserQuestions(question))
      dispatch(updateQuestions(question))
    });
  };
}
