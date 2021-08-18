import { db } from "../config/Firebase";
import { user } from "../actions/user";

export function setPR() {
  db.collection("").doc("").set({
    bench: "",
    pushUp: "",
    sitUp: "",
    squats: "",
    water: "",
  });
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

export function getWeight() {
  return db
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      return doc.data().weight;
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

export function getPR() {
  db.collection("")
    .doc("")
    .get()
    .then((doc) => {
      console.log(doc.data());
    });
}

export function getWorkout() {
  db.collection("users")
    .doc(userID)
    .get()
    .then((doc) => {
      console.log(doc.data());
    });
}
