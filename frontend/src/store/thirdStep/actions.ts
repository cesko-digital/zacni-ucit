import { ThunkDispatch } from 'redux-thunk';

import { ThirdStepForm } from '../../common/types';

export const SET_THIRD_STEP = 'customer/SET_THIRD_STEP' as 'customer/SET_THIRD_STEP';
export const SET_BUTTON_IS_DISABLED = 'customer/SET_BUTTON_IS_DISABLED' as 'customer/SET_BUTTON_IS_DISABLED';

export type ThirdStepAction = ReturnType<
  typeof setThirdStep | typeof setButtonIsDisabled
>;

export type Dispatch = ThunkDispatch<{}, {}, ThirdStepAction>;

export const setThirdStep = (thirdStep: ThirdStepForm, buttonId: string) => ({
  type: SET_THIRD_STEP,
  payload: { thirdStep, buttonId },
});
export const setButtonIsDisabled = (buttonIsDisabled: boolean) => ({
  type: SET_BUTTON_IS_DISABLED,
  payload: { buttonIsDisabled },
});
