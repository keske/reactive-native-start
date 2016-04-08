/* @flow */
/* eslint-disable prefer-const */

import React from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
// import Immutable, { get } from 'immutable';

// Actions
import { loadMessage } from '../reducers/modules/message';

const {
  Text,
  ScrollView,
} = React;

class App extends React.Component {

  static propTypes = {
    loadMessage: React.PropTypes.func,
    dispatch: React.PropTypes.func,
    message: React.PropTypes.string,
    isFetching: React.PropTypes.bool,
  };

  componentDidMount() {
    this.props.loadMessage();
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>
          {
            this.props.isFetching ? 'Loading' : this.props.message
          }
        </Text>
      </ScrollView>
    );
  }
}

export default connect(
  state => ({
    message: state.message.data,
    isFetching: state.message.isFetching,
  }),
  dispatch => bindActionCreators({
    loadMessage,
  }, dispatch)
)(App);
