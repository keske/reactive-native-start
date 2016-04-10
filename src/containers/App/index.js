/* @flow */

import React, { Component, PropTypes } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

// Actions
import { actionLoadRepoData } from '../../reducers/modules/repo';

// Components
import KeyValue from '../../components/KeyValue';

const {
  Text,
  ScrollView,
} = React;

class App extends Component {

  static propTypes = {
    actionLoadRepoData: PropTypes.func,
    dispatch: PropTypes.func,
    repo: PropTypes.object,
    isFetching: PropTypes.bool,
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
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <KeyValue
          title="Repo"
          val={repo.get('data').name}
        />
        <KeyValue
          title="Forks"
          val={repo.get('data').forks}
        />
        <KeyValue
          title="Stars"
          val={repo.get('data').stargazers_count}
        />
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
