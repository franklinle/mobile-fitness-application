import { Firebase, db } from "../config/Firebase";
import { LogBox } from "react-native";

//LogBox.ignoreLogs(["Setting a timer"]);

const user = "Id";

export function newQuiz() {
  db.collection("Quiz").doc(user).set({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
  });
}

//Pretty sure I can't name fields here due to the follow update regex
export function setDB(text, num) {
  db.collection("Quiz")
    .doc(user)
    .update({ [num]: text });
}
