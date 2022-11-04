import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import { Input } from "react-native-elements";
const CreatePost = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: "#1e1e1e", elevation: 0 },
            headerTitleStyle: { color: "white" },
            headerTintColor: "black",
            headerTintColor: "black",
            title: "Post",
            headerRight: () => {
                return (
                    <Button
                        title={"Post"}
                        bg={"rgba(255,255,255,0)"}
                        bordrWidth={1}
                        borderColor={"white"}
                        borderRadius={18}
                        px={15}
                        mx={20}
                    />
                );
            },
        });
    }, []);

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                <Avatar size={45} />
                <View>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 15,
                            fontWeight: "900",
                        }}
                    >
                        Vivek
                    </Text>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 15,
                            fontWeight: "700",
                            color: "lightgray",
                        }}
                    >
                        iamvivek.lens
                    </Text>
                </View>
            </View>
            <View
                style={{
                    marginVertical: 20,
                }}
            >
                <TextInput
                    placeholder='Write down your thoughts'
                    placeholderTextColor={"white"}
                    cursorColor={"white"}
                    autoFocus={true}
                    style={{
                        fontSize: 20,
                        color: "white",
                        fontWeight:"600"
                    }}
                />
                
            </View>
        </View>
    );
};

export default CreatePost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        padding: 20,
    },
});
