import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/BookMainScreen";
import BookList from "../screens/BookListScreen";
import BookDetail from "../screens/BookDetailScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Platform } from "react-native";

const Stack = createStackNavigator();

const BookStackNavigation = () => {
    return(
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                cardStyle: { backgroundColor: '#ffffff' },
                headerStyle: {
                    height: 110,
                    backgroundColor: '#95a5a6',
                    borderBottomWidth: 5,
                    borderBottomColor: '#34495e'
                },
                headerTitleStyle: { color: '#ffffff', fontSize: 24 },
                headerTitleAlign: "center",
                headerTitle: ({ style }) => (
                    <MaterialCommunityIcons name="book-open-variant" style={style} />
                )
            }}
        >
            <Stack.Screen name="Main" component={Main} options={{headerMode : 'none'}}/>
            <Stack.Screen name="BookList" component={BookList} options={{
                headerTitle: 'BookList Screen',
                headerBackTitleVisible: true,
                headerBackTitle: 'Prev',
                headerTitleStyle: { fontSize: 24 },
                headerTintColor: '#ffffff',
                headerBackImage: ({ tintColor }) => {
                    const style = {
                        marginRight: 5,
                        marginleft: Platform.OS === 'ios' ? 11 : 0
                    }
                    return (
                        <MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={30}
                            color={tintColor}
                            style={style}
                        />
                    )
                }

            }} />
            <Stack.Screen name="BookDetail" component={BookDetail} />
        </Stack.Navigator>
    )
}

export default BookStackNavigation