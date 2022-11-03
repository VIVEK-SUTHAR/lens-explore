import {
    NavigationContainer,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PlatformColor, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import UserProfile from "./screens/UserProfile";
import CreatePost from "./screens/CreatePost";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
                        screenOptions={() => ({
                            tabBarStyle: {
                                position: "absolute",
                                backgroundColor: "#1a1a1a",
                                borderEndColor: "#1a1a1a",
                            },
                            tabBarActiveTintColor: "white",
                        })}
                    >
                        <Tab.Screen
                            name='Home'
                            component={WelcomeScreen}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <Ionicons
                                            name={
                                                focused
                                                    ? "ios-home"
                                                    : "ios-home-outline"
                                            }
                                            size={25}
                                            color={"white"}
                                        />
                                    );
                                },
                            }}
                        />
                        <Tab.Screen
                            name='Profiles'
                            component={ProfileScreen}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <Ionicons
                                            name={
                                                focused
                                                    ? "ios-people"
                                                    : "ios-people-outline"
                                            }
                                            size={25}
                                            color={"white"}
                                        />
                                    );
                                },
                            }}
                        />
                        <Tab.Screen
                            name='Post'
                            component={CreatePost}
                            options={{
                                tabBarVisibilityAnimationConfig: "hide",
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <AntDesign
                                            name={
                                                focused
                                                    ? "pluscircle"
                                                    : "pluscircleo"
                                            }
                                            size={30}
                                            style={{
                                                zIndex: 10,
                                            }}
                                            color={"white"}
                                        />
                                    );
                                },
                            }}
                        />
                        <Tab.Screen
                            name='Account'
                            component={UserProfile}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <MaterialCommunityIcons
                                            name={
                                                focused
                                                    ? "account-circle"
                                                    : "account-circle-outline"
                                            }
                                            size={25}
                                            color={"white"}
                                        />
                                    );
                                },
                            }}
                        />
                        <Tab.Screen
                            name='Notifications'
                            component={UserProfile}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <Ionicons
                                            name={
                                                focused
                                                    ? "ios-notifications-sharp"
                                                    : "ios-notifications-outline"
                                            }
                                            size={25}
                                            color={"white"}
                                        />
                                    );
                                },
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </ApolloProvider>
    );
}
