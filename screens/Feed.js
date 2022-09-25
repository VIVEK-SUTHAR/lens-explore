import { View, Text, StyleSheet, Image, ScrollView, Animated } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "@apollo/client";

import LatestPost from "../query/LatestPost";
import Post from "../components/Post";
export default function Feed({ navigation }) {
    const { loading, error, data } = useQuery(LatestPost);
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
            {data ? (
                <>
                    {data.explorePublications.items.map((item, index) => {
                        return (
                            <Post
                                key={index}
                                Postdata={item}
                                showFullPost={showFullPost}
                            />
                        );
                    })}
                </>
            ) : (
                <Text>Gettiny</Text>
            )}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e1e",
    },
});
