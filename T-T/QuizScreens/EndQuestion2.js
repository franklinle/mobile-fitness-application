import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { setDB } from '../bB/quiz';

//End Question
export function LengthOfWorkout({navigation}) {
    const [targetWorkoutLength, setTargetWorkoutLength] = useState("nothing");

    async function setLength(string){
      switch(string){
        case "1-2 hours":
         setTargetWorkoutLength("1-2 hours");
          navigation.navigate("TimeFrameOfWorkout");
          break;
        case "3-4 hours":
         setTargetWorkoutLength("3-4 hours");
          navigation.navigate("TimeFrameOfWorkout");
          break;
        case "5-6 hours":
         setTargetWorkoutLength("5-6 hours");
          navigation.navigate("TimeFrameOfWorkout");
          break;
        case "7+ hours":
         setTargetWorkoutLength("7+ hours");
          navigation.navigate("TimeFrameOfWorkout");
          break;
        default:
          break;
      }
    }

    if (targetWorkoutLength != "nothing"){
      setLength().then(() => {setDB(targetWorkoutLength, 11)})
    }


    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>How many hours in a week would you workout?</Text>
            <View style ={styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="1-2 hours" onPress={()=> setLength("1-2 hours")} /> 
              <Button color={'rgb(81, 130, 135)'} title="3-4 hours" onPress={()=> setLength("3-4 hours")} />
              <Button color={'rgb(81, 130, 135)'} title="5-6 hours" onPress={()=> setLength("5-6 hours")} />
              <Button color={'rgb(81, 130, 135)'} title="7+ hours" onPress={()=> setLength("7+ hours")} />
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
    zIndex: 2,
  },
  question: {
    marginTop: "45%",
    marginBottom:"20%",
    textAlign: "center",
    color: "hsla(186, 33%, 32%, 1)",
    fontSize: 30,
    marginHorizontal:"10%",
    zIndex: 2,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
    zIndex: 1,
  }
  });