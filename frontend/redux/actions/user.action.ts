import { SET_USER } from '../types/user.type';

type DispatchFunction = (arg0: { type: string; payload: User }) => void;

export const setUser = (user: User) => (dispatch: DispatchFunction) => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};
