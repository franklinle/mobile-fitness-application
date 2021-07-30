import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//End Question
export function LengthOfWorkout() {
    const [targetWorkoutLength, setTargetWorkoutLength] = useState("nothing");

    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>How many hours in a week would you workout?</Text>
            <View style ={styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="1-2 hours" onPress={()=> setTargetWorkoutLength("1-2 hours")} /> 
              <Button color={'rgb(81, 130, 135)'} title="3-4 hours" onPress={()=> setTargetWorkoutLength("3-4 hours")} />
              <Button color={'rgb(81, 130, 135)'} title="5-6 hours" onPress={()=> setTargetWorkoutLength("5-6 hours")} />
              <Button color={'rgb(81, 130, 135)'} title="7+ hours" onPress={()=> setTargetWorkoutLength("7+ hours")} />
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
    flex: .55,
    width: "50%",
    marginHorizontal: "20%",
    justifyContent: 'space-between',
  },
  question: {
    marginTop: "45%",
    marginBottom:"20%",
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