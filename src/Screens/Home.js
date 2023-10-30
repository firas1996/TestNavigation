import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native";
import Test from "./Test";

const Home = ({ navigation }) => {
  const goToAbout = () => {
    navigation.navigate("About");
  };
  const goToContact = () => {
    navigation.navigate("Contact", { ccc: "red" });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Homee Screen</Text>
      <Test />
      <View style={styles.btn}>
        <Button onPress={goToAbout} title="To About" />
        <Button onPress={goToContact} title="To Contact" />
      </View>
    </View>
  );
};

export default Home;
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
  txt: {
    fontSize: 24,
  },
});
