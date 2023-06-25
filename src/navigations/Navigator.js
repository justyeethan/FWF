import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Matches from "../screens/Matches";

const ScreenOptions = ({ navigation }) => ({
  headerShown: false,
  headerTitle: null,
  headerTransparent: true,
  cardStyle: { backgroundColor: "transparent" },
  gestureEnabled: false,
  animationEnabled: false,
  navigation, // Pass the navigation prop to screenOptions
});

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={ScreenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Matches" component={Matches} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
