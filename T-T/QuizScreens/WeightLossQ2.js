import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { setDB } from '../bB/quiz';

//If users chose weight loss as goal
export function WeightLossDate({navigation}) {
    const [weightLossDeadline, setWeightLossDeadline] = useState("nothing");

    async function setWeightDate(string){
      switch(string){
        case "< 2 months":
          setWeightLossDeadline("< 2 months");
          navigation.navigate("StressReduction");
          break;
        case "2-4 months":
          setWeightLossDeadline("2-4 months");
          navigation.navigate("StressReduction");
          break;
        case "4-6 months":
          setWeightLossDeadline("4-6 months");
          navigation.navigate("StressReduction");
          break;
        case "6-8 months":
          setWeightLossDeadline("6-8 months");
          navigation.navigate("StressReduction");
          break;
        case "> 8 months":
          setWeightLossDeadline("> 8 months");
          navigation.navigate("StressReduction");
          break;
        default:
          break;
      }
    }

    if (weightLossDeadline != "nothing"){
      setWeightDate().then(() => {setDB(weightLossDeadline, 7)})
      }
  

    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>What is your target deadline?</Text>
            <View style ={styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="< 2 months" onPress={()=> setWeightDate("< 2 months")} /> 
              <Button color={'rgb(81, 130, 135)'} title="2-4 months" onPress={()=> setWeightDate("2-4 months")} />
              <Button color={'rgb(81, 130, 135)'} title="4-6 months" onPress={()=> setWeightDate("4-6 months")} />
              <Button color={'rgb(81, 130, 135)'} title="6-8 months" onPress={()=> setWeightDate("6-8 months")} />
              <Button color={'rgb(81, 130, 135)'} title="> 8 months" onPress={()=> setWeightDate("> 8 months")} />
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
    zIndex: 2,
  },
  question: {
    marginTop: "45%",
    marginBottom:"20%",
    textAlign: "center",
    color: "hsla(186, 33%, 32%, 1)",
    fontSize: 30,
    marginHorizontal:"10%",
    zIndex: 2,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
    zIndex: 1,
  }
  });
