import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import Button from "../components/Button";

const CreatePost = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: "#1e1e1e", elevation: 0 },
            headerTitleStyle: { color: "white" },
            headerTintColor: "black",
            headerTintColor: "black",
            title: "Post",
            headerRight: () => {
                return (
                    <Button
                        title={"Post"}
                        bg={"rgba(255,255,255,0)"}
                        bordrWidth={1}
                        borderColor={"white"}
                        borderRadius={8}
                        px={15}
                        mx={20}
                        
                    />
                );
            },
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text>CreatePost</Text>
        </View>
    );
};

export default CreatePost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
    },
});
