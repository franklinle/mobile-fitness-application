import { Firebase, db } from "../config/Firebase";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

const user = "";

export function getProfile() {
  db.collection("users")
    .doc(user)
    .get()
    .then((doc) => {
      console.log(doc.data());
    });
}

export function setProfile() {
  db.collection("users").doc(user).update({
    email: "",
    uid: "",
    username: "",
  });
}
