import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useQuery } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import RecommendedProfiles from "../query/RecommendedProfiles";
import ProfileCard from "../components/ProfileCard";
import { createStackNavigator } from "@react-navigation/stack";
import SingleProfilePage from "./SingleProfilePage";
const Stack = createStackNavigator();

const ProfileScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Profiles",
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "green" },
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
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "green" },
            headerTintColor: "black",
            headerShown: true,
        });
    }, []);

    const showFullProfile = (profile) => {
        navigation.navigate("SingleProfileScreen", {
            profile:profile
        });
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar style='light' />
            {!data ? (
                <View>
                    <Text>Loading....</Text>
                </View>
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
        backgroundColor: "#1e1e1e",
    },
});
export default ProfileScreen;
