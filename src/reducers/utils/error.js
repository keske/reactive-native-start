import R from 'ramda';

export const getErrors = R.cond([
  [
    R.compose(R.not, R.isEmpty, R.values, R.path(['body', 'errors'])),
    R.path(['body', 'errors']),
  ],
  [
    R.compose(R.not, R.isEmpty, R.path(['body', 'error'])),
    e => [R.path(['body', 'error'], e)],
  ],
  [R.propSatisfies(R.complement(R.or(R.isNil, R.isEmpty)), 'message'), e => [R.prop('message', e)]],
  [R.T, R.always(['Unknown error'])],
]);
