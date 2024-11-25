import React from "react";
import Counter from "./component/Counter";
import { ThemeProvider } from "./context/ThemeContext";
import ThemedComponent from "./component/ThemeComponent";



const App = () => (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
  
  export default App;