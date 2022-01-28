import * as storage from '../../Service/cookie';
export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export const setLogin = token => {
  return async dispatch => {
    await storage.setItem('userName', token).then(res => {
      dispatch({
        type: actionTypes.LOGIN,
        token: token,
      });
    });
  };
};

export const logout = () => {
  return async dispatch => {
    await storage.removeData('userName').then(res => {
      dispatch({type: actionTypes.LOGOUT});
    });
  };
};
