import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//If users chose weight loss as goal
export function WeightLoss() {
    const [weightLossGoal, setWeightLossGoal] = useState("nothing");

    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>What is your target weight loss?</Text>
            <View style ={styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="5-10lbs" onPress={()=> setWeightLossGoal("5-10lbs")} /> 
              <Button color={'rgb(81, 130, 135)'} title="10-15lbs" onPress={()=> setWeightLossGoal("10-15lbs")} />
              <Button color={'rgb(81, 130, 135)'} title="15-20lbs" onPress={()=> setWeightLossGoal("15-20lbs")} />
              <Button color={'rgb(81, 130, 135)'} title="20-25lbs" onPress={()=> setWeightLossGoal("20-25lbs")} />
              <Button color={'rgb(81, 130, 135)'} title="25-30lbs" onPress={()=> setWeightLossGoal("25-30lbs")} />
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
    flex: .58,
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
