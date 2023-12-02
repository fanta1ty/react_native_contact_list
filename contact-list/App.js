import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native/src";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Contacts}>
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
