import { db } from "../config/Firebase";
import { user, signup } from "../actions/user";

export async function setDB(text, num) {
  await signup();
  const USERID = user.uid;
  if (num == 1) {
    db.collection("users").doc(USERID).update({ height: text });
    db.collection("users")
      .doc(USERID)
      .collection("personal")
      .doc("quizAnswers")
      .set({});
    db.collection("users").doc(USERID).collection("personal").doc("goal").set({
      goal: "Make a Goal!",
    });
  } else if (num == 2) {
    db.collection("users").doc(USERID).update({ weight: text });
  } else if (num == 3) {
    db.collection("users").doc(USERID).update({ age: text });
  } else {
    db.collection("users")
      .doc(USERID)
      .collection("personal")
      .doc("quizAnswers")
      .update({ [num]: text });
  }
}
