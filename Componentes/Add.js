import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Add extends React.Component {
    render() {
      return (
        
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.func()}/> 
        
      );
      //   submitInput={inputText => {
     //        this.sendInput(inputText);
     //    }}
    }
  }

  const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });