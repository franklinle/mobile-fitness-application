import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { setDB } from '../bB/quiz';

//If users chose Stress Reduction as goal
export function StressReduction({navigation}) {
    const [funExcercises, setFunExcercises] = useState("nothing");

    async function setEnjoyableExcercises(string){
      switch(string){
        case "Intense + short":
         setFunExcercises("Intense + short");
          navigation.navigate("DaysOfWorkout");
          break;
        case "Mild + long":
         setFunExcercises("Mild + long");
          navigation.navigate("DaysOfWorkout");
          break;
        case "Stationary":
         setFunExcercises("Stationary");
          navigation.navigate("DaysOfWorkout");
          break;
        case "Active":
         setFunExcercises("Active");
          navigation.navigate("DaysOfWorkout");
          break;
        case "Other":
         setFunExcercises("Other");
          navigation.navigate("DaysOfWorkout");
          break;
        default:
          break;
      }
    }

    if (funExcercises != "nothing"){
      setEnjoyableExcercises().then(() => {setDB(funExcercises, 9)})
      }
  
    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>What type excercises do you enjoy?</Text>
            <View style={styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="Intense + short" onPress={()=> setEnjoyableExcercises("Intense + short")} /> 
              <Button color={'rgb(81, 130, 135)'} title="Mild + long" onPress={()=> setEnjoyableExcercises("Mild + long")} />
              <Button color={'rgb(81, 130, 135)'} title="Stationary" onPress={()=> setEnjoyableExcercises("Stationary")} />
              <Button color={'rgb(81, 130, 135)'} title="Active" onPress={()=> setEnjoyableExcercises("Active")} />
              <Button color={'rgb(81, 130, 135)'} title="Other" onPress={()=> setEnjoyableExcercises("Other")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgb(100, 181, 190)",
    flexDirection: "column",
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
