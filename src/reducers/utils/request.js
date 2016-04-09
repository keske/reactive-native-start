import { getErrors } from './error.js';

export const initialStatus = {
  isFetching: false,
  errors: {},
};

export const statusRequest = (state, data) =>
  state
    .set('data', data)
    .set('isFetching', true);

export const statusSuccess = (state, data) =>
  state
    .set('data', data)
    .set('error', {})
    .set('isFetching', false);

export const statusFailure = (state, payload) =>
  state
    .set('status', payload)
    .set('errors', getErrors(payload))
    .set('isFetching', false);
