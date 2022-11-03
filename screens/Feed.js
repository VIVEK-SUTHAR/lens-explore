import {
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl,
    View,
    TouchableOpacity,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "@apollo/client";
import LatestPost from "../query/LatestPost";
import Post from "../components/Post";
import Loader from "../components/Loader";
import Avatar from "../components/Avatar";
export default function Feed({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);

    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    var { loading, error, data } = useQuery(LatestPost);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Dive into Feed",
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "black",
            headerRight: () => <Avatar size={40} borderColor={"white"} borderWidth={1} />,
        });
    }, [navigation]);
    const showFullPost = (id, title, post) => {
        navigation.navigate("PostScreen", {
            id: id,
            title: title,
            post: post,
        });
    };

    const goToUserProfile = (id, profile) => {
        navigation.navigate("SingleProfilecreen", {
            id: id,
            profile: profile,
        });
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <StatusBar style='light' />
            {data ? (
                <>
                    {data.explorePublications.items.map((item, index) => {
                        if (item.__typename === "Post") {
                            return (
                                <Post
                                    key={item.id}
                                    Postdata={item}
                                    showFullPost={showFullPost}
                                    goToUserProfile={goToUserProfile}
                                />
                            );
                        }
                    })}
                </>
            ) : (
                <Loader />
            )}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: "#1a1a1a",
    },
});
