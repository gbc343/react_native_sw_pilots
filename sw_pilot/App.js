/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native'

import LoginPage from './app/screens/login';
import PilotPage from './app/screens/pilot';
const Stack = createStackNavigator();
import Navigation from './app/navigation';
import {Provider} from 'react-redux';
import { Store } from './redux/store';


const App: () => Node = () => {



  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
  );
};




export default App;
