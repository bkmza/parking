import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Button from './Button';

var PlaceComponent = require('./src/components/PlaceComponent')

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.parkingContainer}>
          <PlaceComponent message="parking" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
              onPress={() => {
              }}>
              I want to leave
          </Button>
        </View>
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
  parkingContainer: {
    paddingTop: 20,
    flex: 0.85
  },
  buttonContainer: {
    paddingTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 0.15 
  }
});
