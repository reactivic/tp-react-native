import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import ListScreen from './ListScreen';
import MapScreen from './MapScreen';

export default TabNavigator({
  List: { screen: ListScreen },
  Map: { screen: MapScreen },
});
