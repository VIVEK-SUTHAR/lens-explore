import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import Avatar from "../components/Avatar";

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
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                <Avatar src={post?.profile?.picture?.original?.url} />
                <View style={{ flexDirection: "column" }}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: "white",
                            fontWeight: "600",
                        }}
                    >
                        {post?.profile?.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            color: "grey",
                            fontWeight: "500",
                        }}
                    >
                        @{post?.profile?.handle}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    padding: 5,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: "aliceblue",
                        fontWeight: "400",
                    }}
                >
                    {post?.metadata?.content}
                </Text>
            </View>
        </View>
    );
};

export default PostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e1e",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});
