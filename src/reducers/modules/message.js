import R from 'ramda';
import Immutable from 'immutable';

// Utils
import { initialStatus, statusFailure, statusRequest, statusSuccess } from '../utils/request';
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

const LData = R.lensProp('data');

export const message = createReducer({

  // Request
  ['LOAD_MESSAGE_REQUEST']: state =>
    R.compose(
      R.set(LData, defaultData),
      statusRequest
    )(state),

  // Failure
  ['LOAD_MESSAGE_FAILURE']: (state, { payload }) =>
    R.compose(
      R.set(LData, defaultData),
      statusFailure(payload)
    )(state),

  // Success
  ['LOAD_MESSAGE_SUCCESS']: (state, { payload: { data } }) =>
    R.compose(
      R.set(LData, data),
      statusSuccess
    )(state),

}, initialState);
