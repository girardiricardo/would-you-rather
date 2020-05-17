export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SET_LOGOFF_USER = 'SET_LOGOFF_USER';

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
