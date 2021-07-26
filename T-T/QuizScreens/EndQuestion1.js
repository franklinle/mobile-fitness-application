import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//End Question
export function DaysOfWorkout() {
    const [daysOfWorkout, setDaysOfWorkout] = useState("nothing");

    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>How many days in a week would you workout?</Text>
            <Button title="1-2 days" onPress={()=> setDaysOfWorkout("1-2 days")} /> 
            <Text> {"\n"}</Text>
            <Button title="2-3 days" onPress={()=> setDaysOfWorkout("2-3 days")} />
            <Text> {"\n"}</Text>
            <Button title="3-4 days" onPress={()=> setDaysOfWorkout("3-4 days")} />
            <Text> {"\n"}</Text>
            <Button title="4-5 days" onPress={()=> setDaysOfWorkout("4-5 days")} />
            <Text> {"\n"}</Text>
            <Button title="5-6 days" onPress={()=> setDaysOfWorkout("5-6 days")} />
            <Text> {"\n"}</Text>
            <Button title="6-7 days" onPress={()=> setDaysOfWorkout("6-7 days")} />
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