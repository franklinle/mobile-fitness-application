import { Firebase, db } from "../config/Firebase";
import { getNumOfHeight, getNumOfWeight } from "../screens/ProfileScreen";
// import { LogBox } from "react-native";

// LogBox.ignoreLogs(["Setting a timer"]);

const userID = "Test";
var test = "";

export function setPR() {
  db.collection("").doc("").set({
    bench: "",
    pushUp: "",
    sitUp: "",
    squats: "",
    water: "",
  });
}

export function getProfile() {
  db.collection("users")
    .doc(userID)
    .get()
    .then((doc) => {});
}

export function getHeight() {
  return db
    .collection("users")
    .doc(userID)
    .get()
    .then((doc) => {
      return doc.data().height;
    });
}

export function getWeight() {
  return db
    .collection("users")
    .doc(userID)
    .get()
    .then((doc) => {
      return doc.data().weight;
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
