import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import ArucasScreen from '../ArucasScreen/ArucasScreen';
import CatedralScreen from '../CatedralScreen/CatedralScreen';
import TeldeScreen from '../TeldeScreen/TeldeScreen'; 

export default class IglesiasTabPage extends Component{
    render(){
        const MainTab = createMaterialTopTabNavigator({
            Arucas: {
                screen: ArucasScreen,
                navigationOptions: () => ({
                    tabBarLabel: 'Arucas',
                    headerStyle: {backgroundColor: '#E73536'},
                    headerTintColor: 'white'
                })
            },
            Catedral: {
                screen: CatedralScreen,
                navigationOptions: () => ({
                    tabBarLabel: 'Catedral',
                    headerStyle: {backgroundColor: '#E73536'},
                    headerTintColor: 'white'
                })
            },
            Telde: {
                screen: TeldeScreen,
                navigationOptions: () => ({
                    tabBarLabel: 'Telde',
                    headerStyle: {backgroundColor: '#E73536'},
                    headerTintColor: 'white'
                })
            },
        }, {
            tabBarOptions: {
              style: {backgroundColor: '#E73536'}
            }
          });
        return (
            <MainTab screenProps={{rootNavigation: this.props.screenProps.navigation}} />
        );
    }
}