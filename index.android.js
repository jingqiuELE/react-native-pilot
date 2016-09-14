import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

class helloworld extends Component {
      render() {
          return (
            <View style={{ flex: 1 }}>
              <Image source={require('./image.jpg')} style={styles.backgroundImage}>
                <Text style={styles.red}>
                  Hello world!
                </Text>
              </Image> 
            </View>
          );
      }
}

const styles = StyleSheet.create({
      backgroundImage: {
          flex: 1,
          resizeMode: 'stretch',
          width: null,
          height: null,
      },
      red: {
          color: 'red',
          textAlign: 'center',
      },
});

AppRegistry.registerComponent('helloworld', () => helloworld);
