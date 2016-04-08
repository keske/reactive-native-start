import request from 'superagent-bluebird-promise';

export const apiLoadPlaces = () =>
  request
    .get('http://localhost:3030/api/posts')
    .promise()
    .then(() => 'Keske');
