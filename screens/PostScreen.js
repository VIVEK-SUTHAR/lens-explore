import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import Avatar from "../components/Avatar";
import { SafeAreaView } from "react-native";

const PostScreen = ({ navigation, route }) => {
    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none",
            },
        });
        return () =>
            navigation.getParent()?.setOptions({
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: "#2d2d2d",
                    marginHorizontal: 15,
                    marginVertical: 20,
                    borderRadius: 40,
                    borderColor: "#2d2d2d",
                },
            });
    }, [navigation]);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title || "Post",
            tabBarVisible: false,
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "green" },
            headerTintColor: "white",
        });
    }, []);
    const post = route.params.post;
    console.log(post?.createdAt);
    function convertDate(timestamp) {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ];
        const dateObj = new Date(timestamp);
        const hour = dateObj.getUTCHours();
        const minute = dateObj.getUTCMinutes();
        const month = dateObj.getMonth();
        let date = dateObj.getDate();
        console.log(date, hour, minute, months[month]);
        return `At ${hour}:${minute} - ${date} ${
            months[month]
        } ${dateObj.getFullYear()} `;
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View
                        style={{
                            flexDirection: "row",
                            marginHorizontal: 10,
                        }}
                    >
                        <Avatar
                            src={post?.profile?.picture?.original?.url}
                            size={50}
                        />
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
                            padding: 8,
                            borderBottomColor: "#F5F8FA",
                            borderBottomWidth: 0.2,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                letterSpacing: 0.1,
                                color: "aliceblue",
                                fontWeight: "400",
                                paddingHorizontal: 10,
                            }}
                        >
                            {post?.metadata?.content}
                        </Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: "#F5F8FA",
                            borderBottomWidth: 0.2,
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            padding: 12,
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 16 }}>
                            {convertDate(post?.createdAt)}
                        </Text>

                        <Text
                            style={{
                                color: "lightgreen",
                                fontSize: 14,
                                fontWeight: "600",
                            }}
                        >
                            {post?.appId.toUpperCase()}
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <View>
                <Text
                    style={{
                        position: "absolute",
                        bottom: 0,
                        minHeight: 60,
                        backgroundColor: "red",
                        width: "100%",
                        zIndex: 100000,
                    }}
                >
                    HI
                </Text>
            </View>
        </>
    );
};

export default PostScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#1e1e1e",
        paddingVertical: 10,
    },
});
