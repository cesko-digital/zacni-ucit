import { SecondStepForm } from '../../common/types';
import { UPDATE_SECOND_STEP, SecondStepAction } from './actions';

export type SecondStepState = SecondStepForm;

const initialState = [];

const reducer = (
  state: SecondStepState = initialState,
  action: SecondStepAction
): SecondStepState => {
  switch (action.type) {
    case UPDATE_SECOND_STEP:
      return state;
    default:
      return state;
  }
};

export default reducer;
