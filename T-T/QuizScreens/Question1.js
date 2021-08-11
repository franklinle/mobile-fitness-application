import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { setDB } from '../bB/quiz';

//Fitness Goal Question
export function FitnessGoal({navigation}) {
    const [fitnessGoal, setFitnessGoal] = useState("nothing");

    async function setGoal (number){
      switch(number){
        case 1:
          setFitnessGoal("Increase Activity");
          navigation.navigate("StressReduction");
          break;
        case 2:
          setFitnessGoal("Lose Weight");
          navigation.navigate("WeightLoss");
          break;
        case 3:
          setFitnessGoal("Gain Muscles");
          navigation.navigate("MuscleQ1");
          break;
        case 4:
          setFitnessGoal("Stay Healthy");
          navigation.navigate("StressReduction");
          break;
        case 5:
          setFitnessGoal("Tone");
          navigation.navigate("StressReduction");
          break;
        case 6:
          setFitnessGoal("Stress Reduction");
          navigation.navigate("StressReduction");
          break;
        default:
          break;
      }
    }

    if (fitnessGoal != "nothing"){
      setGoal().then(() => {setDB(fitnessGoal,5)})
    }


    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
          <Text style ={styles.question}>What is your fitness Goal?</Text>
          <View style={styles.buttons}>
            <Button color={'rgb(81, 130, 135)'} title="Increase Activity" onPress={()=> setGoal(1)}/> 
            <Button color={'rgb(81, 130, 135)'} title="Lose Weight" onPress={()=> setGoal(2)} />
            <Button color={'rgb(81, 130, 135)'} title="Gain Muscles" onPress={()=> setGoal(3)} />
            <Button color={'rgb(81, 130, 135)'} title="Stay Healthy" onPress={()=> setGoal(4)} />
            <Button color={'rgb(81, 130, 135)'} title="Tone" onPress={()=> setGoal(5)} />
            <Button color={'rgb(81, 130, 135)'} title="Stress Reduction" onPress={()=> setGoal(6)} />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(100, 181, 190)",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
    },
    buttons: {
      flex: .45,
      width: "50%",
      marginHorizontal: "20%",
      justifyContent: 'space-between',
      zIndex:2,
    },
    question: {
      flex:.14,
      color: "hsla(186, 33%, 32%, 1)",
      fontSize: 30,
      textAlign: "center",
      marginHorizontal: "10%",
      zIndex:2,
      fontWeight: "700",
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 800,
      zIndex:1,
    }
  });
