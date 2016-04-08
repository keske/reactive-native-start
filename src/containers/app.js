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
    message: React.PropTypes.object,
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
          console.log(this.props.message.get('isFetching'))
        }
          {
            this.props.message.get('isFetching')
              ? 'Loading'
              : this.props.message.get('data')
          }
        </Text>
      </ScrollView>
    );
  }
}

export default connect(
  ({ message }) => ({ message }),
  dispatch => bindActionCreators({
    loadMessage,
  }, dispatch)
)(App);
// export default connect(
//   state => {
//     console.log(state);

//     return ({
//       message: state.message.data,
//       isFetching: state.message.isFetching,
//     })
//   },
//   dispatch => bindActionCreators({
//     loadMessage,
//   }, dispatch)
// )(App);
