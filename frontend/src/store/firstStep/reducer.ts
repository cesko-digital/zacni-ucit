import { FirstStepForm } from '../../common/types';
import { UPDATE_FIRST_STEP, FirstStepAction } from './actions';
import { List } from 'immutable';

export type TeacherState = FirstStepForm;

const initialState = [
  { id: '0', htmlId: 'firstDegree', label: '1. Stupeň ZŠ', checked: false },
  { id: '1', htmlId: 'secondDegree', label: '2. Stupeň ZŠ', checked: false },
  { id: '2', htmlId: 'highSchool', label: 'SŠ', checked: false },
];

const reducer = (
  state: TeacherState = initialState,
  action: FirstStepAction
): TeacherState => {
  switch (action.type) {
    case UPDATE_FIRST_STEP:
      const buttonList = List(state);

      let updatedState = buttonList.setIn(
        [action.payload.buttonId.toString(), 'checked'],
        true
      );

      state.map((el) => {
        if (el.id !== action.payload.buttonId) {
          updatedState = updatedState.setIn(
            [el.id.toString(), 'checked'],
            false
          );
        } else {
        }
      });
      return updatedState.toArray();
    default:
      return state;
  }
};

export default reducer;
