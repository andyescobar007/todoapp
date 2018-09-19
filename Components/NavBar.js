import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function NavBar ({title}){
    return (
        <View style={styles.tittleContainer}>
            <Text style={style.title}>{title}</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'white'
    },
    titleContainer: {
        paddingTop: 35,
        paddingBottom: 15,
        backgroundColor:'blue'
    }
});