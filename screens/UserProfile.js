import React, { useLayoutEffect } from 'react'
import { Text } from 'react-native'

function UserProfile({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Account",
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: { color: "green" },
            headerTintColor: "black",
            headerShown: true,
            headerStyle: { backgroundColor: "#1e1e1e" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "black",
        });
    }, []);
  return (
    <Text>user account</Text>
  )
}

export default UserProfile