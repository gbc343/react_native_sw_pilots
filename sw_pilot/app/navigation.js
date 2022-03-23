import React from "react";
import {createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native'


import LoginPage from "./screens/login";
import PilotPage from './screens/pilot';
const Stack = createStackNavigator();

//import AppNavigation from './app/navigation';

const Navigation = () => {

    return (
         <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{headerShown: false}}>
                <Stack.Screen
                name="Login"
                component={LoginPage}
                />
                <Stack.Screen name="Pilots" component={PilotPage}/>
            </Stack.Navigator>
        </NavigationContainer>


    );
};

export default Navigation;