import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

class PlaceComponent extends Component {
    state = {
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.message}</Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   } 
});

module.exports = PlaceComponent;