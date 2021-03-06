import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import todoAppReducers from './reducers/reducer';

const store = createStore(todoAppReducers, applyMiddleware(thunk, logger));

export default store;