import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Alert } from 'react-native';

class PlaceComponent extends Component {
    state = {
    };

    _onPressHandler() {
        Alert.alert("Tapped!");
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onPressHandler} style={styles.container}>
                <Text>{this.props.message}</Text>
            </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 0.25,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'blue'
   }
});

module.exports = PlaceComponent;