import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

//Navigation still missing like the rest of the thingy magjigs
export function SplashScreen(){
    return(
        <View style ={styles.container}>
            <ImageBackground source = {require('./SplashScreen.png')} resizeMode ="cover" style={styles.images}>
                <View style ={styles.button}>
                <Button title="Begin your fitness journey!" />
                <Button title="-Log in-"  /> 
                </View>
            </ImageBackground>
        </View>
    )
}



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