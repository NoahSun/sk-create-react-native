import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Button,
  Image,
  Text,
  FlatList
} from 'react-native';

import PizzaTranslator from './components/PizzaTranslator';
import ButtonBox from './components/ButtonBox';

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
  },
  listView: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center'
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
  state = {
    isLoading: true,
    dataSource: []
  };

  componentDidMount() {
    this.fetchMovieData();
  }

  fetchMovieData = () => {
    this.setState({
      isLoading: true
    });
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.concat(responseJson.movies)
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { isLoading, dataSource } = this.state;
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView>
        <View style={styles.listView}>
          <FlatList
            data={dataSource}
            renderItem={({ item }) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          {isLoading && <ActivityIndicator />}
          <Button title="请求数据" onPress={this.fetchMovieData} />
        </View>
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
          <ButtonBox />
          <Image source={pic} style={{ width: 100, height: 50 }} />
          <View
            style={{
              flex: 1
            }}
          >
            <Greeting name="Noah" />
            <Greeting name="Jessica" />
            <Greeting name="Otherone" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
