import { Firebase, db } from "../config/Firebase";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

const user = "Id";

export function newQuiz() {
  db.collection("Quiz").doc(user).set({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
}

export function setDB(text, num) {
  db.collection("Quiz")
    .doc(user)
    .update({ [num]: text });
}
