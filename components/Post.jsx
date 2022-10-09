import {
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Image } from "react-native-elements";
import { useEffect } from "react";
const Post = ({ Postdata, showFullPost, navigation }) => {
    // onTouchEndCapture={() =>
    //                 showFullPost(
    //                     Postdata?.id,
    //                     Postdata?.profile?.name,
    //                     Postdata
    //                 )
    //             }
    var urlPattern =
        "(https?|ftp)://(www\\.)?(((([a-zA-Z0-9.-]+\\.){1,}[a-zA-Z]{2,4}|localhost))|((\\d{1,3}\\.){3}(\\d{1,3})))(:(\\d+))?(/([a-zA-Z0-9-._~!$&'()*+,;=:@/]|%[0-9A-F]{2})*)?(\\?([a-zA-Z0-9-._~!$&'()*+,;=:/?@]|%[0-9A-F]{2})*)?(#([a-zA-Z0-9._-]|%[0-9A-F]{2})*)?";
    function extractURLs(s) {
        let string = s.match(new RegExp(urlPattern, "g"));
        // let Final = s.replace(
        //     string,
        //     `<Text style={{color:'blue',textDecorationLine:'underline'}}>${string}</Text>`
        // );
        // console.log(string);
        return (
            <Text
                style={{ color: "lightblue" }}
                onPress={e => {
                    e.stopPropagation();
                    Linking.openURL(string[0]);
                }}
            >
                {string}
            </Text>
        );
    }
    return (
        <View style={styles.container}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Image
                    style={styles.avatar}
                    source={{
                        uri:
                            Postdata?.profile?.picture?.original?.url ||
                            "https://i.pravatar.cc/300",
                    }}
                />
                <TouchableOpacity>
                    <View
                        style={{ flexDirection: "column", marginHorizontal: 2 }}
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
            <View>
                <Text
                    style={{
                        color: "white",
                        fontSize: 15,
                        marginVertical: 10,
                    }}
                >
                    {Postdata?.metadata?.content}
                    {extractURLs(Postdata?.metadata?.content)}
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
        backgroundColor: "#2d2d2d",
        marginVertical: 5,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        borderRadius: 15,
        marginHorizontal: 6,
    },
    avatar: {
        width: 55,
        height: 55,
        padding: 2,
        resizeMode: "contain",
        borderRadius: 100,
        marginRight: 5,
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
