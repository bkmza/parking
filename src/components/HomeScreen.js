import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Navigator } from 'react-native';

var ButtonComponent = require('./ButtonComponent')
var ParkingComponent = require('./ParkingComponent')

class HomeScreen extends React.Component {

static navigationOptions = {
    title: "Smart Parking"
};

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.parkingContainer}>
          <ParkingComponent message="parking" />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
              onPress={() => {
                  navigate('Details', { name : 'Details' })
              }}>
              I want to leave
          </ButtonComponent>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  parkingContainer: {
    paddingTop: 20,
    paddingBottom: 20,
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

module.exports = HomeScreen;