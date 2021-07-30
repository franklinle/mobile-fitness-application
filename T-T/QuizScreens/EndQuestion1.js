import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//End Question
export function DaysOfWorkout() {
    const [daysOfWorkout, setDaysOfWorkout] = useState("nothing");

    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>How many days in a week would you workout?</Text>
            <View style= {styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="1-2 days" onPress={()=> setDaysOfWorkout("1-2 days")} /> 
              <Button color={'rgb(81, 130, 135)'} title="2-3 days" onPress={()=> setDaysOfWorkout("2-3 days")} />
              <Button color={'rgb(81, 130, 135)'} title="3-4 days" onPress={()=> setDaysOfWorkout("3-4 days")} />
              <Button color={'rgb(81, 130, 135)'} title="4-5 days" onPress={()=> setDaysOfWorkout("4-5 days")} />
              <Button color={'rgb(81, 130, 135)'} title="5-6 days" onPress={()=> setDaysOfWorkout("5-6 days")} />
              <Button color={'rgb(81, 130, 135)'} title="6-7 days" onPress={()=> setDaysOfWorkout("6-7 days")} />
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
    flex: .7,
    width: "50%",
    marginHorizontal: "20%",
    justifyContent: 'space-between',
  },
  question: {
    marginTop: "40%",
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