import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Start of Quiz
export function QuizStart() {

    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>A Fitness Quiz!</Text>
            <Text>A quiz on your fitness preferences and goals! This will help us prepare the best custom plan for you!</Text>
            <Button title="Start the Quiz Now!" /> 
            <Text> {"\n"}</Text>
            <Button title="-Skip Quiz-" />
            <Text> {"\n"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      color: 'black',
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const Question = StyleSheet.create({
      container: {
        color: 'red',
        paddingBottom: 10,
        fontSize: 30,
      },
  });