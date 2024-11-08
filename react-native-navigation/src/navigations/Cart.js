import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { HomeScreen, CartScreen, ProfileScreen } from "../screens/CartTabScreen";

const CartTabIcon = ({name, size, color}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
}

const CartTab = createBottomTabNavigator();

const CartTabNavigator =() =>{
    return(
        <CartTab.Navigator
        initialRouteName="HomeScreen"
            screenOptions={({ route }) => ({
                tabBarIcon: props => {
                    size = 24;
                    let name = '';
                    if (route.name === 'Home') name = 'home';
                    else if (route.name === 'Cart') name = 'cart';
                    else name = 'account';
                    return CartTabIcon({ ...props, name, size });
                  },
                  tabBarLabelPosition:'beside-icon',
                  tabBarShowLabel:false,
                  tabBarStyle:{
                      backgroundColor : '#c9c9c9',
                      borderTopColor : '#000000',
                      borderTopWidth : 3,
                  },
                  tabBarActiveTintColor: 'blue',
                  tabBarInactiveTintColor: 'gray'
            })}
        >
            <CartTab.Screen
                name="Home"
                component={HomeScreen} />
            <CartTab.Screen
                name="Cart"
                component={CartScreen} />
            <CartTab.Screen
                name="Profile"
                component={ProfileScreen} />

        </CartTab.Navigator>
    )
}

export default CartTabNavigator;