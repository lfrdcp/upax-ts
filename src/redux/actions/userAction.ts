import { Inputs } from '../../views/auth/login/LoginView';

export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';

export const setUserAction = (payload: Inputs) => {
  return {
    type: SET_USER,
    payload: payload,
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};
