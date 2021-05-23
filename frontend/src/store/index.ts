import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { isBrowser } from '../utils/is-browser';
import teacher from './teacher/reducer';
import firstStep from './firstStep/reducer';
import { createWrapper } from 'next-redux-wrapper';

const reducer = combineReducers({
  teacher,
  firstStep,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof reducer>;

// this variable will be set if you have redux-dev-tools extension installed in your browser
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers =
  // @ts-ignore
  (isBrowser() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const makeStore = (preloadedState = {}) =>
  createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export const wrapper = createWrapper(makeStore);
