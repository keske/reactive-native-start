/* @flow */

import React from 'react-native';
import { Provider } from 'react-redux/native';
import configureStore from '../reducers/store/configure';
import Scene from '../components/scene';

const Root = () =>
  <Provider store={configureStore()}>
    {() => <Scene />}
  </Provider>;

export default Root;
