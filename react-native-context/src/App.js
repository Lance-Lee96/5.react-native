import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemedComponent from './components/ThemedComponent';
import CartScreen from './components/CartScreen';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/UserContext';
import HomeScreen from './components/HomeScreen';

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default App;