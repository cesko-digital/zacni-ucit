import { SecondStepForm } from '../../common/types';
import { SET_SECOND_STEP, SecondStepAction } from './actions';

export type SecondStepState = SecondStepForm;

const initialState = 'Čeština';

const reducer = (
  state: SecondStepState = initialState,
  action: SecondStepAction
): SecondStepState => {
  switch (action.type) {
    case SET_SECOND_STEP:
      return action.payload.secondStep;
    default:
      return state;
  }
};

export default reducer;
