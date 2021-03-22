import { combineReducers } from 'redux';

import authReducer from './reducers/auth.reducer';
import userReducer from './reducers/user.reducer';

const rootReducer = combineReducers({
  isAuthenticated: authReducer,
  user: userReducer,
});

export default rootReducer;
