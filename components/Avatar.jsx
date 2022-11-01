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
          height: size ? size : 45,
          marginRight: mx ? mx : 8,
          width: size ? size : 55,
          borderRadius: 100,
          padding: p ? p : 4,
          borderColor: "white",
          marginTop: mt ? mt : 0,
          resizeMode: "contain",
          backgroundColor: src ? "" : "purple",
        }}
        source={{
          uri: src || "red",
        }}
      />
    </View>
  );
};

export default Avatar;
{
}
