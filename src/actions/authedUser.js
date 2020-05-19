export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SET_LOGOFF_USER = 'SET_LOGOFF_USER';
export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';

export function setAuthedUser(payload) {
  return {
    type: SET_AUTHED_USER,
    payload
  };
}

export function setLogoffUser() {
  return {
    type: SET_LOGOFF_USER
  };
}

export function updateAnswers(payload) {
  return {
    type: UPDATE_ANSWERS,
    payload
  };
}

export function updateQuestions(payload) {
  return {
    type: UPDATE_QUESTIONS,
    payload
  };
}

export function handleSetAuthedUser(id) {
  return (dispatch, getState) => {
    const { users } = getState();

    const user = Object.values(users).find((u) => u.id === id);

    dispatch(setAuthedUser(user));
  };
}
