/* @flow */
/* eslint-disable prefer-const */

import React from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

// Actions
import { actionLoadRepoData } from '../reducers/modules/repo';

const {
  Text,
  ScrollView,
} = React;

class App extends React.Component {

  static propTypes = {
    actionLoadRepoData: React.PropTypes.func,
    dispatch: React.PropTypes.func,
    repo: React.PropTypes.object,
    isFetching: React.PropTypes.bool,
  };

  componentDidMount() {
    this.props.actionLoadRepoData();
  }

  render() {
    const { repo } = this.props;

    if (repo.get('isFetching')) {
      return (
        <Text>
          Loading...
        </Text>
      );
    }

    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 30,
        }}
      >
        <Text>
          {
            `Repo name: ${repo.get('data').name}`
          }
        </Text>
        <Text>
          {
            `Forks: ${repo.get('data').forks}`
          }
        </Text>
        <Text>
          {
            `Stars: ${repo.get('data').stargazers_count}`
          }
        </Text>
      </ScrollView>
    );
  }
}

export default connect(
  ({ repo }) => ({ repo }),
  dispatch => bindActionCreators({
    actionLoadRepoData,
  }, dispatch)
)(App);
