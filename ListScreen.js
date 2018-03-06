import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from "react-native-elements";

const JobIsTaken = () => (
  <Ionicons
    size={30}
    name="ios-checkmark-circle"
    color="green"
  />
);

const _keyExtractor = item => item.id;

export default class ListScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Liste",
    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-list" size={25} color={tintColor} />,
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          data={this.props.screenProps.jobs}
          keyExtractor={_keyExtractor}
          renderItem={({item}) =>
            <ListItem
              key={item.id}
              title={item.name}
              hideChevron
              badge={item.status === "true" ? { element: <JobIsTaken /> } : { element: <View /> }}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
