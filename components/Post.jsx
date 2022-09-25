import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Image } from "react-native-elements";
const Post = ({ Postdata, showFullPost, navigation }) => {
    return (
        <View
            style={styles.container}
            onTouchEndCapture={() => showFullPost(id)}
        >
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri:
                            Postdata?.profile?.picture?.original?.url ||
                            "https://i.pravatar.cc/300",
                    }}
                />
                <Text style={styles.name}>{Postdata.profile?.name}</Text>
                <Text style={styles.text}>@{Postdata.profile?.handle}</Text>
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
                </Text>
                {Postdata?.metadata?.image ? (
                    <Image
                        source={{
                            uri: Postdata?.metadata?.image,
                        }}
                        style={styles.image}
                    />
                ) : (
                    <></>
                )}
            </View>
            <View style={styles.statscontainer}>
                <View style={styles.stats}>
                    <AntDesign name='arrowup' size={15} color={"lightblue"} />
                    <Text style={{ color: "white" }}>
                        {Postdata?.stats?.totalUpvotes}
                    </Text>
                </View>
                <View style={styles.stats}>
                    <AntDesign
                        name='arrowdown'
                        size={15}
                        color={"lightgreen"}
                    />
                    <Text style={{ color: "white" }}>
                        {Postdata?.stats?.totalDownvotes}
                    </Text>
                </View>
                <View style={styles.stats}>
                    <EvilIcons name='comment' size={18} color={"pink"} />
                    <Text style={{ color: "white" }}>
                        {Postdata?.stats?.totalAmountOfComments}
                    </Text>
                </View>
                <View style={styles.stats}>
                    <AntDesign name='swap' size={15} color={"red"} />
                    <Text style={{ color: "white" }}>
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
    },
    avatar: {
        width: 40,
        height: 40,
        borderColor: "purple",
        borderWidth: 1,
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
        justifyContent: "space-around",
        backgroundColor: "rgba(255,255,255,0.05)",
        // padding: 6,
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
        height: 220,
        borderRadius: 10,
        marginBottom: 5,
        resizeMode: "contain",
    },
});
