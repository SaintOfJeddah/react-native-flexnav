import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexNav from "./components/FlexNav.jsx";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function InfoScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Info Screen</Text>
    </View>
  );
}

function main() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlexNav
        topColor="#B33771"
        bottomColor="#6D214F"
        icons={[
          {
            source: require("./assets/home.png"),
            onPress: () => navigation.navigate("Home"),
          },
          {
            source: require("./assets/settings.png"),
            onPress: () => navigation.navigate("Settings"),
          },
          {
            source: require("./assets/info.png"),
            onPress: () => navigation.navigate("Info"),
          },
          {
            source: require("./assets/profile.png"),
            onPress: () => navigation.navigate("Profile"),
          },
        ]}
      ></FlexNav>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={main} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
