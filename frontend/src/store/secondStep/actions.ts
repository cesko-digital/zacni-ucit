import { ThunkDispatch } from 'redux-thunk';

import { SecondStepForm } from '../../common/types';

export const UPDATE_SECOND_STEP = 'customer/UPDATE_SECOND_STEP' as 'customer/UPDATE_SECOND_STEP';

export type SecondStepAction = ReturnType<typeof updateSecondStep>;

export type Dispatch = ThunkDispatch<{}, {}, SecondStepAction>;

export const updateSecondStep = (
  firstStep: SecondStepForm,
  buttonId: string
) => ({
  type: UPDATE_SECOND_STEP,
  payload: { firstStep, buttonId },
});
