import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/Button";

function UserProfile({ navigation }) {
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
                    fontSize: 20,
                    textAlign: "center",
                    color: "white",
                    fontWeight: "700",
                    marginVertical: 10,
                }}
            >
                You need to connect you wallet to get started
            </Text>
            <Button
                title={"Connect Wallet"}
                bg={"white"}
                color={"black"}
                fw={"800"}
                fontSize={24}
                px={20}
                py={10}
                borderRadius={25}
            />
        </View>
    );
}

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
});
