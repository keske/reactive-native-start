/* @flow */
/* eslint-disable prefer-const */

import React from 'react-native';
import App from '../containers/app';

const { View } = React;

export default class Scene extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          padding: 20,
        }}
      >
        <App />
      </View>
    );
  }
}
