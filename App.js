import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
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
                                iconName = "feed";
                            } else if (route.name === "Profiles") {
                                iconName = "group";
                            }
                            return (
                                <FontAwesome
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveBackgroundColor: "#1e1e1e",
                        tabBarInactiveBackgroundColor: "#1e1e1e",
                        tabBarActiveTintColor: "lightblue",
                        tabBarInactiveTintColor: "gray",
                    })}
                >
                    <Tab.Screen name='Home' component={WelcomeScreen} />
                    <Tab.Screen name='Profiles' component={ProfileScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </ApolloProvider>
    );
}
