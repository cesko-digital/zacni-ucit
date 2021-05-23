import { ThunkDispatch } from 'redux-thunk';

import { FirstStepForm } from '../../common/types';

export const UPDATE_FIRST_STEP = 'customer/UPDATE_FIRST_STEP' as 'customer/UPDATE_FIRST_STEP';

export type FirstStepAction = ReturnType<typeof updateFirstStep>;

export type Dispatch = ThunkDispatch<{}, {}, FirstStepAction>;

export const updateFirstStep = (
  firstStep: FirstStepForm,
  buttonId: string
) => ({
  type: UPDATE_FIRST_STEP,
  payload: { firstStep, buttonId },
});
