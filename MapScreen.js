import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Carte",
    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-map" size={25} color={tintColor} />,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Notre carte</Text>
      </View>
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
