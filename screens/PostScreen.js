import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import Avatar from "../components/Avatar";
import { SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";
import Post from "../components/Post";

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
                    backgroundColor: "#1a1a1a",
                    borderEndColor: "#1a1a1a",
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
                    {/* <View
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
                    </View> */}
                    <Post Postdata={post}/>
                </ScrollView>
            </SafeAreaView>
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    minHeight: 50,
                    backgroundColor: "#2d2d2d",
                    width: "100%",
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Avatar size={40} mx={0} />
                <TextInput
                    placeholder='Write your thoughts'
                    cursorColor={"white"}
                    placeholderTextColor='white'
                    style={{
                        color: "white",
                        flex: 1,
                    }}
                />
                <Icon name='send' color={"white"} size={28} />
            </View>
        </>
    );
};

export default PostScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#1a1a1a",
        paddingVertical: 10,
    },
});
