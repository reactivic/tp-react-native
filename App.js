import React from 'react';
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { TabNavigator } from 'react-navigation';
import ListScreen from './ListScreen';
import MapScreen from './MapScreen';

const AppWithData = TabNavigator({
  List: { screen: ListScreen },
  Map: { screen: MapScreen },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      loading: true,
    }
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://mobile-api-jobs.herokuapp.com/api/jobs')
    .then(data => data.json())
    .then(jobs => {
      this.setState({ jobs, loading: false })
    })
    .catch(console.error)
  }
  render() {
    if(this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <AppWithData screenProps={{ jobs: this.state.jobs }} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


