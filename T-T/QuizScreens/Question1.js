import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import RNPickerSelect from 'react-native-picker-select';
//import Button from 'react-bootstrap/Button';

//Fitness Goal Question
export function FitnessGoal() {
    const [fitnessGoal, setFitnessGoal] = useState("nothing");
    /* const [pressed, setPressed] = useState(false);
    const [buttonType, setButtonType] = useState(); */

    //Okay I'm stupid and I need a full redesign of the following button system if I'm going to do it
    //Currently I'm going to switch to a workaround where the buttons are just going to send the user straight towards 
    //the next page. Of course if a "next" button needs to implemented this will need to be revisted

   /*  function setButton(value) {
      option == value ? setFitnessGoal("nothing") : setFitnessGoal(value)
      option == "nothing" ? setButtonType(0) : setSwitch(option)
      setPressed(!pressed);
    }

    function setSwitch(string){
      if (string == "Increase Activity") setButtonType(1)
      if (string == "Lose Weight") setButtonType(2)
    }
 */
    return(
        <View style = {styles.container}>
            <Text style ={Question.container}>What is your fitness Goal?</Text>
            {/* <Pressable onPress={()=>setButton("Increase Activity")} style={(buttonType == 1) ? {backgroundColor: "red"} : {backgroundColor: "blue"}} >
              <Text>Increase Activity</Text>
            </Pressable> 
            <Pressable onPress={()=>setButton("Lose Weight")} style={(buttonType == 2) ? {backgroundColor: "red"} : {backgroundColor: "blue"}} >
              <Text>Lose Weight</Text>
            </Pressable> 
            <Text>{option}</Text> */}

            {/*Note: Prob onPress direct to a function if more things need to be added*/}
            <Button title="Increase Activity" onPress={()=> setFitnessGoal("Increase Activity")} /> 
            <Text> {"\n"}</Text>
            <Button title="Lose Weight" onPress={()=> setFitnessGoal("Lose Weight")} />
            <Text> {"\n"}</Text>
            <Button title="Gain Muscles" onPress={()=> setFitnessGoal("Gain Muscles")} />
            <Text> {"\n"}</Text>
            <Button title="Stay Healthy" onPress={()=> setFitnessGoal("Stay Healthy")} />
            <Text> {"\n"}</Text>
            <Button title="Tone" onPress={()=> setFitnessGoal("Tone")} />
            <Text> {"\n"}</Text>
            <Button title="Stress Reduction" onPress={()=> setFitnessGoal("Stress Reduction")} />
            <Text> {"\n"}</Text>
            <Text>Note these are buttons from react-native which suck so it will be changed later on to something better </Text>
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