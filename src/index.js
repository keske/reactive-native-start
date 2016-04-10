/* @flow */

import React from 'react-native';
import { Provider } from 'react-redux/native';
import configureStore from './reducers/store/configure';
import App from './containers/App';

const Root = () =>
  <Provider store={configureStore()}>
    {() => <App />}
  </Provider>;

export default Root;
