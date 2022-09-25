import { Text, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "@apollo/client";

import LatestPost from "../query/LatestPost";
import Post from "../components/Post";
export default function Feed({ navigation }) {
    const { loading, error, data } = useQuery(LatestPost);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Explore Lens",
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "green" },
            headerTintColor: "black",
        });
    }, [navigation]);
    const showFullPost = (id, title, post) => {
        navigation.navigate("PostScreen", {
            id: id,
            title: title,
            post: post,
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
                                key={item.id}
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
