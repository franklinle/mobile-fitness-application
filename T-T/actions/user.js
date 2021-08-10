import Firebase, { db } from "../config/Firebase.js";
import firebase from "firebase";
import "firebase/firestore";

// define types

export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_PASSWORD2 = "UPDATE_PASSWORD2";
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const FORGOTPW = "FORGOTPW";
export const STATS = "STATS";

// actions

export const updateEmail = (email) => {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
};

export const updateUsername = (username) => {
  return {
    type: UPDATE_USERNAME,
    payload: username,
  };
};

export const updatePassword = (password) => {
  return {
    type: UPDATE_PASSWORD,
    payload: password,
  };
};

export const updatePassword2 = (password2) => {
  return {
    type: UPDATE_PASSWORD2,
    payload: password2,
  };
};

export const login = () => {
  return async (dispatch, getState) => {
    try {
      const { email, password } = getState().user;
      const response = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password
      );

      dispatch(getUser(response.user.uid));
    } catch (e) {
      alert(e);
    }
  };
};

export const getUser = (uid) => {
  return async (dispatch, getState) => {
    try {
      const user = await db.collection("users").doc(uid).get();
      dispatch({ type: LOGIN, payload: user.data() });
    } catch (e) {
      alert(e);
    }
  };
};

export const signup = () => {
  return async (dispatch, getState) => {
    try {
      const { email, password, username } = getState().user;
      const response = await Firebase.auth().createUserWithEmailAndPassword(
        email,
        password
      );
      if (response.user.uid) {
        const user = {
          uid: response.user.uid,
          email: email,
          username: username,
        };
        db.collection("users").doc(response.user.uid).set(user);

        dispatch({ type: SIGNUP, payload: user });
      }
    } catch (e) {
      alert(e);
    }
  };
};

export const passwordReset = (email) => {
  return firebase.auth().sendPasswordResetEmail(email);
};
