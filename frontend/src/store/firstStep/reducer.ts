import { FirstStepForm } from '../../common/types';
import {
  UPDATE_FIRST_STEP,
  FirstStepAction,
  SET_BUTTON_IS_DISABLED,
} from './actions';
import { List } from 'immutable';

export type TeacherState = FirstStepForm;

const initialState = {
  buttonIsDisabled: true,
  chooseDegreeState: [
    { id: '0', htmlId: 'firstDegree', label: '1. Stupeň ZŠ', checked: false },
    {
      id: '1',
      htmlId: 'secondDegree',
      label: '2. Stupeň ZŠ, nižší stupně gymnázií',
      checked: false,
    },
    {
      id: '2',
      htmlId: 'highSchool',
      label: 'SŠ, SOŠ, SOU, vyšší stupně gymnázií',
      checked: false,
    },
  ],
};

const reducer = (
  state: TeacherState = initialState,
  action: FirstStepAction
): TeacherState => {
  switch (action.type) {
    case UPDATE_FIRST_STEP:
      const { chooseDegreeState } = state;
      const buttonList = List(chooseDegreeState);

      let updatedState = buttonList.setIn(
        [action.payload.buttonId.toString(), 'checked'],
        true
      );

      chooseDegreeState.map((el) => {
        if (el.id !== action.payload.buttonId) {
          updatedState = updatedState.setIn(
            [el.id.toString(), 'checked'],
            false
          );
        } else {
        }
      });
      return {
        ...state,
        chooseDegreeState: updatedState.toArray(),
      };
    case SET_BUTTON_IS_DISABLED:
      return {
        ...state,
        buttonIsDisabled: action.payload.buttonIsDisabled,
      };
    default:
      return state;
  }
};

export default reducer;
