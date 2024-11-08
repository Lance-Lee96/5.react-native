import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserHome, UserList, UserProfile } from "../screens/UserScreens";

const UserStack = createStackNavigator();

const UserStackNavigation = () => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen name="UserHome" component={UserHome} />
            <UserStack.Screen name="UserList" component={UserList} />
            <UserStack.Screen name="UserProfile" component={UserProfile} />
        </UserStack.Navigator>
    )
}

export default UserStackNavigation;