import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Liste",
    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-list" size={25} color={tintColor} />,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>La liste ici</Text>
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
