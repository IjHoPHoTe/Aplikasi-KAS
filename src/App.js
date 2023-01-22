import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./router";
import Tabs from "./pages/navigation/tabs";

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    
  );
}

export default App;