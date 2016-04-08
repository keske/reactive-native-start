import R from 'ramda';
import Immutable from 'immutable';

export const createReducer = (handlers, initialState) =>
  (state = initialState, action = {}) =>
    R.propIs(Function, action.type, handlers)
        ? handlers[action.type](state, action)
        : Immutable.fromJS(state);
