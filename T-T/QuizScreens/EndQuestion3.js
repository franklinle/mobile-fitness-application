import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { setDB } from '../bB/quiz';

//End Question
export function TimeFrameOfWorkOut({navigation}) {
    const [timeFrame, setTimeFrame] = useState("nothing");

    async function setFrame(string){
      switch(string){
        case "2 weeks":
         setTimeFrame("2 weeks");
          navigation.navigate("AppHome");
          break;
        case "1 month":
         setTimeFrame("1 month");
          navigation.navigate("AppHome");
          break;
        case "4 months":
         setTimeFrame("4 months");
          navigation.navigate("AppHome");
          break;
        case "Ongoing":
         setTimeFrame("Ongoing");
          navigation.navigate("AppHome");
          break;
        default:
          break;
      }
    }

    if (timeFrame != "nothing"){
      setFrame().then(() => {setDB(timeFrame, 12)})
    }

    //I have no idea what this is but chris put it down so I assume it makes sense
    return(
        <View style = {styles.container}>
          <LinearGradient colors={['rgba(223, 238, 235, 0.8)', 'transparent']} style={styles.background}/>
            <Text style ={styles.question}>What is your TimeFrame to workout?</Text>
            <View style= {styles.buttons}>
              <Button color={'rgb(81, 130, 135)'} title="2 weeks" onPress={()=> setFrame("2 weeks")} /> 
              <Button color={'rgb(81, 130, 135)'} title="1 month" onPress={()=> setFrame("1 month")} />
              <Button color={'rgb(81, 130, 135)'} title="4 months" onPress={()=> setFrame("4 months")} />
              <Button color={'rgb(81, 130, 135)'} title="Ongoing" onPress={()=> setFrame("Ongoing")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "rgb(100, 181, 190)",
  },
  buttons: {
    flex: .50,
    width: "50%",
    marginHorizontal: "20%",
    justifyContent: 'space-between',
    zIndex: 2,
  },
  question: {
    marginTop: "40%",
    marginBottom:"15%",
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