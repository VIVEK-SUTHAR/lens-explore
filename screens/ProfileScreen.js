import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useQuery } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import RecommendedProfiles from "../query/RecommendedProfiles";
import ProfileCard from "../components/ProfileCard";
import { createStackNavigator } from "@react-navigation/stack";
import SingleProfilePage from "./SingleProfilePage";
import Loader from "../components/Loader"
const Stack = createStackNavigator();

const ProfileScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "black",
            title: "Profiles",
            headerTintColor: "black",
            headerShown: false,
        });
    }, []);

    return (
        <Stack.Navigator initialRouteName='ProfileFeed'>
            <Stack.Screen name='ProfileFeed' component={ProfileFeed} />
            <Stack.Screen
                name='SingleProfileScreen'
                component={SingleProfilePage}
            />
        </Stack.Navigator>
    );
};

const ProfileFeed = ({ navigation }) => {
    const { loading, error, data } = useQuery(RecommendedProfiles);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Profiles",
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: { color: "green" },
            headerTintColor: "black",
            headerShown: true,
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "black",
        });
    }, []);

    const showFullProfile = (profile, id) => {
        navigation.navigate("SingleProfileScreen", {
            profile: profile,
            id: id,
        });
    };

    return (
        <ScrollView style={styles.container}>
            <StatusBar style='light' />
            {!data ? (
                <Loader/>
            ) : (
                data.recommendedProfiles.map((item, index) => {
                    return (
                        <ProfileCard
                            key={index}
                            profile={item}
                            navigation={navigation}
                            showFullProfile={showFullProfile}
                        />
                    );
                })
            )}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d1d1d",
    },
});
export default ProfileScreen;
