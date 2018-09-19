import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import PostsList from '../posts/PostList';

import Add from '../Add';
import All from '../All';
import Done from '../Checked';


const TodoStack = createStackNavigator({
    TodoTask: {
        screen: All,
        navigationOptions: ({navigation}) => ({
            title: "Todo Task",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    }
    
});

//Creo el AcercaDe
const DoneStack = createStackNavigator({
    AcercaDe: {
        screen: Done,
        navigationOptions: ({navigation}) => ({
            title: "Done",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    },
});

//galeria
const GaleriaStack = createStackNavigator({
    AcercaDe: {
        screen: GalleryScreen,
        navigationOptions: ({navigation}) => ({
            title: "Galeria",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    },
    TenerifeDesdeArriba: {
        screen: TenerifeDesdeArribaScreen,
        navigationOptions: () => ({
            title: "Tenerife desde arriba",
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })

    }
});


//Videos
const VideosStack = createStackNavigator({
    AcercaDe: {
        screen: VideosScreen,
        navigationOptions: ({navigation}) => ({
            title: "Videos",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    },
    TenerifeDesdeArriba: {
        screen: TenerifeDesdeArribaScreen,
        navigationOptions: () => ({
            title: "Tenerife desde arriba",
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })

    }
});

//Aliados
const AliadosStack = createStackNavigator({
    AcercaDe: {
        screen: AliadosScreen,
        navigationOptions: ({navigation}) => ({
            title: "Aliados",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    },
    TenerifeDesdeArriba: {
        screen: TenerifeDesdeArribaScreen,
        navigationOptions: () => ({
            title: "Tenerife desde arriba",
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })

    }
});


//Contactos
const ContactosStack = createStackNavigator({
    AcercaDe: {
        screen: ContactosScreen,
        navigationOptions: ({navigation}) => ({
            title: "Contactos",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    },
    TenerifeDesdeArriba: {
        screen: TenerifeDesdeArribaScreen,
        navigationOptions: () => ({
            title: "Tenerife desde arriba",
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })

    }
});


const DrawerRaiz = createDrawerNavigator({
    TodoTask: {
        screen: TodoStack
    },
    AcercaDe: {
        screen: DoneStack
    },
    Galeria: {
        screen: GaleriaStack
    },
    Videos: {
        screen: VideosStack
    },
    Aliados: {
        screen: AliadosStack
    },
    Contacto: {
        screen: ContactosStack
    },
}, {
    drawerBackgroundColor: '#c4c2c2',
    contentOptions: {
        activeTintColor: 'white'
    }
});

export default DrawerRaiz;