import { SET_AUTHED } from '../types/auth.type';

export const setAuthed = (isAuthenticated: boolean) => (
  dispatch: (arg0: { type: string; payload: boolean }) => void
) => {
  dispatch({
    type: SET_AUTHED,
    payload: isAuthenticated,
  });
};
