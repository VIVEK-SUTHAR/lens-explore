import {
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableOpacity,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Image } from "react-native-elements";
import { useEffect } from "react";
import Avatar from "./Avatar";
const Post = ({ Postdata, showFullPost, navigation, goToUserProfile }) => {
    const [data, setData] = useState("");
    var urlPattern =
        "(https?|ftp)://(www\\.)?(((([a-zA-Z0-9.-]+\\.){1,}[a-zA-Z]{2,4}|localhost))|((\\d{1,3}\\.){3}(\\d{1,3})))(:(\\d+))?(/([a-zA-Z0-9-._~!$&'()*+,;=:@/]|%[0-9A-F]{2})*)?(\\?([a-zA-Z0-9-._~!$&'()*+,;=:/?@]|%[0-9A-F]{2})*)?(#([a-zA-Z0-9._-]|%[0-9A-F]{2})*)?";
    const HASHTAG_FORMATTER = string => {
        return string
            .split(/((?:^|\s)(?:#[a-z\d-]+))/gi)
            .filter(Boolean)
            .map((v, index) => {
                if (v.includes("#")) {
                    return (
                        <Text
                            key={index}
                            style={{ color: "yellow", fontWeight: "500" }}
                        >
                            {v}
                        </Text>
                    );
                } else {
                    return <Text key={index}>{v}</Text>;
                }
            });
    };

    function extractURLs(txt) {
        const URL_REGEX =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

        const renderText = txt =>
            txt.split(" ").map((part, index) =>
                URL_REGEX.test(part) ? (
                    <Text key={index} style={{ color: "lightblue" }}>
                        {part}{" "}
                    </Text>
                ) : (
                    part + " "
                )
            );
        return renderText(txt);
    }
    return (
        <View style={styles.container}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <TouchableOpacity
                    onTouchEndCapture={() => {
                        console.log("hi");
                        goToUserProfile(Postdata?.id, Postdata?.profile);
                    }}
                >
                    <Avatar
                        src={Postdata?.profile?.picture?.original?.url}
                        mx={4}
                        p={2}
                        size={60}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View
                        onTouchEndCapture={() => {
                            console.log("hi");
                            goToUserProfile(Postdata?.id, Postdata?.profile);
                        }}
                        style={{
                            flexDirection: "column",
                            marginHorizontal: 2,
                        }}
                    >
                        <Text style={{ color: "green", fontSize: 18 }}>
                            {Postdata?.profile?.name}
                        </Text>
                        <Text style={{ color: "gray", fontSize: 16 }}>
                            @{Postdata?.profile?.handle}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <View
                    onTouchEndCapture={() =>
                        showFullPost(
                            Postdata?.id,
                            Postdata?.profile?.name,
                            Postdata
                        )
                    }
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 15,
                            marginVertical: 10,
                        }}
                    >
                        {/* {Postdata?.metadata?.content} */}
                        {extractURLs(Postdata?.metadata?.content)}
                        {HASHTAG_FORMATTER(Postdata?.metadata?.content)}
                    </Text>
                    {Postdata?.metadata?.image ? (
                        <View
                            style={{
                                backgroundColor: "lightcoral",
                                height: 220,
                                borderRadius: 10,
                            }}
                        >
                            <Image
                                source={{
                                    uri: Postdata?.metadata?.image,
                                }}
                                style={styles.image}
                            />
                        </View>
                    ) : (
                        <></>
                    )}
                </View>
            </TouchableOpacity>
            <View style={styles.statscontainer}>
                <View style={styles.stats}>
                    <AntDesign name='arrowup' size={15} color={"lightblue"} />
                    <Text style={{ color: "white", marginHorizontal: 6 }}>
                        {Postdata?.stats?.totalUpvotes}
                    </Text>
                </View>
                <View style={styles.stats}>
                    <EvilIcons name='comment' size={18} color={"pink"} />
                    <Text style={{ color: "white", marginHorizontal: 6 }}>
                        {Postdata?.stats?.totalAmountOfComments}
                    </Text>
                </View>
                <View style={styles.stats}>
                    <AntDesign name='swap' size={15} color={"red"} />
                    <Text style={{ color: "white", marginHorizontal: 6 }}>
                        {Postdata?.stats?.totalAmountOfMirrors}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1a1a",
        paddingVertical: 15,
        paddingHorizontal: "4%",
        display: "flex",
        flexDirection: "column",
        borderBottomColor: "#F5F8FA",
        borderTopColor: "#F5F8FA",
        borderBottomWidth: 0.18,
        borderColor: "#F5F8FA",
        borderTopWidth: 0.18,
        borderWidth: 0.18,
        borderRadius: 2,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        color: "purple",
    },
    name: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
        marginHorizontal: 4,
    },
    text: {
        fontSize: 16,
        color: "lightgreen",
    },
    statscontainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
        marginVertical: 4,
    },
    stats: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        resizeMode: "contain",
    },
});
