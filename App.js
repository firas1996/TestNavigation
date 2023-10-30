import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./src/navigation/Drawer";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </>
  );
}
