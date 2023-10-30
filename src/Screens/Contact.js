import { View, Text, Button } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
const Contact = ({ navigation, route }) => {
  let { ccc } = route.params;

  const goToAbout = () => {
    navigation.navigate("About");
  };
  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          color: ccc,
        }}
      >
        Contact Screen
      </Text>
      <View style={styles.btn}>
        <Button onPress={goToHome} title="To Home" />
        <Button onPress={goToAbout} title="To About" />
      </View>
    </View>
  );
};

export default Contact;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-evenly",
    width: "90%",
  },
});
