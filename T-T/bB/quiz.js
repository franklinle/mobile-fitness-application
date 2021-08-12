import { Firebase, db } from "../config/Firebase";

const user = "quizTest";

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

export function setDB(text, num) {
  if (num == 1) {
    db.collection("users").doc(user).update({ height: text });
    db.collection("users")
      .doc(user)
      .collection("Quiz")
      .doc("quizAnswers")
      .set({});
  } else if (num == 2) {
    db.collection("users").doc(user).update({ weight: text });
  } else {
    db.collection("users")
      .doc(user)
      .collection("Quiz")
      .doc("quizAnswers")
      .update({ [num]: text });
  }
}
