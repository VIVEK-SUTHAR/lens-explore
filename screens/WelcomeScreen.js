import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "./Feed";
import PostScreen from "./PostScreen";
const Stack = createStackNavigator();
const WelcomeScreen = () => {
    return (
        <Stack.Navigator initialRouteName='Feed'>
            <Stack.Screen name='Feed' component={Feed} />
            <Stack.Screen name='PostScreen' component={PostScreen} />
        </Stack.Navigator>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
