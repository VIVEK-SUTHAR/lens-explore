import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import UserProfile from "./screens/UserProfile";

const Tab = createBottomTabNavigator();
const client = new ApolloClient({
    uri: "https://api.lens.dev",
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='Home'
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName;
                            if (route.name === "Home") {
                                iconName = "home";
                            } else if (route.name === "Profiles") {
                                iconName = "group";
                            } else if (route.name === "Account") {
                                iconName = "user";
                            }
                            return (
                                <FontAwesome
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarStyle: {
                            position: "absolute",
                            backgroundColor: "#2d2d2d",
                            marginHorizontal: 15,
                            // paddingVertical:2,
                            // marginVertical: 20,
                            borderRadius: 20,
                            
                        },
                    })}
                >
                    <Tab.Screen name='Home' component={WelcomeScreen} />
                    <Tab.Screen name='Profiles' component={ProfileScreen} />
                    <Tab.Screen name='Account' component={UserProfile}/>
                </Tab.Navigator>
            </NavigationContainer>
        </ApolloProvider>
    );
}
