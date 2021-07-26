import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//If users chose weight loss as goal
export function WeightLossDate() {
    const [weightLossDeadline, setWeightLossDeadline] = useState("nothing");

    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>What is your target deadline?</Text>
            <Button title="< 2 months" onPress={()=> setWeightLossDeadline("< 2 months")} /> 
            <Text> {"\n"}</Text>
            <Button title="2-4 months" onPress={()=> setWeightLossDeadline("2-4 months")} />
            <Text> {"\n"}</Text>
            <Button title="4-6 months" onPress={()=> setWeightLossDeadline("4-6 months")} />
            <Text> {"\n"}</Text>
            <Button title="6-8 months" onPress={()=> setWeightLossDeadline("6-8 months")} />
            <Text> {"\n"}</Text>
            <Button title="> 8 months" onPress={()=> setWeightLossDeadline("> 8 months")} />
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