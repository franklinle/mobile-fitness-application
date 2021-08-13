import * as React from "react";
import {
  View,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { updateEmail, updatePassword, getUser, login } from "./actions/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Firebase from "./config/Firebase";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";

class LoginScreen extends React.Component {
  componentDidMount = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.getUser(user.uid);
        if (this.props.user != null) {
          this.props.navigation.navigate("AppHome");
        }
      }
    });
  };

  // isUserEqual = (googleUser, firebaseUser) => {
  //   if (firebaseUser) {
  //     var providerData = firebaseUser.providerData;
  //     for (var i = 0; i < providerData.length; i++) {
  //       if (
  //         providerData[i].providerId ===
  //           firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
  //         providerData[i].uid === googleUser.getBasicProfile().getId()
  //       ) {
  //         // We don't need to reauth the Firebase connection.
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };

  // onSignIn = (googleUser) => {
  //   console.log("Google Auth Response", googleUser);
  //   // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  //   var unsubscribe = firebase.auth().onAuthStateChanged(
  //     function (firebaseUser) {
  //       unsubscribe();
  //       // Check if we are already signed-in Firebase with the correct user.
  //       if (!this.isUserEqual(googleUser, firebaseUser)) {
  //         // Build Firebase credential with the Google ID token.
  //         var credential = firebase.auth.GoogleAuthProvider.credential(
  //           googleUser.idToken,
  //           googleUser.accessToken
  //         );
  //         // Sign in with credential from the Google user.
  //         firebase
  //           .auth()
  //           .signInWithCredential(credential)
  //           .then(function (result) {
  //             console.log("user sign in");
  //             firebase
  //               .database()
  //               .ref("/users" + result.user.uid)
  //               .set({
  //                 gmail: result.user.email,
  //                 profile_picture:
  //                   result.additionalUserInfo.profile.profile_picture,
  //                 locale: result.additionalUserInfo.profile_picture.locale,
  //                 first_name: result.additionalUserInfo.given_name,
  //                 last_name: result.additionalUserInfo.first_name,
  //               })
  //               .then(function (snapshot) {});
  //           })
  //           .catch(function (error) {
  //             // Handle Errors here.
  //             var errorCode = error.code;
  //             var errorMessage = error.message;
  //             // The email of the user's account used.
  //             var email = error.email;
  //             // The firebase.auth.AuthCredential type that was used.
  //             var credential = error.credential;
  //             // ...
  //           });
  //       } else {
  //         console.log("User already signed-in Firebase.");
  //       }
  //     }.bind(this)
  //   );
  // };

  // async signInWithGoogle() {
  //   try {
  //     const result = await Google.logInAsync({
  //       androidClientId:
  //         "115689882535-s814mnf30u4se10u1jhnnhqks854c16f.apps.googleusercontent.com",
  //       iosClientId:
  //         "115689882535-i2dpc1o7r8cm1jasuksoq0gsk3anna7v.apps.googleusercontent.com",
  //       scopes: ["profile", "email"],
  //     });

  //     if (result.type === "success") {
  //       const { idToken, accessToken } = result;
  //       const credential = firebase.auth.GoogleAuthProvider.credential(
  //         idToken,
  //         accessToken
  //       );
  //       firebase
  //         .auth()
  //         .signInWithCredential(credential)
  //         .then((res) => {
  //           // user res, create your user, do whatever you want
  //         })
  //         .catch((error) => {
  //           console.log("firebase cred err:", error);
  //         });
  //     } else {
  //       return { cancelled: true };
  //     }
  //   } catch (err) {
  //     console.log("err:", err);
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(223, 238, 235, 0.8)", "transparent"]}
          style={styles.background}
        />

        <Image source={require("../T-T/assets/logo.png")} style={styles.pic} />

        <Text style={styles.title}> turtlGainz</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={this.props.user.email || ""}
          onChangeText={(email) => this.props.updateEmail(email)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={this.props.user.password || ""}
          onChangeText={(password) => this.props.updatePassword(password)}
          secureTextEntry={true}
        />
        <Pressable style={styles.box} onPress={() => this.props.login()}>
          <Text style={styles.signUp}> Login </Text>
        </Pressable>

        <Pressable
          onPress={() => this.props.navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.passText}> Forgot your password? </Text>
        </Pressable>

        <Text style={styles.seperator}>----- OR -----</Text>
        <Pressable style={styles.box} onPress={this.signInWithGoogle}>
          <Text style={styles.signUp}> Log in with Google </Text>
        </Pressable>
        <Pressable onPress={() => this.props.navigation.navigate("Register")}>
          <Text style={styles.passText}>Create an account</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "turquoise",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pic: {
    height: 250,
    width: 275,
    marginTop: "10%",
    marginBottom: "5%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#37686D",
    marginBottom: "7%",
  },
  input: {
    borderRadius: 10,
    borderWidth: 0,
    height: 40,
    width: 300,
    marginBottom: "5%",
    padding: 10,
    fontSize: 20,
    backgroundColor: "#D6E4E2",
    zIndex: 2,
  },
  box: {
    backgroundColor: "#37686D",
    borderRadius: 10,
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2.5%",
  },
  signUp: {
    fontSize: 20,
    color: "white",
  },
  signUp2: {
    fontSize: 17,
    color: "white",
  },
  pass: {
    alignItems: "flex-start",
    width: 300,
    flexDirection: "row",
  },
  passText: {
    color: "white",
  },
  seperator: {
    color: "#37686D",
    paddingTop: "25%",
    paddingBottom: "5%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { updateEmail, updatePassword, login, getUser },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
