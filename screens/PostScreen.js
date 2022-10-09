import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";

const PostScreen = ({ navigation, route }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title || "Post",
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "green" },
            headerTintColor: "white",
        });
    }, []);
    const post = route.params.post;
    return (
        <View style={styles.container}>
            <Text>{post.id}</Text>
        </View>
    );
};

export default PostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e1e",
    },
});
