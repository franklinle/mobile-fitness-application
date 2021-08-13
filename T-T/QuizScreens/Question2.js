import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {setDB} from '../bB/quiz';

const QUESTION_ONE = 1;

//LifeStyle
export function LifeStyle({navigation}) {
    const [workoutLifeStyle, setWorkoutLifeStyle] = useState("nothing");

    async function setLifeStyle (number) {
      switch (number){
        case 1:
          setWorkoutLifeStyle("Sedentary");
          navigation.navigate("Question1");
          break;
        case 2:
          setWorkoutLifeStyle("Active");
          navigation.navigate("Question1");
          break;
        default:
          break;
      }
    }

    if (workoutLifeStyle != "nothing"){
      setLifeStyle().then(() => {setDB(workoutLifeStyle, 4)})
    }



    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>Describe your LifeStyle?</Text>
            <View style={styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="Sedentary" onPress={()=> setLifeStyle(1)} /> 
              <Button color={'rgb(81, 130, 135)'} title="Active" onPress={()=> setLifeStyle(2)} />
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
    flex: .2,
    width: "50%",
    marginHorizontal: "20%",
    justifyContent: 'space-between',
  },
  question: {
    marginTop: "45%",
    marginBottom:"20%",
    color: "hsla(186, 33%, 32%, 1)",
    fontSize: 30,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  }
  });
