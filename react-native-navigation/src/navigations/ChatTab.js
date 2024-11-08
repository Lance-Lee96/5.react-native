import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { FriendScreen, SettingScreen} from "../screens/ChatScreens";

import ChatStackNavigator from "./ChatStack";


const ChatTabIcon = ({name, size, color}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
}

const ChatTab = createBottomTabNavigator();


const ChatTabNavigator =() =>{
    return(
        <ChatTab.Navigator
        initialRouteName="FriendScreen"
            screenOptions={({ route }) => ({
                tabBarIcon: props => {
                    size = 24;
                    let name = '';
                    if (route.name === 'Friend') name = 'human-queue';
                    else if (route.name === 'Chat') name = 'chat';
                    else name = 'cog';
                    return ChatTabIcon({ ...props, name, size });
                  },
                  tabBarLabelPosition:'beside-icon',
                  tabBarShowLabel:false,
                  tabBarStyle:{
                      backgroundColor : '#ffd700',
                      borderTopColor : '#000000',
                      borderTopWidth : 3,
                  },
                  tabBarActiveTintColor: 'white',
                  tabBarInactiveTintColor: 'black'
            })}
        >
            <ChatTab.Screen
                name="Friend"
                component={FriendScreen} />
            <ChatTab.Screen
                name="Chat"
                component={ChatStackNavigator} >
                 
                </ChatTab.Screen>
            <ChatTab.Screen
                name="Setting"
                component={SettingScreen} />

        </ChatTab.Navigator>
    )
}

export default ChatTabNavigator;