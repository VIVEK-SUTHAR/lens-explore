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
                    padding: 8,
                    borderBottomColor: "#F5F8FA",
                    borderBottomWidth: 0.2,
                }}
            >
                <Text
                    style={{
                        fontSize: 22,
                        letterSpacing: 0.5,
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
                    alignItems:"center",
                    padding: 12,
                }}
            >
                <Text style={{ color: "white",fontSize:16 }}>
                    {convertDate(post?.createdAt)}
                </Text>
                
                <Text style={{ color: "lightgreen",fontSize:14,fontWeight:"600" }}>{post?.appId.toUpperCase()}</Text>
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
    },
});
