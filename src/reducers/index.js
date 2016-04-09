import { combineReducers } from 'redux';

// Reducers
import { repo } from './modules/repo';

const rootReducer = combineReducers({
  repo,
});

export default rootReducer;
