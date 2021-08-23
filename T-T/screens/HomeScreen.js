import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Task from "../Components/Tasks"
import { RandomQuote } from "../bB/quote";

const staticImage = require("../assets/logo.png");


const arrayOfExcercisesOnAllDays =[[],[],[],[],[],[],[]]

/**
 * @param excerciseName
 * @param array
 * 
 * Okay so this function now takes in a array along with the exercise in question.
 * Basically the array tells us whether the user is doing the exercise on that corresponding day
 * In which we then push the name of that exercise into the corresponding array in the array.
 */
export async function importedExcerciseTasks(excerciseName, array){
  array.map((boolean,index) =>{
    if (boolean){
      switch(index){
        case 0:
          arrayOfExcercisesOnAllDays[0].push(excerciseName)
          break;
        case 1:
          arrayOfExcercisesOnAllDays[1].push(excerciseName)
          break;
        case 2:
          arrayOfExcercisesOnAllDays[2].push(excerciseName)
          break;
        case 3:
          arrayOfExcercisesOnAllDays[3].push(excerciseName)
          break;
        case 4:
          arrayOfExcercisesOnAllDays[4].push(excerciseName)
          break;
        case 5:
          arrayOfExcercisesOnAllDays[5].push(excerciseName)
          break;
        case 6:
          arrayOfExcercisesOnAllDays[6].push(excerciseName)
          break;
        default:
          break;
      }
    }
  })
  console.log(arrayOfExcercisesOnAllDays);
}

export default function HomeScreen() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  };
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Exercises</Text>
        <View style={styles.items}>
          {arrayOfExcercises.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}> + </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
