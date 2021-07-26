import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//If users chose weight loss as goal
export function WeightLoss() {
    const [weightLossGoal, setWeightLossGoal] = useState("nothing");

    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>What is your target weight loss?</Text>
            <Button title="5-10lbs" onPress={()=> setWeightLossGoal("5-10lbs")} /> 
            <Text> {"\n"}</Text>
            <Button title="10-15lbs" onPress={()=> setWeightLossGoal("10-15lbs")} />
            <Text> {"\n"}</Text>
            <Button title="15-20lbs" onPress={()=> setWeightLossGoal("15-20lbs")} />
            <Text> {"\n"}</Text>
            <Button title="20-25lbs" onPress={()=> setWeightLossGoal("20-25lbs")} />
            <Text> {"\n"}</Text>
            <Button title="25-30lbs" onPress={()=> setWeightLossGoal("25-30lbs")} />
            <Text> {"\n"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      color: 'black',
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const Question = StyleSheet.create({
      container: {
        color: 'red',
        paddingBottom: 10,
        fontSize: 30,
      },
  });