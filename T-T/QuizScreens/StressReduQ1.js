import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//If users chose Stress Reduction as goal
export function StressReduction() {
    const [funExcercises, setFunExcercises] = useState("nothing");

    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>What type excercises do you enjoy?</Text>
            <Button title="Intense + short" onPress={()=> setFunExcercises("Intense + short")} /> 
            <Text> {"\n"}</Text>
            <Button title="Mild + long" onPress={()=> setFunExcercises("Mild + long")} />
            <Text> {"\n"}</Text>
            <Button title="Stationary" onPress={()=> setFunExcercises("Stationary")} />
            <Text> {"\n"}</Text>
            <Button title="Active" onPress={()=> setFunExcercises("Active")} />
            <Text> {"\n"}</Text>
            <Button title="Other" onPress={()=> setFunExcercises("Other")} />
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