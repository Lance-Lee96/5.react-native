import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ThemeContext from '../context/ThemeContext';


const ThemedComponent = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={isDarkMode ? darkThemeStyles.container : lightThemeStyles.container}>
     <View style={isDarkMode ? darkThemeStyles.box : lightThemeStyles.box}>
      <Text style={isDarkMode ? darkThemeStyles.text : lightThemeStyles.text}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Button title="Theme Toggle Button" onPress={toggleTheme} />
      </View>
    </View>
  );
};

// 라이트 테마 스타일
const lightThemeStyles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#fff'
 },
 box: {
   backgroundColor: '#fff',
   padding: 20,
   borderRadius: 8,
 },
 text: {
   color: '#000',
   fontSize: 18,
 },
});

// 다크 테마 스타일
const darkThemeStyles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#333'
 },
 box: {
   backgroundColor: '#333',
   padding: 20,
   borderRadius: 8,
 },
 text: {
   color: '#fff',
   fontSize: 18,
 },
});

export default ThemedComponent;