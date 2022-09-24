import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostScreen = ({ navigation, route }) => {
    return (
        <View>
            <Text>PostScreen</Text>
            <Text>{route.params.id}</Text>
        </View>
    );
};

export default PostScreen;

const styles = StyleSheet.create({});
