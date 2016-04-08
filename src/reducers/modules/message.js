import Immutable from 'immutable';

// Utils
import { initialStatus } from '../utils/request';
import { apiLoadPlaces } from '../../utils/api/messages';
import { createReducer } from '../utils/reducer';

export const loadMessage = () => ({
  type: 'LOAD_MESSAGE',
  payload: {
    data: apiLoadPlaces(),
  },
});

const defaultData = 'No message';

const initialState = Immutable.fromJS({
  ...initialStatus,
  data: defaultData,
});

export const message = createReducer({

  // Request
  ['LOAD_MESSAGE_REQUEST']: state =>
    state
      .set('data', defaultData)
      .set('isFetching', true),

  // Failure
  ['LOAD_MESSAGE_FAILURE']: (state, { payload }) =>
    state
      .set('errors', 'Error')
      .set('isFetching', false),

  // Success
  ['LOAD_MESSAGE_SUCCESS']: (state, { payload: { data } }) =>
    state
      .set('data', data)
      .set('error', {})
      .set('isFetching', false),

}, initialState);
