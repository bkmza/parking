import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation'

var HomeScreen = require('./src/components/HomeScreen')
var DetailsComponent = require('./src/components/DetailsComponent')

const App = createStackNavigator({
  Parking: { screen: HomeScreen },
  Details: { screen: DetailsComponent }
});

export default App;
