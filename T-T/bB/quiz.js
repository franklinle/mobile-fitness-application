import { db } from "../config/Firebase";
import { user, signup } from "../actions/user";

export async function setDB(text, num) {
  await signup();
  const USERID = user.uid;
  if (num == 1) {
    db.collection("users").doc(USERID).update({ height: text });
    db.collection("users")
      .doc(USERID)
      .collection("Quiz")
      .doc("quizAnswers")
      .set({});
  } else if (num == 2) {
    db.collection("users").doc(USERID).update({ weight: text });
  } else {
    db.collection("users")
      .doc(USERID)
      .collection("Quiz")
      .doc("quizAnswers")
      .update({ [num]: text });
  }
}
