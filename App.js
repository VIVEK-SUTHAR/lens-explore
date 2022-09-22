import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome"
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
             iconName="feed"
            } else if (route.name === "Profiles") {
              iconName = "group"
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveBackgroundColor: "#1e1e1e",
          tabBarInactiveBackgroundColor:"#1e1e1e",
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={WelcomeScreen} />
        <Tab.Screen name="Profiles" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


