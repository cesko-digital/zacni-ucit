import { SET_SIDEBAR_IS_DISPLAYED, LayoutAction } from './actions';
import { LayoutType } from '../../common/types';

export type LayoutState = LayoutType | null;

const initialState: LayoutState = {
  sidebarIsDisplayed: true,
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
