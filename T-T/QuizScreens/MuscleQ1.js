import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { setDB } from '../bB/quiz';

//If users chose GainingMuscle as Goal
export function MuscleGroup({navigation}) {
    const [muscleGroup, setMuscleGroup] = useState("nothing");

    async function setMuscleGoal(string){
      switch(string){
        case "Chest":
          setMuscleGroup("Chest");
          navigation.navigate("StressReduction");
          break;
        case "Legs/Calves":
          setMuscleGroup("Legs/Calves");
          navigation.navigate("StressReduction");
          break;
        case "Shoulder":
          setMuscleGroup("Shoulder");
          navigation.navigate("StressReduction");
          break;
        case "Front arm":
          setMuscleGroup("Front arm");
          navigation.navigate("StressReduction");
          break;
        case "Back arm??":
          setMuscleGroup("Back arm??");
          navigation.navigate("StressReduction");
          break;
        case "Back":
          setMuscleGroup("Back");
          navigation.navigate("StressReduction");
          break;
        case "Stomach":
          setMuscleGroup("Stomach");
          navigation.navigate("StressReduction");
          break;
        default:
          break;
      }
    }

    if (muscleGroup != "nothing"){
      setMuscleGoal().then(() => {setDB(muscleGroup, 8)})
    }
  

    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>What Muscle groups do you want to work on?</Text>
            <View style= {styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="Chest" onPress={()=> setMuscleGoal("Chest")} /> 
              <Button color={'rgb(81, 130, 135)'} title="Legs/Calves" onPress={()=> setMuscleGoal("Legs/Calves")} />
              <Button color={'rgb(81, 130, 135)'} title="Shoulder" onPress={()=> setMuscleGoal("Shoulder")} />
              <Button color={'rgb(81, 130, 135)'} title="Front arm" onPress={()=> setMuscleGoal("Front arm")} />
              <Button color={'rgb(81, 130, 135)'} title="Back arm??" onPress={()=> setMuscleGoal("Back arm??")} />
              <Button color={'rgb(81, 130, 135)'} title="Back" onPress={()=> setMuscleGoal("Back")} />
              <Button color={'rgb(81, 130, 135)'} title="Stomach" onPress={()=> setMuscleGoal("Stomach")} />
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