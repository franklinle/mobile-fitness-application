import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//LifeStyle
export function LifeStyle() {
    const [option, setOption] = useState("nothing");

    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>Describe your LifeStyle?</Text>
            <Button title="Sedentary" onPress={()=> setOption("Sedentary")} /> 
            <Text> {"\n"}</Text>
            <Button title="Active" onPress={()=> setOption("Active")} />
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