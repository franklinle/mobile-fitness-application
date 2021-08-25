import { db } from "../config/Firebase";
import { fodder, signup, user } from "../actions/user";

export function BMI(height, weight) {
  var splitHeight = height.split("'");
  var newHeight = splitHeight[0] * 12 + Number(splitHeight[1]);
  var meters = newHeight / 39.37;
  var kg = weight / 2.205;
  var x = kg / (meters * meters);
  return Math.round(x * 10) / 10;
}

export function getName() {
  return db
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      return doc.data().username;
    });
}

export function getHeight() {
  return db
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      return doc.data().height;
    });
}

export function setNewHeight(height) {
  db.collection("users").doc(user.uid).update({
    height: height,
  });
}

export function getWeight() {
  return db
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      return doc.data().weight;
    });
}

export function setNewWeight(weight) {
  db.collection("users").doc(user.uid).update({
    weight: weight,
  });
}

export function setProfileGoal(string) {
  db.collection("users").doc(user.uid).collection("personal").doc("goal").set({
    goal: string,
  });
}

export function getProfileGoal(string) {
  return db
    .collection("users")
    .doc(user.uid)
    .collection("personal")
    .doc("goal")
    .get()
    .then((doc) => {
      return doc.data().goal;
    });
}
