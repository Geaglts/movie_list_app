import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../containers/HomeScreen";
import MovieScreen from "../containers/MovieScreen";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title: "Películas",
                        headerTitleStyle: { alignSelf: "center" },
                    }}
                />
                <Stack.Screen
                    name="MovieScreen"
                    component={MovieScreen}
                    options={{ title: "Películas" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
