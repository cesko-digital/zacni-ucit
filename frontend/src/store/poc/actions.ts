import { ThunkDispatch } from 'redux-thunk';
// import Router from "next/router";
// import { getCustomerToken } from "../../api/customers/get-customer-token";
// import { getCustomer } from "../../api/customers/get-customer";
// import * as routes from "../../routes";

import { POC } from '../../common/types';
// import { setToken, removeToken } from "../../utils/token";
// import { setRefreshToken, removeRefreshToken } from "../../utils/refresh-token";
// import { removeCustomer } from "../../utils/customer";

export const SET_SIDEBAR_IS_DISPLAYED = 'layout/SET_SIDEBAR_IS_DISPLAYED' as 'layout/SET_SIDEBAR_IS_DISPLAYED';

// export type LoginPayload = {
// 	username: string;
// 	password: string;
// };

export type LayoutAction = ReturnType<
  typeof setSidebarIsDisplayed
  // | typeof loginSuccess | typeof logoutSuccess
>;

export type Dispatch = ThunkDispatch<{}, {}, LayoutAction>;

export const setSidebarIsDisplayed = (rule: POC) => ({
  type: SET_SIDEBAR_IS_DISPLAYED,
  payload: { rule },
});

// const loginSuccess = (customer: LayoutType) => ({
// 	type: LOGIN_SUCCESS,
// 	payload: {
// 		customer,
// 	},
// });

// const logoutSuccess = () => ({
// 	type: LOGOUT,
// });

// export const login = ({ username, password }: LoginPayload) => async (
// 	dispatch: Dispatch
// ) => {
// 	dispatch(loginInit(username, password));

// 	const { ownerId, access_token, refresh_token } = await getCustomerToken({
// 		username,
// 		password,
// 	});

// 	setToken(access_token);
// 	setRefreshToken(refresh_token);

// 	const customer = await getCustomer(ownerId);

// 	dispatch(loginSuccess(customer));

// 	Router.push(routes.ACCOUNT);
// };

// export const logout = () => (dispatch: Dispatch) => {
// 	removeToken();
// 	removeRefreshToken();
// 	removeCustomer();

// 	Router.push(routes.HOMEPAGE);

// 	dispatch(logoutSuccess());
// };
