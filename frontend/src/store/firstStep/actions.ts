import { ThunkDispatch } from 'redux-thunk';

import { FirstStepForm } from '../../common/types';

export const UPDATE_FIRST_STEP = 'customer/UPDATE_FIRST_STEP' as 'customer/UPDATE_FIRST_STEP';
export const SET_BUTTON_IS_DISABLED = 'customer/SET_BUTTON_IS_DISABLED' as 'customer/SET_BUTTON_IS_DISABLED';

export type FirstStepAction = ReturnType<
  typeof updateFirstStep | typeof setButtonIsDisabled
>;

export type Dispatch = ThunkDispatch<{}, {}, FirstStepAction>;

export const updateFirstStep = (
  firstStep: FirstStepForm,
  buttonId: string
) => ({
  type: UPDATE_FIRST_STEP,
  payload: { firstStep, buttonId },
});
export const setButtonIsDisabled = (buttonIsDisabled: boolean) => ({
  type: SET_BUTTON_IS_DISABLED,
  payload: { buttonIsDisabled },
});
