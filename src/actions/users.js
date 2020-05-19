export const SET_USERS = 'SET_USERS';
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS';

export function setUsers(payload) {
  return {
    type: SET_USERS,
    payload
  };
}

export function updateUserAnswers(payload) {
  return {
    type: UPDATE_USER_ANSWERS,
    payload
  };
}

export function handleUpdateUserAnswers(id, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return dispatch(updateUserAnswers({ id, option, authedUser: authedUser.id }));
  };
}