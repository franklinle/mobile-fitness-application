import { Firebase, db } from "../config/Firebase";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

const userID = "Test";

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
    .then((doc) => {
      console.log(doc.data());
    });
}

export function getHeight() {
  db.collection("users")
    .doc(userID)
    .get()
    .then((doc) => {
      return doc.data().height;
    });
}

export function getWeight() {
  db.collection("users")
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

export function getDayWorkout() {}
