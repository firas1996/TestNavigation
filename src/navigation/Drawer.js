import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import React from "react";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import NativeStack from "./NativeStack";
import DrawerC from "./DrawerC";

const Drawer = () => {
  const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator
      drawerContent={DrawerC}
      screenOptions={{ headerShown: false }}
    >
      <drawer.Screen name="Stack" component={NativeStack} />
    </drawer.Navigator>
  );
};

export default Drawer;
