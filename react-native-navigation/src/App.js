import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components';
import StackNavigation from './navigations/Stack';
import BookStackNavigation from './navigations/BookStack';
import UserStackNavigation from './navigations/UserStack';
import TabNavigator from './navigations/Tab';
import CartTabNavigator from './navigations/Cart';
import ChatTabNavigator from './navigations/ChatTab';
import ChatStackNavigator from './navigations/ChatStack';



// const Container = styled.View`
//     flex : 1;
//     background-color : #ffffff;
//     justify-content : center;
//     align-items : center;
// `

const App = () => {
    return (
        <NavigationContainer>
            <ChatTabNavigator />
        </NavigationContainer>
        
    );
};

export default App;