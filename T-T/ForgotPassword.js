import * as React from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(223, 238, 235, 0.8)", "transparent"]}
        style={styles.background}
      />
      <Image
        source={require("../T-T/assets/lockLogo.png")}
        style={styles.pic}
      />
      <View style={styles.stateBox}>
        <Text style={styles.statement}>
          Enter your email to receive a link to
        </Text>
        <Text style={styles.statement}>recover and reset your password.</Text>
      </View>
      <TextInput placeholder="Email" style={styles.input} />
      <Pressable style={styles.box}>
        <Text style={styles.signUp}> Send Link</Text>
      </Pressable>
      <Text style={styles.seperator}>---- OR ----</Text>
      <Pressable style={styles.createBox}>
        <Text style={styles.create}> Create an account </Text>
      </Pressable>
      <Pressable style={styles.box}>
        <Text style={styles.signUp}> Log in with Google </Text>
      </Pressable>
      <Pressable>
        <Text style={styles.signUp2}> Back to log in</Text>
      </Pressable>
    </View>
  );
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
  statement: {
    color: "#37686D",
    fontSize: 20,
  },
  stateBox: {
    paddingBottom: "7%",
    width: 400,
    alignItems: "center",
  },
  input: {
    borderRadius: 10,
    height: 40,
    width: 300,
    marginBottom: "2.5%",
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
  seperator: {
    color: "#37686D",
    paddingTop: "30%",
    paddingBottom: "7%",
  },
  create: {
    fontSize: 30,
    color: "white",
  },
  createBox: {
    paddingBottom: "7%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});
