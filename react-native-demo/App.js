import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput
} from 'react-native';

import PizzaTranslator from './components/PizzaTranslator';

const styles = StyleSheet.create({
  colHorAndVerCenterContainer: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red'
  },
  horAndVerCenterText: {
    alignItems: 'center',
    textAlignVertical: 'center',
    textDecorationStyle: 'solid',
    borderWidth: 2,
    borderColor: 'powderblue',
    textAlign: 'center'
  }
});

class Greeting extends Component {
  render() {
    return (
      <View style={styles.colHorAndVerCenterContainer}>
        <Text style={styles.horAndVerCenterText}>Hello {this.props.name}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View
        style={[
          styles.colHorAndVerCenterContainer,
          {
            justifyContent: 'space-between'
          }
        ]}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            alignContent: 'center',
            borderColor: 'steelblue',
            borderWidth: 2
          }}
        >
          <PizzaTranslator />
          <Image source={pic} style={{ flex: 1, width: 100, height: 50 }} />
          <View
            style={{
              flex: 1
              // width: '100%'
            }}
          >
            <Greeting name="Noah" />
            <Greeting name="Jessica" />
            <Greeting name="Otherone" />
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
