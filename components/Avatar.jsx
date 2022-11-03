import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getIPFSLink } from "../utils/getIPFSLink";

const Avatar = ({
  src,
  size,
  mt,
  mx,
  p,
  onClick,
  borderColor,
  borderWidth,
}) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

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
          borderWidth: borderWidth ? borderWidth : 0,
          padding: p ? p : 4,
          borderColor: "white",
          marginTop: mt ? mt : 0,
          resizeMode: "contain",
          backgroundColor: src ? "" : "purple",
        }}
        source={{
          uri: getIPFSLink(src),
        }}
      />
    </View>
  );
};

export default Avatar;
{
}
