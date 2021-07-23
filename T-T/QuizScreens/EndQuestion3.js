import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//End Question
export function TimeFrameOfWorkOut() {
    const [timeFrame, setTimeFrame] = useState("nothing");

    //I have no idea what this is but chris put it down so I assume it makes sense
    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>What is your TimeFrame to workout?</Text>
            <Button title="2 weeks" onPress={()=> setTimeFrame("2 weeks")} /> 
            <Text> {"\n"}</Text>
            <Button title="1 month" onPress={()=> setTimeFrame("1 month")} />
            <Text> {"\n"}</Text>
            <Button title="4 months" onPress={()=> setTimeFrame("4 months")} />
            <Text> {"\n"}</Text>
            <Button title="Ongoing" onPress={()=> setTimeFrame("Ongoing")} />
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