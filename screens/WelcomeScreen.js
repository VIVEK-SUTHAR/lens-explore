import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function WelcomeScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
          title: "Explore Lens",
          headerStyle: { backgroundColor: "#1e1e1e" },
          headerTitleStyle: { color: "green" },
          headerTintColor: "black",
        });

  }, []);

  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "center",
  },
});