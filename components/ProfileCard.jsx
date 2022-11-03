import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import { getIPFSLink } from "../utils/getIPFSLink";
const ProfileCard = ({ profile, navigation, showFullProfile }) => {
    return (
        <View
            style={styles.profileContainer}
            onTouchEndCapture={() => {
                showFullProfile(profile, profile.id);
            }}
        >
            <Image
                style={{
                    width: "100%",
                    height: 100,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    resizeMode: "cover",
                }}
                source={{
                    uri:
                        profile?.coverPicture?.original?.url ||
                        getIPFSLink(profile?.profile?.picture?.uri) ||
                        "https://ipfs.filebase.io/ipfs/QmXEt1LUNSS22AQfGhqrfUUbMLN3LeEUbw8Bo3x5JrYGcX",
                }}
            />
            <Avatar src={profile?.picture?.original?.url} mt={-45} size={80} borderColor="#1a1a1a" borderWidth={2} />
            <View style={styles.profileInfo}>
                <Text style={{ color: "white", fontSize: 18 }}>
                    @{profile?.handle}
                </Text>
                <Text style={{ color: "white" }}>{profile?.name}</Text>
                <Text style={{ color: "grey", fontSize: 12, padding: 15 }}>
                    {profile?.bio}
                </Text>
            </View>
            <View style={styles.Stats}>
                <View style={styles.Box}>
                    <Text style={styles.TextColor}>Posts</Text>
                    <Text style={styles.TextColor}>
                        {profile.stats.totalPosts}
                    </Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextColor}>Followers</Text>
                    <Text style={styles.TextColor}>
                        {profile.stats.totalFollowers}
                    </Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextColor}>Following</Text>
                    <Text style={styles.TextColor}>
                        {profile.stats.totalFollowing}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ProfileCard;

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: "#1a1a1a",
        display: "flex",
        paddingBottom: 5,
        flexDirection: "column",
        justifyContent: "center",
        marginHorizontal: 15,
        marginVertical: 10,
        
        alignItems: "center",
        borderColor: "#F5F8FA",
        borderTopWidth: 0.18,
        borderWidth: 0.18,
        borderRadius:10
    },
    profileInfo: {
        marginVertical: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    TextColor: {
        color: "white",
    },
    Stats: {
        flexDirection: "row",
        backgroundColor: "rgba(255,255,255,0.05)",
        padding: 10,
        borderRadius: 8,
    },
    Box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
    },
});
