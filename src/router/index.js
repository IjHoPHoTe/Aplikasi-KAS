import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Onboard } from "../pages";
import { Masuk } from "../pages";
import Tabs from "../pages/navigation/tabs";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboard" component={Onboard} options={{headerShown: false}}/>
            <Stack.Screen name="Masuk" component={Masuk} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default Router;