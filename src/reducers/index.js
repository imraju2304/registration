import { combineReducers } from 'redux';
import step1Reducer from './step1Reducer';
import step2Reducer from './step2Reducer';

// Combine all reducers
const rootReducer = combineReducers({
  step1: step1Reducer,
  step2: step2Reducer,
});

export default rootReducer;
