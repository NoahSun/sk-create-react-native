import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';

const styles = StyleSheet.create({
  ButtonBoxStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  Button: {
    width: 150,
    height: 50,
    borderRadius: 15
  }
});

export default class ButtonBox extends Component {
  state = {
    time: 0
  };

  constructor(props) {
    super(props);
    this._onPressButtonIn = this._onPressButtonIn.bind(this);
    this._onPressButton = this._onPressButton.bind(this);
    this._onPressButtonOut = this._onPressButtonOut.bind(this);
    this._onLongPressButton = this._onLongPressButton.bind(this);
  }

  _onPressButtonIn() {
    console.log(this.state);
  }

  _onPressButton() {
    Alert.alert('You pressed the Button');
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the Button');
  }

  _onPressButtonOut() {}

  render() {
    return (
      <View style={styles.ButtonBoxStyle}>
        <TouchableHighlight
          onPressIn={this._onPressButtonIn}
          style={[
            styles.Button,
            { justifyContent: 'center', alignItems: 'center' }
          ]}
        >
          <View
            style={[
              { backgroundColor: 'skyblue' },
              { overflow: 'hidden' },
              { justifyContent: 'center' },
              styles.Button
            ]}
          >
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity>
          <View style={[{ backgroundColor: 'green' }, styles.Button]}>
            <Text>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        {
          /* 只有在Android平台可用  */
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={[{ backgroundColor: 'yellow' }, styles.Button]}>
              <Text>Android-TouchableNaticeFeedback</Text>
            </View>
          </TouchableNativeFeedback>
        }

        <TouchableWithoutFeedback
          onPress={this._onPressButton}
          style={[{ overflow: 'hidden' }, styles.Button]}
        >
          <View
            style={[
              { backgroundColor: '#841584', overflow: 'hidden' },
              styles.Button
            ]}
          >
            <Text>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onLongPress={this._onLongPressButton}>
          <View style={[{ backgroundColor: 'red' }, styles.Button]}>
            <Text>Touchable with Long Press</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
