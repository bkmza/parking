import React, {Component} from 'react';
import Svg, { Path, Modal, Text, TouchableHighlight, View, StyleSheet, Image } from 'react-native';

class PlaceVerticalComponent extends Component {
    state = {
    };

    // svgJson = require('./images/vertical_place.svg');

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.message}</Text>
                {/* <Svg height={100} width={100}>
                    <Path d={this.svgJson['path']} />
                </Svg> */}
            </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 0.25,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: 'green'
   } 
});

module.exports = PlaceVerticalComponent;