import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";

const NativeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={About} name="About" />
      <Stack.Screen component={Contact} name="Contact" />
    </Stack.Navigator>
  );
};

export default NativeStack;
