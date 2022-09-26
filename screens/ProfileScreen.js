import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useQuery } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import RecommendedProfiles from "../query/RecommendedProfiles";
import ProfileCard from "../components/ProfileCard";

const ProfileScreen = ({ navigation }) => {
    const { loading, error, data } = useQuery(RecommendedProfiles);
    console.log(data);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Profiles",
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "green" },
            headerTintColor: "black",
        });
    }, []);

    return (
        <ScrollView style={styles.container}>
            <StatusBar style='light' />
            {!data ? (
                <View>
                    <Text>Loading....</Text>
                </View>
            ) : (
                data.recommendedProfiles.map((item, index) => {
                    return <ProfileCard key={index} profile={item} />;
                })
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e1e",
    },
});
export default ProfileScreen;
