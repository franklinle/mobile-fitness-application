import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable } from 'react-native';

//Start of Quiz
//Implement Pressable
export function QuizStart() {

    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>A Fitness Quiz!</Text>
            <Text style= {styles.text}>A quiz on your fitness preferences and goals! This will help us prepare the best custom plan for you!</Text>
            <View style ={styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="Start the Quiz Now!" /> 
              {/* <Button color={'rgb(81, 130, 135)'} title="-Skip Quiz-" /> */}
            </View>
            <Pressable >
              <Text style={{color: "white", marginTop: "85%"}}>-Skip Quiz-</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(100, 181, 190)",
      alignItems: 'center',
    },
    buttons: {
      flex: .2,
      width: "50%",
      marginHorizontal: "20%",
      justifyContent: 'space-between',
    },
    question: {
      marginTop: "45%",
      marginBottom:"5%",
      color: "hsla(186, 33%, 32%, 1)",
      fontSize: 30,
    },
    text : {
      textAlign: "center",
      fontSize: 15,
      color: "hsla(186, 33%, 32%, 1)",
      width: "70%",
      marginBottom: "20%",
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 800,
    }
  });
