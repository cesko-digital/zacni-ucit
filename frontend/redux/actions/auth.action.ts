import { SET_AUTHED } from '../types/auth.type';

type DispatchFunction = (arg0: { type: string; payload: boolean }) => void;

export const setAuthed = (isAuthenticated: boolean) => (
  dispatch: DispatchFunction
) => {
  dispatch({
    type: SET_AUTHED,
    payload: isAuthenticated,
  });
};
