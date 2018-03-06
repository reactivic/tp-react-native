import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MapView } from 'expo';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Carte",
    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-map" size={25} color={tintColor} />,
  };
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    }
  }
  componentDidMount() {
    fetch('https://mobile-api-jobs.herokuapp.com/api/jobs')
    .then(data => data.json())
    .then(jobs => {
      this.setState({ jobs })
    })
    .catch(console.error)
  }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 100,
          longitudeDelta: 100,
        }}
      >
        {this.state.jobs.map(job => (
          <MapView.Marker
            key={job.id}
            coordinate={{
              latitude: parseInt(job.latitude),
              longitude: parseInt(job.longitude),
            }}
            pinColor={job.status === "true" ? 'green' : 'red'}
            title={job.name}
          />
        ))}
      </MapView>
    );
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
