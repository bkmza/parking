import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Navigator } from 'react-native';

var ButtonComponent = require('./ButtonComponent')
var PlaceComponent = require('./PlaceComponent')

class ParkingComponent extends React.Component {

static navigationOptions = {
    title: "Details"
};

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.parkingContainer}>
          <PlaceComponent message="parking" />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
              onPress={() => {
                  
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

module.exports = ParkingComponent;