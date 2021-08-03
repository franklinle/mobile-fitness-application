import { Firebase, db } from "../config/Firebase";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

const exerciseName = "Example";
const equip = "bench";
const link = "LINK";
const group = "triceps";
const description = "dont hurt yourself";

export function newExercise() {
  db.collection("Exercises").doc(exerciseName).set({
    Description: description,
    Equipment: equip,
    link: link,
    "Muscle Group": group,
  });
}
