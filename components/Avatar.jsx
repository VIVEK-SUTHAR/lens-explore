import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Avatar = ({ src, size, mt, mx, p ,onClick,borderColor,borderWidth}) => {
  return (
    <View
      style={{
        marginHorizontal: mx ? mx : 8,
      }}
      onTouchEndCapture={onClick}
    >
      <Image
        style={{
          height: size ? size : 45,
          marginRight: mx ? mx : 8,
          width: size ? size : 55,
          borderRadius: 100,
          borderColor: borderColor ? borderColor : "",
          borderWidth:borderWidth?borderWidth:0,
          padding: p ? p : 4,
          borderColor: "white",
          marginTop: mt ? mt : 0,
          resizeMode: "contain",
          backgroundColor: src ? "" : "purple",
        }}
        source={{
          uri: src || "https://avatars.dicebear.com/api/avataaars/john.svg",
        }}
      />
    </View>
  );
};

export default Avatar;
{
}
