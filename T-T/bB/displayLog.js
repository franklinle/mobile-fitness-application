import { db } from "../config/Firebase";

var docDate = "8-21-23";
var userID = "UserTest";

function displayWorkout(){
    db.collection("users").doc(userID).collection("Workouts").doc(docDate).get()
    .then(function(doc){
      if(doc.exists){
          console.log(doc.data().item);
    }
    else{
        console.log("doc doesn't exist");
    }
    })
    .catch(function(error){
      console.log("error",error);
    })
}