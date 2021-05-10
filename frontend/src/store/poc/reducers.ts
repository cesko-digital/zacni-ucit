import { SET_SIDEBAR_IS_DISPLAYED, LayoutAction } from './actions';
import { POC } from '../../common/types';

export type LayoutState = POC | null;

const initialState: LayoutState = {
  degree: '',
  selectedSubjects: [{ subjectName: '', checked: false }],
};

const reducer = (
  state: LayoutState = initialState,
  action: LayoutAction
): LayoutState => {
  switch (action.type) {
    case SET_SIDEBAR_IS_DISPLAYED:
      return action.payload.rule;
    default:
      return state;
  }
};

export default reducer;
