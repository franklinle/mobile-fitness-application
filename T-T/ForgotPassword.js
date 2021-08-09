import React, { Fragment } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { passwordReset } from "./actions/user";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "./Components/ErrorMessage";
import { withFirebaseHOC } from "./config/context";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
});

class ForgotPW extends React.Component {
  handlePasswordReset = async (values, actions) => {
    const { email } = values;

    try {
      passwordReset(email);
      console.log("Password reset email sent successfully");
      this.props.navigation.navigate("LoginScreen");
    } catch (error) {
      actions.setFieldError("general", error.message);
    }
  };

  render() {
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
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values, actions) => {
            this.handlePasswordReset(values, actions);
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            touched,
            handleBlur,
            isSubmitting,
          }) => (
            <Fragment>
              <TextInput
                name="email"
                value={values.email}
                onChangeText={handleChange("email")}
                placeholder="Enter email"
                autoCapitalize="none"
                iconName="ios-mail"
                iconColor="#2C384A"
                onBlur={handleBlur("email")}
                style={styles.input}
              />
              <ErrorMessage errorValue={touched.email && errors.email} />
              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.box}
                  buttonType="outline"
                  onPress={handleSubmit}
                  buttonColor="#039BE5"
                  disabled={!isValid || isSubmitting}
                >
                  <Text style={styles.signUp}> Send Link</Text>
                </Pressable>
              </View>
              <ErrorMessage errorValue={errors.general} />
            </Fragment>
          )}
        </Formik>
        <Text style={styles.seperator}>---- OR ----</Text>
        <Pressable
          style={styles.createBox}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text style={styles.create}> Create an account </Text>
        </Pressable>
        <Pressable style={styles.box}>
          <Text style={styles.signUp}> Log in with Google </Text>
        </Pressable>
        <Pressable
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        >
          <Text style={styles.signUp2}> Back to log in</Text>
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

export default withFirebaseHOC(ForgotPW);
