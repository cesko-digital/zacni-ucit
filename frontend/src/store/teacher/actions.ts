import { ThunkDispatch } from 'redux-thunk';
import Router from 'next/router';
// import { getCustomerToken } from '../../api/customers/get-customer-token';
// import { getCustomer } from '../../api/customers/get-customer';
// import * as routes from '../../routes';

import { TeacherType } from '../../common/types';
// import { setToken, removeToken } from '../../utils/token';
// import { setRefreshToken, removeRefreshToken } from '../../utils/refresh-token';
// import { removeCustomer } from '../../utils/customer';

export const LOGIN_INIT = 'customer/LOGIN_INIT' as 'customer/LOGIN_INIT';
export const LOGIN_SUCCESS = 'customer/LOGIN_SUCCESS' as 'customer/LOGIN_SUCCESS';
export const LOGOUT = 'customer/LOGOUT' as 'customer/LOGOUT';

export type LoginPayload = {
  username: string;
  password: string;
};

export type TeacherAction = ReturnType<
  typeof loginInit | typeof loginSuccess | typeof logoutSuccess
>;

export type Dispatch = ThunkDispatch<{}, {}, TeacherAction>;

const loginInit = (username: string, password: string) => ({
  type: LOGIN_INIT,
  payload: { username, password },
});

const loginSuccess = (customer: TeacherType) => ({
  type: LOGIN_SUCCESS,
  payload: {
    customer,
  },
});

const logoutSuccess = () => ({
  type: LOGOUT,
});

export const login = ({ username, password }: LoginPayload) => async (
  dispatch: Dispatch
) => {
  dispatch(loginInit(username, password));

  //   const { ownerId, access_token, refresh_token } = await getCustomerToken({
  //     username,
  //     password,
  //   });

  //   setToken(access_token);
  //   setRefreshToken(refresh_token);

  //   const customer = await getCustomer(ownerId);

  //   dispatch(loginSuccess(customer));

  //   Router.push(routes.ACCOUNT);
  // };

  // export const logout = () => (dispatch: Dispatch) => {
  //   removeToken();
  //   removeRefreshToken();
  //   removeCustomer();

  //   Router.push(routes.HOMEPAGE);

  dispatch(logoutSuccess());
};
