import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import WriteScreen from "../screens/WriteScreen";
import { AntDesign } from '@expo/vector-icons'
import { Pressable, Text, View, StyleSheet } from "react-native";

const Stack = createStackNavigator();

const BoardStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1e1e1e',

                },
                headerTitleStyle: { color: '#ffffff' },
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen name="Main" component={MainScreen} options={{
                title: '게시글 목록'
            }} />
            <Stack.Screen name="Write" component={WriteScreen}
                options={({navigation}) => ({
                    title: '글쓰기',
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()} style={{ marginLeft: 20 }}>
                            <AntDesign name="close" size={24} color="white" />
                        </Pressable>
                    )
                })} />
        </Stack.Navigator>
    )
}

export default BoardStack