import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export const Header = () => {
    return (
        <View style={[styles.container, styles.header]}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

export const Contents = () => {
    return (
        <View style={[styles.container, styles.contents]}>
            <Text style={styles.text}>Contents</Text>
        </View>
    )
}

export const Footer = () => {
    return (
        <View style={[styles.container, styles.footer]}>
            <Text style={styles.text}>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:80,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },
    header: {
        backgroundColor: 'grey',
    },
    contents: {
        backgroundColor: 'white',
        height: 640,
        flex:1 //header와 footer가 차지하고 남은 공간 전부 차지
    },
    footer: {
        backgroundColor: 'green',
    },
    text: {
        fontSize: 26
    }
})