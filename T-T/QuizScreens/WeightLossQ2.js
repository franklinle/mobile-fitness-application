import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//If users chose weight loss as goal
export function WeightLossDate() {
    const [weightLossDeadline, setWeightLossDeadline] = useState("nothing");

    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>What is your target deadline?</Text>
            <View style ={styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="< 2 months" onPress={()=> setWeightLossDeadline("< 2 months")} /> 
              <Button color={'rgb(81, 130, 135)'} title="2-4 months" onPress={()=> setWeightLossDeadline("2-4 months")} />
              <Button color={'rgb(81, 130, 135)'} title="4-6 months" onPress={()=> setWeightLossDeadline("4-6 months")} />
              <Button color={'rgb(81, 130, 135)'} title="6-8 months" onPress={()=> setWeightLossDeadline("6-8 months")} />
              <Button color={'rgb(81, 130, 135)'} title="> 8 months" onPress={()=> setWeightLossDeadline("> 8 months")} />
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
    flex: .57,
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
