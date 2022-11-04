import {
    Animated,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import FetchProfileQuery from "../query/FetchProfileQuery";
import { useQuery } from "@apollo/client";
import Post from "../components/Post";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { getIPFSLink } from "../utils/getIPFSLink";
import { StatusBar } from "expo-status-bar";
import { MaterialBottomTabView } from "@react-navigation/material-bottom-tabs";
const SingleProfilePage = ({ navigation, route }) => {
    console.log(route.params.profile.id);
    const [profile, setProfile] = useState(null);
    const [YPOint, setYPOint] = useState(0);
    useEffect(() => {
        setProfile(route.params.profile);
    }, []);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.profile?.name,
            headerStyle: {
                backgroundColor: YPOint >= 158 ? "#1a1a1a" : "#1a1a1a",
                elevation: 0,
                maxHeight: 80,
                minHeight: 0,
            },
            headerTitleStyle: { color: "green" },
            headerTintColor: "white",
            headerShown: YPOint >= 160 ? true : false,
        });
    }, [YPOint]);
    const { loading, error, data } = useQuery(FetchProfileQuery, {
        variables: {
            request: { profileId: route.params.profile.id },
            publicationsRequest: {
                profileId: route.params.profile.id,
                publicationTypes: ["POST"],
            },
        },
    });
    const handleHeaderAnimation = event => {
        setYPOint(parseInt(event.nativeEvent.contentOffset.y));
    };
    return (
        <>
            <ScrollView
                style={styles.container}
                onScroll={handleHeaderAnimation}
            >
                <SafeAreaView>
                    <View style={{ alignSelf: "stretch" }}>
                        <Image
                            style={{
                                width: "100%",
                                height: 150,
                                borderTopLeftRadius: 5,
                                backgroundColor: "coral",
                                borderTopRightRadius: 5,
                                resizeMode: "contain",
                            }}
                            source={{
                                uri:
                                    profile?.coverPicture?.original?.url ||
                                    getIPFSLink(profile?.picture?.uri) ||
                                    "https://ipfs.filebase.io/ipfs/QmXEt1LUNSS22AQfGhqrfUUbMLN3LeEUbw8Bo3x5JrYGcX",
                            }}
                        />

                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 500,
                                resizeMode: "contain",
                                marginTop: -50,
                                marginHorizontal: 20,
                                borderRadius: 20,
                                borderColor: "#1a1a1a",
                                borderWidth: 3,
                            }}
                            source={{
                                uri:
                                    profile?.picture?.original?.url ||
                                    getIPFSLink(profile?.picture?.uri) ||
                                    "https://imgs.search.brave.com/-BmioenTWbLsbjE6EQ54mPZWygVqDD2FX6aVKoBz6vw/rs:fit:336:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/YUlNQXVQajVmVF90/T2E0MHFqeWFBQUFB/QSZwaWQ9QXBp",
                            }}
                        />
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                minHeight: 50,
                            }}
                        >
                            <Text style={{ color: "aliceblue", fontSize: 24 }}>
                                {profile?.name}
                            </Text>
                            <TouchableOpacity>
                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderColor: "white",
                                        paddingHorizontal: 12,
                                        paddingVertical: 7,
                                        borderRadius: 18,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: 16,
                                        }}
                                    >
                                        Follow
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: "grey", fontSize: 18 }}>
                            @{profile?.handle}
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 2 }}>
                        <Text style={{ color: "aliceblue", fontSize: 16 }}>
                            {profile?.bio}
                        </Text>
                    </View>
                    <View
                        style={{
                            marginHorizontal: 20,
                            marginVertical: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                        }}
                    >
                        <View
                            style={{
                                height: 50,
                                width: 80,
                                justifyContent: "space-around",
                                alignItems: "center",
                                backgroundColor: "rgba(255,255,255,0.09)",
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ color: "aliceblue", fontSize: 20,fontWeight:"700" }}>
                                {profile?.stats?.totalFollowers}
                            </Text>
                            <Text style={{ color: "white",fontSize:14 }}>Followers</Text>
                        </View>
                        <View
                            style={{
                                height: 50,
                                width: 80,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "rgba(255,255,255,0.09)",
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ color: "aliceblue", fontSize: 20,fontWeight:"700" }}>
                                {profile?.stats?.totalFollowing}
                            </Text>
                            <Text style={{ color: "white",fontSize:14 }}>Followers</Text>
                        </View>
                    </View>
                    <View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                backgroundColor: "#1f1f1f",
                                marginHorizontal: 10,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                                borderRadius: 25,
                            }}
                        >
                            <Button
                                title={"Posts"}
                                bg={"#2d2d2d"}
                                borderRadius={15}
                                px={20}
                                py={5}
                                fontSize={20}
                            />
                            <Button
                                title={"Mirrors"}
                                borderRadius={25}
                                px={20}
                                py={5}
                                fontSize={20}
                            />
                            <Button
                                title={"Collects"}
                                borderRadius={25}
                                px={20}
                                py={5}
                                fontSize={20}
                            />
                        </View>
                        {!data && <Loader />}
                        {data?.publications?.items.map((post, idx) => {
                            return (
                                <Post key={idx} Postdata={post} profilePage />
                            );
                        })}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

export default SingleProfilePage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1a1a",
        flex: 1,
    },
});
