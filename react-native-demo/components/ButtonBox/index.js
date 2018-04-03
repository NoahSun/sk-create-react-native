import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableNativeFeedback
} from 'react-native';

const styles = StyleSheet.create({
  ButtonBoxStyle: {
    flexDirection: 'row'
  },
  Button: {
    borderRadius: 5
  }
});

export default class ButtonBox extends Component {
  render() {
    return (
      <View style={styles.ButtonBoxStyle}>
        <TouchableNativeFeedback
          onPress={() => Alert.alert('Alert Title', 'Alert Body')}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View
            style={[
              { width: 150, height: 50, backgroundColor: '#841584' },
              styles.Button
            ]}
          >
            <Text>Alter - Android feedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => console.log('Alert Title', 'Alert Body')}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View
            style={[
              { width: 150, height: 50, backgroundColor: 'skyblue' },
              styles.Button
            ]}
          >
            <Text>Console.log - Android feedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
