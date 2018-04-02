import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {
  state = { text: '' };

  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.state;
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 50 }}
          onChange={text => this.setState({ text })}
        />
        <Text>{text.split(' ').map(word => word && '🍕')}</Text>
      </View>
    );
  }
}
