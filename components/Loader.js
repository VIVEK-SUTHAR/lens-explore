import React, { useRef, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
    const animation = useRef(null);
    return (
        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    height: "auto",
                }}
                source={require("../assets/loader2.json")}
            />
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonContainer}>Getting Posts</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        flex: 5,
        justifyContent: "center",
        alignItems:"center"
    },
    buttonContainer: {
        color: "white",
        fontSize: 24,
        fontWeight: "800",
    },
});
