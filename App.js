import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation'

var ParkingComponent = require('./src/components/ParkingComponent')
var DetailsComponent = require('./src/components/DetailsComponent')

const App = createStackNavigator({
  Parking: { screen: ParkingComponent },
  Details: { screen: DetailsComponent }
});

export default App;
