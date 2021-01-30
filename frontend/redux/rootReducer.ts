import { combineReducers } from 'redux';

import authReducer from './reducers/auth.reducer';

const rootReducer = combineReducers({
  isAuthenticated: authReducer,
});

export default rootReducer;
