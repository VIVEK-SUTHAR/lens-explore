import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const ProfileCard = ({ profile, navigation, showFullProfile }) => {
    return (
        <View
            style={styles.profileContainer}
            onTouchEndCapture={() => {
                showFullProfile(profile);
            }}
        >
            <Image
                style={{
                    width: 330,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    resizeMode: "contain",
                }}
                source={{
                    uri:
                        profile?.coverPicture?.original?.url ||
                        "https://ipfs.filebase.io/ipfs/QmXEt1LUNSS22AQfGhqrfUUbMLN3LeEUbw8Bo3x5JrYGcX",
                }}
            />
            <Image
                style={{
                    width: 75,
                    height: 75,
                    borderRadius: 500,
                    resizeMode: "contain",
                    marginTop: -45,
                }}
                source={{
                    uri:
                        profile?.picture?.original?.url ||
                        "https://imgs.search.brave.com/-BmioenTWbLsbjE6EQ54mPZWygVqDD2FX6aVKoBz6vw/rs:fit:336:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/YUlNQXVQajVmVF90/T2E0MHFqeWFBQUFB/QSZwaWQ9QXBp",
                }}
            />
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
        backgroundColor: "#2d2d2d",
        marginVertical: 5,
        borderRadius: 5,
        marginHorizontal: 15,
        display: "flex",
        paddingBottom: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
