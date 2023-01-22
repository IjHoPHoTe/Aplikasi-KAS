import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Router from "../../router";

import { Onboard } from "..";
import { Masuk } from "..";
import { Home } from "..";


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                {/* <Tab.Screen name="Statistik" component={Statistik} /> */}
            </Tab.Navigator>
        </NavigationContainer>
        </>
    );
}

export default Tabs;