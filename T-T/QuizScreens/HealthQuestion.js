import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Final Question
export function HealthIssues() {
    const [healthLimits, setHealthLimits] = useState("nothing");

    //Warning One cannot select Multiple
    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>What type excercises do you prefer or cannot do?</Text>
            <Button title="Chest" onPress={()=> setHealthLimits("Chest")} /> 
            <Text> {"\n"}</Text>
            <Button title="Legs/Calves" onPress={()=> setHealthLimits("Legs/Calves")} />
            <Text> {"\n"}</Text>
            <Button title="Shoulder" onPress={()=> setHealthLimits("Shoulder")} />
            <Text> {"\n"}</Text>
            <Button title="Front arm" onPress={()=> setHealthLimits("Front arm")} />
            <Text> {"\n"}</Text>
            <Button title="Back arm??" onPress={()=> setHealthLimits("Back arm??")} />
            <Text> {"\n"}</Text>
            <Button title="Back" onPress={()=> setHealthLimits("Back")} />
            <Text> {"\n"}</Text>
            <Button title="Stomach" onPress={()=> setHealthLimits("Stomach")} />
            <Text> {"\n"}</Text>
            <Text>NOTE:Warning this one is not done yet and there is no indication if this should even be added - Eric</Text>
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