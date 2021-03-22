import { SET_USER } from '../types/user.type';

const initialState: User = {
  email: '',
  userName: '',
  autorizationToken: '',
  refreshToken: '',
};
const userReducer = (
  state = initialState,
  action: { type: string; payload: User }
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
