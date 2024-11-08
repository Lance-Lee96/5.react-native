import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail, Meet, Settings } from "../screens/TabScreens";
import {MaterialCommunityIcons} from '@expo/vector-icons'

//이름, 크기, 색깔만 주면 아이콘 컴포넌트를 만들어주는 함수
const TabIcon = ({name, size, color}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
}

//1. Tab네비게이션 생성
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator 
        initialRouteName="Settings"
        screenOptions={({ route }) => ({
            tabBarIcon: props => {
              let name = '';
              if (route.name === 'Mail') name = 'email';
              else if (route.name === 'Meet') name = 'video';
              else name = 'cog';
              return TabIcon({ ...props, name });
            },
            tabBarLabelPosition:'beside-icon',
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor : '#c9c9c9',
                borderTopColor : '#ffffff',
                borderTopWidth : 3,
            },
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#a1a1a1'
          })}
        >
            <Tab.Screen 
            name="Mail" 
            component={Mail}
            options={{
                // tabBarIcon : props => TabIcon({...props, name:'email'}),
                tabBarLabel: 'Inbox',
                tabBarIcon : props =>
                    TabIcon({
                        ...props, name: props.focused ? 'email' : 'email-outline'
                    })
            }}
            />
            <Tab.Screen 
            name="Meet" 
            component={Meet}
            options={{
                // tabBarIcon : props => TabIcon({...props, name:'video'})
                tabBarIcon : props =>
                    TabIcon({
                        ...props, name: props.focused ? 'video' : 'video-outline'
                    })
            }}
            />
            <Tab.Screen 
            name="Settings" 
            component={Settings}
            options={{
                // tabBarIcon : props => TabIcon({...props, name:'cog'})
                tabBarIcon : props =>
                    TabIcon({
                        ...props, name: props.focused ? 'cog' : 'cogs'
                    })
            }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator