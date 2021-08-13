import { Firebase, db } from "../config/Firebase";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

const exerciseName = "Example";
const equip = "bench";
const link = "LINK";
const group = "triceps";
const description = "dont hurt yourself";
const userID = "";

export function newExerciseName(exerciseName) {
  db.collection("users")
    .doc(userID)
    .collection("CustomWorkouts")
    .doc(exerciseName)
    .set({});
}

export function newExerciseDescription(exerciseName, description) {
  db.collection("users")
    .doc(userID)
    .collection("CustomWorkouts")
    .doc(exerciseName)
    .set({
      Description: description,
    });
}

export function newExerciseEquipment(exerciseName, equip) {
  db.collection("users")
    .doc(userID)
    .collection("CustomWorkouts")
    .doc(exerciseName)
    .set({
      Equipment: equip,
    });
}

export function newExerciseLink(exerciseName, link) {
  db.collection("users")
    .doc(userID)
    .collection("CustomWorkouts")
    .doc(exerciseName)
    .set({
      link: link,
    });
}

export function newExerciseGroup(exerciseName, group) {
  db.collection("users")
    .doc(userID)
    .collection("CustomWorkouts")
    .doc(exerciseName)
    .set({
      "Muscle Group": group,
    });
}
