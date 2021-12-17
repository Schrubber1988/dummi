import React from "react";
import Greeting from "./components/Greeting";
import Homescreen from "./scenes/Homescreen";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme"







function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Homescreen/>
        
      <h1> hello</h1>
      <Greeting />
      
      </div>
    </ThemeProvider>
  );
}





export default App;
