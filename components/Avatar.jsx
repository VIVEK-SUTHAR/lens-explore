import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Avatar = ({ src, size, mt, mx, p }) => {
    return (
        <View
            style={{
                marginHorizontal: mx ? mx : 8,
            }}
        >
            <Image
                style={{
                    height: size ? size : 55,
                    marginRight: mx ? mx : 8,
                    width: size ? size : 55,
                    borderRadius: 100,
                    borderWidth: 2,
                    padding: p ? p : 4,
                    borderColor: "white",
                    marginTop: mt ? mt : 0,
                    resizeMode: "contain",
                }}
                source={{
                    uri: src || "https://i.pravatar.cc/300/men",
                }}
            />
        </View>
    );
};

export default Avatar;
{
}
