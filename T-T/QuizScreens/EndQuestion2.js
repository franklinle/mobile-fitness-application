import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//End Question
export function LengthOfWorkout() {
    const [targetWorkoutLength, setTargetWorkoutLength] = useState("nothing");

    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>How many hours in a week would you workout?</Text>
            <Button title="1-2 hours" onPress={()=> setTargetWorkoutLength("1-2 hours")} /> 
            <Text> {"\n"}</Text>
            <Button title="3-4 hours" onPress={()=> setTargetWorkoutLength("3-4 hours")} />
            <Text> {"\n"}</Text>
            <Button title="5-6 hours" onPress={()=> setTargetWorkoutLength("5-6 hours")} />
            <Text> {"\n"}</Text>
            <Button title="7+ hours" onPress={()=> setTargetWorkoutLength("7+ hours")} />
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