import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MapView } from 'expo';
import withGeolocation from './withGeolocation';

const MapScreen =({ latitude, longitude, screenProps }) => (
  <MapView
    style={{ flex: 1 }}
    region={{
      latitude,
      longitude,
      latitudeDelta: 100,
      longitudeDelta: 100,
    }}
  >
    {screenProps.jobs.map(job => (
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
)

class MapScreenWithHOC extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Carte",
    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-map" size={25} color={tintColor} />,
  };
  render() {
    const WithGeolocation = withGeolocation(MapScreen);
    return <WithGeolocation {...this.props} />
  }
}

export default MapScreenWithHOC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
