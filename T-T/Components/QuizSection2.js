import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
//import RNPickerSelect from 'react-native-picker-select';
//import Button from 'react-bootstrap/Button';

export function Section2() {
    const [option, setOption] = useState("");

    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>Insert Question Here?</Text>
            <Button title="Some Answer" onPress={()=> setOption("SomeAnswer")} />
            <Button title="Other Answer" onPress={()=> setOption("OtherAnswer")} />
            <Button title="Next" />
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