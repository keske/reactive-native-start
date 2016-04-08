/* @flow */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import async from '../utils/asyncMiddleware';
import rootReducer from '../';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  async,
  loggerMiddleware
)(createStore);

const configureStore = (initialState : Object = {}) : Function =>
  createStoreWithMiddleware(rootReducer, initialState);

export default configureStore;
