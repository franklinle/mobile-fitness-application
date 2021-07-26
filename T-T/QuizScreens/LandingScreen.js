/* import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Section1 } from './QuizSection1';
import { NavigateTo, NavigateApp } from '../NavigateApp';
import HomeScreen from '../screens/HomeScreen'; */

import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

export function LandingScreen(){
    return(
        <View style ={styles.container}>
            <ImageBackground source = {require('./logo.png')} resizeMode ="cover" style={styles.images}>
                <View style ={styles.button}>
                <Button title= "Begin your fitness journey!"  />
                <Button title="-Log in-"  /> 
                </View>
            </ImageBackground>
        </View>
    )
}

//If anybody wants to make navigation into an actual function please do -Eric Chen
//Essential elements are the screen navigator below, and useNavigation nav constant above
/* const Stack = createStackNavigator();

const Switch = createSwitchNavigator();
export const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="Section1" component={Section1} />
    </Stack.Navigator>
  );
  */

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    images: {
        flex: 1,
        justifyContent: "center",
    },
    button: {
        flexDirection: 'column',
        flex:.13,
        margin: "20%",
        justifyContent: 'space-between',
    }
  });