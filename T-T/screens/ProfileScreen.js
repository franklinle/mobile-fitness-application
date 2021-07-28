import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Image } from "react-native";

{/* <Image source = {require('./LandingScreen.png')} style={styles.icon} />
<Image source = {require('./PlaceholderImg.png')} style={styles.graph} /> */}


export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <View style= {styles.icon}>
          <Image source = {require('./LandingScreen.png')} style={{height:"100%", width:"100%", resizeMode:"cover"}} />
        </View>
        <View style= {styles.graph}>
          <Image source = {require('./PlaceholderImg.png')} style={{height:"100%", width:"100%", resizeMode:"cover"}} />
        </View>
      </View>
      <View style={styles.body}>
        <View style ={styles.activityName}>
          <Text style={{textAlign: "center", textAlignVertical: "bottom", top:"40%", color:"white"}}>ACTIVITY (what is this?)</Text>
        </View>
        <View style={styles.calendar}>
          <Text style={{textAlign: "center", textAlignVertical: "bottom", top:"40%"}}>Insert some sort of image thingy magjig that connects to calendar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "darkorange",
    justifyContent: "space-around"
  },
  icon: {
    marginTop:40,
    backgroundColor: "pink",
    flexBasis:"30%",
    overflow: "hidden",
    marginBottom:20,
  },
  graph: {
    marginTop:40,
    backgroundColor: "red",
    flexBasis: "60%",
    overflow: "hidden",
    marginBottom:20,
  },
  body: {
    flex: 3,
    backgroundColor: "green",
    flexDirection: "column",
    justifyContent: "space-around",
    padding:20,
  },
  calendar: {
    height:"85%",
    backgroundColor: "orange"
  },
  activityName: {
    backgroundColor: "gray",
    height:"10%",
  }
});