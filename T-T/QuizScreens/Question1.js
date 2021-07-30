import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
/* import { useFonts } from 'expo-font';
import { AppLoading} from 'expo'
import * as Font from 'expo-font';
 */
//import RNPickerSelect from 'react-native-picker-select';
//import Button from 'react-bootstrap/Button';

//Fitness Goal Question
export function FitnessGoal() {
    const [fitnessGoal, setFitnessGoal] = useState("nothing");
   /*  const [fontsLoaded, setFontsLoaded] = useState(false);

    function componentWillMount() {
      Font.loadAsync( {
          'ChakraPetch': require('../assets/fonts/ChakraPetch-SemiBold.ttf')
        }
      ).then(()=> setFontsLoaded(true))
    }

    componentWillMount; */
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
 /*    if (!fontsLoaded) {
      return(<AppLoading/>)
    }
 */
    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
          <Text style ={styles.question}>What is your fitness Goal?</Text>
          <View style={styles.buttons}>
            <Button color={'rgb(81, 130, 135)'} title="Increase Activity" onPress={()=> setFitnessGoal("Increase Activity")}/> 
            <Button color={'rgb(81, 130, 135)'} title="Lose Weight" onPress={()=> setFitnessGoal("Lose Weight")} />
            <Button color={'rgb(81, 130, 135)'} title="Gain Muscles" onPress={()=> setFitnessGoal("Gain Muscles")} />
            <Button color={'rgb(81, 130, 135)'} title="Stay Healthy" onPress={()=> setFitnessGoal("Stay Healthy")} />
            <Button color={'rgb(81, 130, 135)'} title="Tone" onPress={()=> setFitnessGoal("Tone")} />
            <Button color={'rgb(81, 130, 135)'} title="Stress Reduction" onPress={()=> setFitnessGoal("Stress Reduction")} />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(100, 181, 190)",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
    },
    buttons: {
      flex: .45,
      width: "50%",
      marginHorizontal: "20%",
      justifyContent: 'space-between',
      zIndex:2,
    },
    question: {
      flex:.14,
      color: "hsla(186, 33%, 32%, 1)",
      fontSize: 30,
      textAlign: "center",
      marginHorizontal: "10%",
      zIndex:2,
      fontWeight: "700",
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 800,
      zIndex:1,
    }
  });

  //Below lies code that may be used
  /* <Pressable onPress={()=>setButton("Increase Activity")} style={(buttonType == 1) ? {backgroundColor: "red"} : {backgroundColor: "blue"}} >
      <Text>Increase Activity</Text>
    </Pressable> 
    <Pressable onPress={()=>setButton("Lose Weight")} style={(buttonType == 2) ? {backgroundColor: "red"} : {backgroundColor: "blue"}} >
      <Text>Lose Weight</Text>
    </Pressable> 
    <Text>{option}</Text> */

  /*Note: Prob onPress direct to a function if more things need to be added*/