import { TeacherType } from '../../common/types';
import { LOGIN_SUCCESS, TeacherAction } from './actions';

export type TeacherState = Iterable<TeacherType>;

const initialState = null;

const reducer = (
  state: TeacherState = initialState,
  action: TeacherAction
): TeacherState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const previousState = [];
      return previousState;
    default:
      return state;
  }
};

export default reducer;
