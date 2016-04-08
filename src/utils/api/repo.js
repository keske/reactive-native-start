import request from 'superagent-bluebird-promise';

// Constants
import { API_END_POINT } from '../../constants';

export const apiLoadRepoData = () =>
  request
    .get(API_END_POINT)
    .promise()
    .then(res => res.body);
