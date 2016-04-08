import Immutable from 'immutable';

// Utils
import { initialStatus, statusRequest, statusSuccess, statusFailure } from '../utils/request';
import { createReducer } from '../utils/reducer';

// Api
import { apiLoadRepoData } from '../../utils/api/repo';

export const actionLoadRepoData = () => ({
  type: 'LOAD_REPO_DATA',
  payload: {
    data: apiLoadRepoData(),
  },
});

const defaultData = {};

const initialState = Immutable.fromJS({
  ...initialStatus,
  data: defaultData,
});

export const repo = createReducer({

  // Request
  ['LOAD_REPO_DATA_REQUEST']: state =>
    statusRequest(state, defaultData),

  // Failure
  ['LOAD_REPO_DATA_FAILURE']: (state, { payload }) =>
    statusFailure(state, payload),

  // Success
  ['LOAD_REPO_DATA_SUCCESS']: (state, { payload: { data } }) =>
    statusSuccess(state, data),

}, initialState);
