import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const { text } = this.state;
    return (
      <View
        style={{
          padding: 12,
          width: '100%'
        }}
      >
        <TextInput
          style={{ height: 50 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')}
        </Text>
      </View>
    );
  }
}
