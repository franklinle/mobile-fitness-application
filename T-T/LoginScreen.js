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
          value={this.props.user.email}
          onChangeText={(email) => this.props.updateEmail(email)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={this.props.user.password}
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

        <Text style={styles.seperator}>
          -------------------------------------------- OR
          ---------------------------------------------
        </Text>
        <Pressable style={styles.box}>
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
