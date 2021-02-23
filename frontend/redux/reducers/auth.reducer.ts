import { SET_AUTHED } from '../types/auth.type';

const initialState = {
  isAuthenticated: false,
};
const categoryReducer = (
  state = initialState,
  action: { type: string; payload: boolean }
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTHED:
      return {
        ...state,
        isAuthenticated: payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
