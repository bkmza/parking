import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
var PlaceComponent = require('./PlaceComponent')
class ParkingComponent extends Component {
    state = {
    };

    _places = mockdata["parking"];

    renderPlaces() {
      console.log(this._places);
      return this._places.map((place) => {
        return (
          // console.log(place);
          <PlaceComponent message={place.placeId} />
        );
      });
    };

    render() {
        return (
            <View style={styles.container}>
              {this.renderPlaces()}
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

mockdata = {
  "parking": [
    {
      "placeId": "1",
      "orientation": "0"
    },
    {
      "placeId": "2",
      "orientation": "0"
    },
    {
      "placeId": "3",
      "orientation": "0"
    },
    {
      "placeId": "4",
      "orientation": "0"
    },
    {
      "placeId": "5",
      "orientation": "0"
    },
    {
      "placeId": "6",
      "orientation": "0"
    },
    {
      "placeId": "7",
      "orientation": "1"
    },
    {
      "placeId": "8",
      "orientation": "1"
    },
    {
      "placeId": "9",
      "orientation": "1"
    },
    {
      "placeId": "10",
      "orientation": "1"
    },
    {
      "placeId": "11",
      "orientation": "1"
    },
    {
      "placeId": "12",
      "orientation": "1"
    },
    {
      "placeId": "13",
      "orientation": "0"
    },
    {
      "placeId": "14",
      "orientation": "0"
    },
    {
      "placeId": "15",
      "orientation": "0"
    },
    {
      "placeId": "16",
      "orientation": "0"
    },
    {
      "placeId": "17",
      "orientation": "0"
    },
    {
      "placeId": "18",
      "orientation": "0"
    }
  ],
  "parkingPlaceMap": [
    {
      "column1": "1,2,3,4,5,6",
      "column2": "7,8,9",
      "column3": "10,11,12",
      "column4": "13,14,15,16,17,18"
    }
  ],
  "parkingLockMap": [
    {
      "placeId": "1",
      "placeLockId": "7"
    },
    {
      "placeId": "2",
      "placeLockId": "7"
    },
    {
      "placeId": "3",
      "placeLockId": "8"
    },
    {
      "placeId": "4",
      "placeLockId": "8"
    },
    {
      "placeId": "5",
      "placeLockId": "9"
    },
    {
      "placeId": "6",
      "placeLockId": "9"
    },
    {
      "placeId": "13",
      "placeLockId": "10"
    },
    {
      "placeId": "14",
      "placeLockId": "10"
    },
    {
      "placeId": "15",
      "placeLockId": "11"
    },
    {
      "placeId": "16",
      "placeLockId": "11"
    },
    {
      "placeId": "17",
      "placeLockId": "12"
    },
    {
      "placeId": "18",
      "placeLockId": "12"
    }
  ],
  "parkingPlaceStatus": [
    {
      "placeId": "1",
      "status": "0"
    },
    {
      "placeId": "2",
      "status": "0"
    },
    {
      "placeId": "3",
      "status": "0"
    },
    {
      "placeId": "4",
      "status": "0"
    },
    {
      "placeId": "5",
      "status": "0"
    },
    {
      "placeId": "6",
      "status": "0"
    },
    {
      "placeId": "7",
      "status": "1"
    },
    {
      "placeId": "8",
      "status": "1"
    },
    {
      "placeId": "9",
      "status": "1"
    },
    {
      "placeId": "10",
      "status": "1"
    },
    {
      "placeId": "11",
      "status": "1"
    },
    {
      "placeId": "12",
      "status": "1"
    },
    {
      "placeId": "13",
      "status": "0"
    },
    {
      "placeId": "14",
      "status": "0"
    },
    {
      "placeId": "15",
      "status": "0"
    },
    {
      "placeId": "16",
      "status": "0"
    },
    {
      "placeId": "17",
      "status": "0"
    },
    {
      "placeId": "18",
      "status": "0"
    }
  ]
}