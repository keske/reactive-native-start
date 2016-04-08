/* @flow */
/* eslint-disable prefer-const */

import React from 'react-native';
import App from '../containers/app';

let {
  View,
  Text,
} = React;

class Scene extends React.Component {
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

export default Scene;
