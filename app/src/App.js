import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListeScreen from "./Screens/ListeScreen"; 
import LoginScreen from "./Screens/LoginScreen"; 
import RegisterScreen from "./Screens/RegisterScreen"; 
import ProfileScreen from "./Screens/ProfileScreen"; 

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen name="Liste" component={ListeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
