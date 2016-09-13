import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class helloworld extends Component {
      render() {
          return (
              <Text>Hello world!</Text>
          );
      }
}

AppRegistry.registerComponent('helloworld', () => helloworld);
