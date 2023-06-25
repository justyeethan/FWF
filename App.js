import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigations/Navigator";
import Home from "./src/screens/Home";
import { StatusBar, SafeAreaView, Text } from "react-native";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";

enableScreens();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent={true} />
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
