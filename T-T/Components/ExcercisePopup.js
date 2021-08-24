import React, {useState} from "react";
import { Pressable } from "react-native";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, Button, Modal } from "react-native";
import { importedExcerciseTasks } from "../screens/HomeScreen";

//The days of the week duh
const WeekDays = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
let affirmedDates =[false,false,false,false,false,false,false]

//A component because I got smarter and thus my code got significantly shorter and not yandere dev level
const WeekOfButtons =(props) => {
    const [check, setCheck] = useState(false)

    function setExcerciseDate(index){
        setCheck(!check);
        affirmedDates[index] = !affirmedDates[index]
        console.log(affirmedDates)
    }
    return(
        <Pressable style={styles.daysOfWeek} onPress={(()=> setExcerciseDate(props.index))}>
            <Text
            style={{
                fontSize: 14,
                color: "black",
                textAlign: "center",
            }}
            >
            {props.day}
            </Text>
            <View style ={{width:30,height:30, backgroundColor: check ? "green" : "red"}}/>
        </Pressable>
    )
}

/**
 * WARNING: The following component does not work without the component above.
 * However both are so intricately linked it was weird to give the above a different file
 * 
 * The following function creates a popup which has the days of the week and a submit button.
 * Days of the week sends the task to the ToDoList as a task and submit affirms the action
 * 
 * Things to work on:
 * onPress style change
 */
const Popupbutton = (props) =>{
    const [modalVisible, setModalVisible] = useState(false);
    //Each one represents whether the excercise is being done on that day. This is in order Monday,Tuesday...
    
    function setVisiblityAndExcercise(name){
        importedExcerciseTasks(name, affirmedDates)
        setModalVisible(!modalVisible)
    }

    return(
    <View style={{backgroundColor: "red", position:"relative"}}>
        <Modal
        animationType ="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
        > 
            <View style={styles.modalStyle}>
                <ScrollView style={styles.buttonsOfDay} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {WeekDays.map((days,index)=> {
                        return(
                            <Pressable key={index}>
                                <WeekOfButtons day={days} index={index}/>
                            </Pressable>
                        )
                    }
                    )}
                </ScrollView>
                <View style={{marginBottom:20,}}>
                    <Button color="red" title="Submit" onPress={(() => setVisiblityAndExcercise(props.name))} />
                </View>
            </View>
        </Modal>
        <Button title={props.name} onPress={(() => setModalVisible(!modalVisible))}/>
    </View>
    )
  }
const styles = StyleSheet.create({
  modalStyle:{
    alignItems: "center",
    backgroundColor:"white",
    width:"80%",
    height:"25%",
    top:"25%",
    left:"10%",
    borderWidth:2,
    borderColor:"gray"
  },
  buttonsOfDay:{
    flexDirection:"row",
    flex:.4,
    top:"5%",
    overflow:"hidden",
    width:"80%",
    height:"20%",
  },
  daysOfWeek: {
    backgroundColor: "gray",
    borderWidth:2,
    width:100,
    flex:.75,
    justifyContent:"center",
    alignItems:"center"
  }
});
export default Popupbutton;
