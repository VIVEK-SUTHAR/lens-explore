import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileCard = ({ profile }) => {
    return (
        <View style={styles.profileContainer}>
            <Image
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                }}
                source={{
                    uri:
                        profile?.picture?.original?.url ||
                        "https://imgs.search.brave.com/-BmioenTWbLsbjE6EQ54mPZWygVqDD2FX6aVKoBz6vw/rs:fit:336:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/YUlNQXVQajVmVF90/T2E0MHFqeWFBQUFB/QSZwaWQ9QXBp",
                }}
            />
            <View>
                <Text>{profile?.handle}</Text>
                <Text>{profile?.name}</Text>
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
        padding: 10,
        marginHorizontal: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});
