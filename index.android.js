import React, { Component } from 'react';
import './UserAgent';
import io from 'socket.io-client/socket.io';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

class helloworld extends Component {
    constructor(props) {
        super(props);
        this.state = {picId: 0, chat: "Hello World!"};

        this.socket = io('http://10.0.2.2:3000', {jsonp: false});
        this.socket.on('chat message', function(msg){
            console.log('chat message:' + msg);
            console.log('typeof picId' + typeof(this.state.picId));
            let picId = 1 - this.state.picId;
            this.setState({picId: picId, chat: msg})
        }.bind(this));
    }

    render() {
        return <ViewPicture pic={this.state.picId} chat={this.state.chat} />;
    }
}

class ViewPicture extends Component {
    render() {
        if (this.props.pic == 1) {
            var pic = require('./images/image1.jpg');
        } else {
            var pic = require('./images/image0.jpg');
        } 
        return (
            <View style={{flex: 1}}>
              <Image source={pic} style={styles.backgroundImage}>
                <Text style={styles.red}>
                   {this.props.chat} 
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
