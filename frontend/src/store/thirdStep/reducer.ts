import { ThirdStepForm } from '../../common/types';
import {
  SET_THIRD_STEP,
  ThirdStepAction,
  SET_BUTTON_IS_DISABLED,
} from './actions';
import { List } from 'immutable';

export type TeacherState = ThirdStepForm;

const initialState = {
  buttonIsDisabled: true,
  chooseDegreeState: [
    { id: '0', htmlId: 'vocationalCert', label: 'Výuční list', checked: false },
    {
      id: '1',
      htmlId: 'gcseExam',
      label: 'Odborná maturita',
      checked: false,
    },
    {
      id: '2',
      htmlId: 'higherEd',
      label: 'Vyšší odborné vzdělání',
      checked: false,
    },
    {
      id: '3',
      htmlId: 'bachelorEd',
      label: 'Bakalářské vzdělání',
      checked: false,
    },
    {
      id: '4',
      htmlId: 'mgrEd',
      label: 'Magisterské vzdělání (Mgr. nebo Ing.)',
      checked: false,
    },
  ],
};

const reducer = (
  state: TeacherState = initialState,
  action: ThirdStepAction
): TeacherState => {
  switch (action.type) {
    case SET_THIRD_STEP:
      const { chooseDegreeState } = state;
      const buttonList = List(chooseDegreeState);

      let updatedState = buttonList.setIn(
        [action.payload.buttonId.toString(), 'checked'],
        !state.chooseDegreeState[action.payload.buttonId.toString()].checked
      );

      //   chooseDegreeState.map((el) => {
      //     if (el.id !== action.payload.buttonId) {
      //       updatedState = updatedState.setIn(
      //         [el.id.toString(), 'checked'],
      //         false
      //       );
      //     } else {
      //     }
      //   });
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
