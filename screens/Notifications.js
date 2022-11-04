import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/Button";

function Notifications({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Account",
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: { color: "green" },
            headerTintColor: "black",
            headerShown: true,
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "black",
        });
    }, []);
    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: "white",
                    fontSize: 24,
                    fontWeight: "700",
                }}
            >
                No new notifications
            </Text>
            <Text
                style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "400",
                    textAlign:"center"
                }}
            >
                Go post some content and check again
            </Text>
        </View>
    );
}

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
});
