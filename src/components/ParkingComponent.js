import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
var PlaceComponent = require('./PlaceComponent')
class ParkingComponent extends Component {
    state = {
    };

    _places = [
      {
        id: 1,
        orientation: 0
      },
      {
        id: 2,
        orientation: 0
      },
      {
        id: 3,
        orientation: 0
      },
      {
        id: 4,
        orientation: 0
      }
    ];

    renderPlaces(places) {
      return this._places.map((place) => {
        return (
          <PlaceComponent message={place.id} />
        );
      });
    };

    render() {
        return (
            <View style={styles.container}>
              {this.renderPlaces(this._places)}
            </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       flexDirection: 'column'
   }
});

module.exports = ParkingComponent;