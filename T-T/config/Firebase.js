import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDnx6L_L4lu19OBsPb7nJxJAsBx0oAebDs",
  authDomain: "turtlgainz.firebaseapp.com",
  databaseURL: "https://turtlgainz-default-rtdb.firebaseio.com",
  projectId: "turtlgainz",
  storageBucket: "turtlgainz.appspot.com",
  messagingSenderId: "115689882535",
  appId: "1:115689882535:web:6f0ba64f04669dfbb42c82",
  measurementId: "G-B1WWCLFTJD",
};

let Firebase = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db;
export default Firebase
