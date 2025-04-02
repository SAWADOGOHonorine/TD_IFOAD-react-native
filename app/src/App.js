import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ListScreen from "./Screens/ListScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Connexion" }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Inscription" }} />
        <Stack.Screen name="List" component={ListScreen} options={{ title: "Liste des Utilisateurs" }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profil Utilisateur" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

