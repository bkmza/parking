import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.parkingContainer}>
          <Text>Open up App.js to start working on your app!!!!!!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
              onPress={() => {
                alert("test");
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
