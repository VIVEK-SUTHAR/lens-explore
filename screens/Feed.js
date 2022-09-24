import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "@apollo/client";
import LatestPost from "../query/LatestPost";
import Post from "../components/Post";
export default function Feed({ navigation }) {
    const { loading, error, data } = useQuery(LatestPost);

    if (loading) {
        return <Text>Loading...</Text>;
    }
    console.log(data);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Explore Lens",
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "green" },
            headerTintColor: "black",
        });
    }, [navigation]);

    const showFullPost = id => {
        navigation.navigate("PostScreen", {
            id: id,
        });
    };

    return (
        <ScrollView style={styles.container}>
            <StatusBar style='light' />
            {data.explorePublications.items.map((post, index) => {
                return (
                    <Post
                        key={index}
                        Postdata={post}
                        showFullPost={showFullPost}
                    />
                );
            })}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e1e",
    },
});
