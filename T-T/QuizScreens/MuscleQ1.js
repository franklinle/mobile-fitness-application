import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//If users chose GainingMuscle as Goal
export function MuscleGroup() {
    const [muscleGroup, setMuscleGroup] = useState("nothing");

    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>What Muscle groups do you want to work on?</Text>
            <Button title="Chest" onPress={()=> setMuscleGroup("Chest")} /> 
            <Text> {"\n"}</Text>
            <Button title="Legs/Calves" onPress={()=> setMuscleGroup("Legs/Calves")} />
            <Text> {"\n"}</Text>
            <Button title="Shoulder" onPress={()=> setMuscleGroup("Shoulder")} />
            <Text> {"\n"}</Text>
            <Button title="Front arm" onPress={()=> setMuscleGroup("Front arm")} />
            <Text> {"\n"}</Text>
            <Button title="Back arm??" onPress={()=> setMuscleGroup("Back arm??")} />
            <Text> {"\n"}</Text>
            <Button title="Back" onPress={()=> setMuscleGroup("Back")} />
            <Text> {"\n"}</Text>
            <Button title="Stomach" onPress={()=> setMuscleGroup("Stomach")} />
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