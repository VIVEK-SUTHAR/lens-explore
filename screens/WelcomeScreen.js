import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "./Feed";
import PostScreen from "./PostScreen";
import SingleProfilePage from "./SingleProfilePage";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
const WelcomeScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Profiles",
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: { color: "green" },
            headerTintColor: "black",
            headerShown: false,
        });
    }, []);
    return (
        <Stack.Navigator initialRouteName='Feed'>
            <Stack.Screen name='Feed' component={Feed} />
            <Stack.Screen name='PostScreen' component={PostScreen} />
            <Stack.Screen
                name='SingleProfilecreen'
                component={SingleProfilePage}
            />
        </Stack.Navigator>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
