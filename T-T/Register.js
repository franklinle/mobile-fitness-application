import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import {
  updateEmail,
  updateUsername,
  updatePassword,
  signup,
} from "./actions/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

class Signup extends React.Component {
  handleSignUp = () => {
    this.props.signup();
    this.props.navigation.navigate("StartQuiz");
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
          id="email"
          style={styles.input}
          value={this.props.user.email}
          onChangeText={(email) => this.props.updateEmail(email)}
        />
        <TextInput
          placeholder="Username"
          autoCompleteType="off"
          id="username"
          style={styles.input}
          value={this.props.user.username}
          onChangeText={(username) => this.props.updateUsername(username)}
        />
        <TextInput
          placeholder="Password"
          id="password"
          style={styles.input}
          value={this.props.user.password}
          onChangeText={(password) => this.props.updatePassword(password)}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Confirm password"
          style={styles.input}
          secureTextEntry={true}
        />
        <Pressable style={styles.box} onPress={this.handleSignUp}>
          <Text style={styles.signUp}> Sign up </Text>
        </Pressable>
        <Text style={styles.seperator}>---- OR ----</Text>
        <Pressable style={styles.box}>
          <Text style={styles.signUp}> Log in with Google </Text>
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
    borderWidth: 1,
    height: 40,
    width: 300,
    marginBottom: "3.5%",
    padding: 10,
    fontSize: 20,
    backgroundColor: "#D6E4E2",
    borderWidth: 0,
    zIndex: 2,
  },
  box: {
    backgroundColor: "#37686D",
    borderRadius: 10,
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "3%",
  },
  signUp: {
    fontSize: 20,
    color: "white",
  },
  signUp2: {
    fontSize: 17,
    color: "white",
  },
  seperator: {
    color: "#37686D",
    paddingTop: "5%",
    paddingBottom: "4.75%",
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
    { updateEmail, updatePassword, updateUsername, signup },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
