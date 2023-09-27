// src/store/configureStore.js
import { createStore, combineReducers } from 'redux';
import step1Reducer from '../reducers/step1Reducer';
import step2Reducer from '../reducers/step2Reducer';

const rootReducer = combineReducers({
  step1: step1Reducer,
  step2: step2Reducer,
});

const store = createStore(rootReducer);

export default store;
