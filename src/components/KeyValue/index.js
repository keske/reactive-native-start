/* @flow */

import React, { Component, PropTypes } from 'react-native';

const { View, Text } = React;

// Styles
import styles from './styles.js';

export default class KeyValue extends Component {

  static propTypes = {
    title: PropTypes.string,
    val: PropTypes.any,
  };

  render() {
    const { title, val } = this.props;

    return (
      <View style={styles.view}>
        <Text style={styles.title}>
          { title }:
        </Text>
        <Text style={styles.value}>
          { val }
        </Text>
      </View>
    );
  }
}
