import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({
  title,
  bg,
  h,
  w,
  borderColor,
  bordrWidth,
  borderRadius,
  onClick,
  px,
  py,
  p,
  fontSize,
  mx,
  color,
  fw
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: bg ? bg : "",
          height: h ? h : "auto",
          width: w ? w : "auto",
          borderColor: borderColor ? borderColor : "",
          borderWidth: bordrWidth ? bordrWidth : 0,
          borderRadius: borderRadius ? borderRadius : 0,
          paddingHorizontal: px || 5,
          paddingVertical: py || 5,
          padding: p || 5,
          marginHorizontal: mx || 1,
        }}
        onTouchEndCapture={onClick}
      >
        <Text
          style={{
            fontSize: fontSize || 18,
            color: color || "white",
            fontWeight:fw || "500"
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
