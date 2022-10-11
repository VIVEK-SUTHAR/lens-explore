import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import FetchProfileQuery from "../query/FetchProfileQuery";
import { useQuery } from "@apollo/client";
import Post from "../components/Post";
const SingleProfilePage = ({ navigation, route }) => {
    console.log(route.params.id);
    const [profile, setProfile] = useState(null);
    const [YPOint, setYPOint] = useState(0);
    useEffect(() => {
        setProfile(route.params.profile);
    }, []);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.profile?.name,
            headerStyle: {
                backgroundColor: YPOint >= 158 ? "lightgreen" : "#2d2d2d",
            },
            headerTitleStyle: { color: "green" },
            headerTintColor: "white",
        });
    }, [YPOint]);
    const { loading, error, data } = useQuery(FetchProfileQuery, {
        variables: {
            request: { profileId: route.params.id },
            publicationsRequest: {
                profileId: route.params.id,
                publicationTypes: ["POST"],
            },
        },
    });
    const handleHeaderAnimation = event => {
        console.log(event.nativeEvent.contentOffset.y);
        setYPOint(parseInt(event.nativeEvent.contentOffset.y));
    };
    console.log(data?.publications);
    return (
        <ScrollView style={styles.container} onScroll={handleHeaderAnimation}>
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
                        borderRadius: 10,
                        borderColor: "black",
                        borderWidth: 3,
                    }}
                    source={{
                        uri:
                            profile?.picture?.original?.url ||
                            "https://imgs.search.brave.com/-BmioenTWbLsbjE6EQ54mPZWygVqDD2FX6aVKoBz6vw/rs:fit:336:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/YUlNQXVQajVmVF90/T2E0MHFqeWFBQUFB/QSZwaWQ9QXBp",
                    }}
                />
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <Text style={{ color: "aliceblue", fontSize: 24 }}>
                    {profile?.name}
                </Text>
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
                    backgroundColor: "rhba(255,255,255,0.5)",
                }}
            >
                <Text style={{ color: "aliceblue", fontSize: 14 }}>
                    Followers : {profile?.stats.totalFollowers}
                </Text>
                <Text style={{ color: "aliceblue", fontSize: 14 }}>
                    Following :{profile?.stats.totalFollowing}
                </Text>
            </View>
            <View>
                <Text
                    style={{
                        color: "white",
                        fontSize: 24,
                        marginHorizontal: 20,
                    }}
                >
                    {" "}
                    Posts By {profile?.name}
                </Text>
                {!data && (
                    <View>
                        <Text style={{ color: "white", fontSize: 24 }}>
                            Getting All Posts of {profile?.name}
                        </Text>
                    </View>
                )}
                {data?.publications?.items.map((post, idx) => {
                    return <Post key={idx} Postdata={post} />;
                })}
            </View>
        </ScrollView>
    );
};

export default SingleProfilePage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1e1e1e",
        flex: 1,
    },
});
