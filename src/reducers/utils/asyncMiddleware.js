/* @flow */

import Promise from 'bluebird';

const isPromise = obj => obj && typeof obj.then === 'function';
const hasPromiseProps = (obj = {}) => Object.keys(obj).some(key => isPromise(obj[key]));

const resolveProps = obj => {
  const props = Object.keys(obj);
  const values = props.map(prop => obj[prop]);

  return Promise
    .all(values)
    .then(resolvedArray => props.reduce((acc, prop, index) =>
      ({ ...acc, [prop]: resolvedArray[index] }), {}));
};

const getNonPromiseProperties = obj =>
  Object
    .keys(obj)
    .filter(key => !isPromise(obj[key]))
    .reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});

export default function promisePropsMiddleware() {
  return next => action => {

    const {
      type, payload, meta,
    } = action;

    if (!type || !hasPromiseProps(action.payload)) {
      return next(action);
    }

    const nonPromiseProperties = getNonPromiseProperties(payload);

    next({
      type: type.concat('_REQUEST'),
      meta: { ...meta, ...nonPromiseProperties },
    });

    return resolveProps(payload)
      .then(results => next({
        type: type.concat('_SUCCESS'),
        payload: { ...results },
        meta: { ...meta, ...nonPromiseProperties },
      }))
      .catch(Promise.CancellationError, error => {
        next({
          type: type.concat('_FAILURE'),
          error: true,
          payload: error,
          meta: { ...meta, ...nonPromiseProperties },
        });
      })
      .error(error => next({
        type: type.concat('_FAILURE'),
        error: true,
        payload: error,
        meta: { ...meta, ...nonPromiseProperties },
      }));
  };
}
