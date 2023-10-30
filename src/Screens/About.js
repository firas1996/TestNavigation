import { View, Text, Button } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const About = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("Home");
  };
  const goToContact = () => {
    navigation.navigate("Contact", { ccc: "blue" });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>About Screen</Text>
      <View style={styles.btn}>
        <Button onPress={goToHome} title="To Home" />
        <Button onPress={goToContact} title="To Contact" />
      </View>
    </View>
  );
};

export default About;
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
