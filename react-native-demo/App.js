import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            alignItems: 'center',
            textAlignVertical: 'center',
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
            borderWidth: 2,
            borderColor: 'red',
            textAlign: 'center'
          }}
        >
          Hello {this.props.name}
        </Text>
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
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            alignContent: 'center',
            borderColor: 'blue',
            borderWidth: 2
          }}
        >
          <Image source={pic} style={{ flex: 1, width: 100, height: 50 }} />
          <View
            style={{
              flex: 1,
              alignContent: 'flex-end',
              flexDirection: 'column'
            }}
          >
            <Greeting name="Noah" />
            <Greeting name="Jessica" />
            <Greeting name="Otherone" />
          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}>
          <Image source={pic} style={{ width: 100, height: 50 }} />
          <Greeting name="Noah" />
          <Greeting name="Jessica" />
          <Greeting name="Otherone" />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
