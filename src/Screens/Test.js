import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Test = () => {
  const { navigate } = useNavigation();
  const goToAbout = () => {
    navigate("About");
  };
  return (
    <View>
      <Button onPress={goToAbout} title="Go To About" />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
