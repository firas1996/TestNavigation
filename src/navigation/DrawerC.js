import { View, Text } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const DrawerC = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ paddingTop: 100 }}>
      <DrawerItem
        labelStyle={styles.itemL}
        style={styles.item}
        label="Home"
        onPress={() => {
          navigate("Home");
        }}
      />
      <DrawerItem
        labelStyle={styles.itemL}
        style={styles.item}
        label="About"
        onPress={() => {
          navigate("About");
        }}
      />
      <DrawerItem
        labelStyle={styles.itemL}
        style={styles.item}
        label="Contact"
        onPress={() => {
          navigate("Contact");
        }}
      />
    </View>
  );
};

export default DrawerC;
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ccc",
  },
  itemL: {
    fontSize: 18,
    color: "green",
  },
});
