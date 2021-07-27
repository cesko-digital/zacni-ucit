import { ThunkDispatch } from 'redux-thunk';

import { SecondStepForm } from '../../common/types';

export const SET_SECOND_STEP = 'customer SET_SECOND_STEP' as 'customer SET_SECOND_STEP';

export type SecondStepAction = ReturnType<typeof setSecondStep>;

export type Dispatch = ThunkDispatch<{}, {}, SecondStepAction>;

export const setSecondStep = (secondStep: SecondStepForm) => ({
  type: SET_SECOND_STEP,
  payload: { secondStep },
});
