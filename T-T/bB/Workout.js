import { db } from "../config/Firebase";
import { user } from "../actions/user";

export function makeNewWorkout(WorkoutName) {
  db.collection("users")
    .doc(user.uid)
    .collection("CustomWorkouts")
    .doc(WorkoutName)
    .set({});
}

export function AddtoWorkout(WorkoutName, exercise, reps, weight) {
  db.collection("users")
    .doc("UserTest")
    .collection("Workouts")
    .doc(WorkoutName)
    .set({
      [exercise]: {
        Set: {
          reps: reps,
          weight: weight,
        },
      },
    });
}
