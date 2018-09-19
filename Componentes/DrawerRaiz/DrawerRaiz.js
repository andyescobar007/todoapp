import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import NoticiasScreen from '../NoticiasScreen/NoticiasScreen';
import AcercaDeScreen from '../AcercaDe/AcercaDe';
import TenerifeDesdeArribaScreen from '../TenerifeDesdeArribaScreen/TenerifeDesdeArribaScreen';
import IglesiasTabPage from '../IglesiasTabPage/IglesiasTabPage';
import AliadosScreen from '../AliadosScreen/AliadosScreen';
import ContactosScreen from '../ContactosScreen/ContactosScreen';
import GaleriaScreen from '../GaleriaScreen';
import VideosScreen from '../VideosScreen/VideosScreen';
import PostsList from '../posts/PostList';
import GalleryScreen from '../GalleryScreen';



//Creo el componente el posts

/*const Posts = ()=> (
    <View style={{flex: 1}}>
    
    <PostsList />
    </View>
);*/

// Creo el menu
//Primero la seccion de noticias
const NoticiasStack = createStackNavigator({
    Noticias: {
        screen: PostsList,
        navigationOptions: ({navigation}) => ({
            title: "Noticias",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    }
    /*Posts: {
        screen: ({ navigation }) => <IglesiasTabPage screenProps={{ rootNavigation: navigation }}/>,
        navigationOptions: () => ({
            title: "Posts",
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    }*/
});

//Creo el AcercaDe
const AcercaDeStack = createStackNavigator({
    AcercaDe: {
        screen: AcercaDeScreen,
        navigationOptions: ({navigation}) => ({
            title: "Acerca de",
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
    Noticias: {
        screen: NoticiasStack
    },
    AcercaDe: {
        screen: AcercaDeStack
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
    drawerBackgroundColor: '#E73536',
    contentOptions: {
        activeTintColor: 'white'
    }
});

export default DrawerRaiz;