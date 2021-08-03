import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//If users chose GainingMuscle as Goal
export function MuscleGroup() {
    const [muscleGroup, setMuscleGroup] = useState("nothing");

    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>What Muscle groups do you want to work on?</Text>
            <View style= {styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="Chest" onPress={()=> setMuscleGroup("Chest")} /> 
              <Button color={'rgb(81, 130, 135)'} title="Legs/Calves" onPress={()=> setMuscleGroup("Legs/Calves")} />
              <Button color={'rgb(81, 130, 135)'} title="Shoulder" onPress={()=> setMuscleGroup("Shoulder")} />
              <Button color={'rgb(81, 130, 135)'} title="Front arm" onPress={()=> setMuscleGroup("Front arm")} />
              <Button color={'rgb(81, 130, 135)'} title="Back arm??" onPress={()=> setMuscleGroup("Back arm??")} />
              <Button color={'rgb(81, 130, 135)'} title="Back" onPress={()=> setMuscleGroup("Back")} />
              <Button color={'rgb(81, 130, 135)'} title="Stomach" onPress={()=> setMuscleGroup("Stomach")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "rgb(100, 181, 190)",
  },
  buttons: {
    flex: .8,
    width: "50%",
    marginHorizontal: "20%",
    justifyContent: 'space-between',
  },
  question: {
    marginTop: "35%",
    marginBottom:"17%",
    textAlign: "center",
    color: "hsla(186, 33%, 32%, 1)",
    fontSize: 30,
    marginHorizontal:"10%"
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  }
  });