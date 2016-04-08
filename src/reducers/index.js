import { combineReducers } from 'redux';

// Reducers
import { message } from './modules/message';

const rootReducer = combineReducers({
  message,
});

export default rootReducer;
