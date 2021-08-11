import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

{
  /* <Image source = {require('./LandingScreen.png')} style={styles.icon} />
<Image source = {require('./PlaceholderImg.png')} style={styles.graph} /> */
}

//const imageSource = "../T-T/assets/logo.png";

//Okay for some reason imageSource cannot be found
//Issues to fix:
//Pink Excercises for the day cannot be rendered properly for some reason
//Redo the above line with a key
//Issues changing the alignment of the scrollable boxes.

/*
Implement ScrollView in a way that doesn't screw everything up but other than that I'm about done with layout
Next steps include adding in the variables to be displayed and maybe even try to get the graph thing started
*/

const NumOfActiveRoutines = 5;
const NumOfWeight = "16 lbs";
const NumOfHeight = "6' 11";

const goal =
  "some stupid fake goal that is way too long in order to check out the space bs, flash news this tight af we sure?";
const Username = "leSquirt";

const DayOfWeek = "Monday";
const Date = 5;
const Month = "August";

const ExcerciseName1 = "Back";
const ExcerciseName2 = "Arms";
const ExcerciseName3 = "Legs";
const ExcerciseName4 = "Abs";
const ExcerciseName5 = "Chest";

const ExcercisesOfTheDay = ["Arms", "Back", "Abs"];
const ExcercisesOfTheDayTuesday = ["Back"];

const ExcerciseBarType = ["Back", "Legs", "Arms", "Abs", "Chest"];

const BackExcercise = {
  key: "BackExcercise",
  color: "blue",
  selectedDotColor: "blue",
};

function displayMiniBars(string) {
  switch (string) {
    case "Arms":
      return (
        <View
          style={{
            backgroundColor: "hsla(40, 73%, 71%, 1)",
            height: 3,
            width: 30,
            borderRadius: 4,
            alignSelf: "center",
            marginBottom: 2,
          }}
        />
      );
    case "Back":
      return (
        <View
          style={{
            backgroundColor: "hsla(137, 59%, 55%, 1)",
            height: 3,
            width: 30,
            borderRadius: 4,
            alignSelf: "center",
            marginBottom: 2,
          }}
        />
      );
    case "Abs":
      return (
        <View
          style={{
            backgroundColor: "blue",
            height: 3,
            width: 30,
            borderRadius: 4,
            alignSelf: "center",
            marginBottom: 2,
          }}
        />
      );
    default:
      break;
  }
}

export default function ProfileScreen({ navigation }) {
  //Change flex number if there is more than 5 excercises
  function barType(number) {
    switch (number) {
      case "Back":
        return {
          flex: 0.15,
          width: "90%",
          backgroundColor: "hsla(137, 59%, 55%, 1)",
          borderRadius: 5,
        };
        break;
      case "Legs":
        return {
          flex: 0.15,
          width: "90%",
          backgroundColor: "hsla(266, 70%, 66%, 1)",
          borderRadius: 5,
        };
        break;
      case "Arms":
        return {
          flex: 0.15,
          width: "90%",
          backgroundColor: "hsla(40, 73%, 71%, 1)",
          borderRadius: 5,
        };
        break;
      case "Abs":
        return {
          flex: 0.15,
          width: "90%",
          backgroundColor: "blue",
          borderRadius: 5,
        };
        break;
      case "Chest":
        return {
          flex: 0.15,
          width: "90%",
          backgroundColor: "orange",
          borderRadius: 5,
        };
        break;
      default:
        break;
    }
  }

  function AddBar(string) {
    switch (string) {
      case "Back":
        return (
          <View style={barType("Back")}>
            <Text
              style={{
                fontSize: 17,
                paddingLeft: "8%",
                color: "white",
                paddingTop: "1%",
              }}
            >
              {ExcerciseName1}
            </Text>
          </View>
        );
      case "Legs":
        return (
          <View style={barType("Legs")}>
            <Text
              style={{
                fontSize: 17,
                paddingLeft: "8%",
                color: "white",
                paddingTop: "1%",
              }}
            >
              {ExcerciseName2}
            </Text>
          </View>
        );
      case "Arms":
        return (
          <View style={barType("Arms")}>
            <Text
              style={{
                fontSize: 17,
                paddingLeft: "8%",
                color: "white",
                paddingTop: "1%",
              }}
            >
              {ExcerciseName3}
            </Text>
          </View>
        );
      case "Chest":
        return (
          <View style={barType("Chest")}>
            <Text
              style={{
                fontSize: 17,
                paddingLeft: "8%",
                color: "white",
                paddingTop: "1%",
              }}
            >
              {ExcerciseName4}
            </Text>
          </View>
        );
      case "Abs":
        return (
          <View style={barType("Abs")}>
            <Text
              style={{
                fontSize: 17,
                paddingLeft: "8%",
                color: "white",
                paddingTop: "1%",
              }}
            >
              {ExcerciseName5}
            </Text>
          </View>
        );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBanner}>
        {/* <Image source={require(imageSource)} style={{height:"90%", width: "16%", resizeMode: "stretch"}}/> */}
      </View>
      <View style={styles.profileHeader}>
        <LinearGradient
          colors={["rgba(223, 238, 235, .8)", "transparent"]}
          end={{ x: 1, y: 0.7 }}
          start={{ x: 0.1, y: 0.35 }}
          style={styles.background}
        />
        {/**Add a onPress to this pressable to get to Options page */}
        <Pressable
          style={{
            top: "8%",
            marginLeft: "90%",
            width: "15%",
            height: "25%",
            position: "absolute",
            zIndex: 2,
          }}
          onPress={() => navigation.navigate("ProfileSettings")}
        >
          <Image
            source={require("./LeStupidOptionsGear.png")}
            style={{ height: "50%", width: "50%", resizeMode: "cover" }}
          />
        </Pressable>
        <View style={styles.profilePicture}>
          <Image
            source={require("./PlaceholderImg.png")}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />
        </View>
        <View style={{ textAlign: "center", marginTop: "11%" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: 500 }}>
            {Username}
          </Text>
          <Text style={{ color: "white", fontSize: 15, fontWeight: 400 }}>
            {goal}
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.profileCharts}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.excercise}>
          <View style={styles.key}>
            <Text style={{ fontSize: 15 }}>KEY</Text>

            <View
              style={{
                flex: 1,
                width: "100%",
                flexDirection: "row",
                marginTop: "10%",
              }}
            >
              <View
                style={{
                  borderRadius: 9,
                  borderColor: "black",
                  width: 18,
                  height: 18,
                  backgroundColor: "hsla(40, 73%, 71%, 1)",
                  flex: 0.25,
                }}
              />
              <Text style={{ flex: 0.75 }}> Arms</Text>
            </View>

            <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 9,
                  borderColor: "black",
                  width: 18,
                  height: 18,
                  flex: 0.25,
                  backgroundColor: "orange",
                }}
              />
              <Text style={{ flex: 0.75 }}> Chest</Text>
            </View>

            <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 9,
                  borderColor: "black",
                  width: 18,
                  height: 18,
                  flex: 0.25,
                  backgroundColor: "hsla(137, 59%, 55%, 1)",
                }}
              />
              <Text style={{ flex: 0.75 }}> Back</Text>
            </View>

            <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 9,
                  borderColor: "black",
                  width: 18,
                  height: 18,
                  flex: 0.25,
                  backgroundColor: "hsla(266, 70%, 66%, 1)",
                }}
              />
              <Text style={{ flex: 0.75 }}> Legs</Text>
            </View>

            <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 9,
                  borderColor: "black",
                  width: 18,
                  height: 18,
                  flex: 0.25,
                  backgroundColor: "blue",
                }}
              />
              <Text style={{ flex: 0.75 }}> Abs</Text>
            </View>
          </View>
          <View style={styles.excerciseOfDay}>
            <View style={styles.excerciseOfDayDate}>
              <Text
                style={{
                  fontSize: 15,
                  color: "hsla(186, 33%, 32%, 1)",
                  marginTop: "25%",
                  fontWeight: 400,
                }}
              >
                {DayOfWeek + "\n"}
              </Text>
              {/**Absolutely disgusting a absolute position */}
              <View
                style={{
                  width: "100%",
                  height: "30%",
                  position: "absolute",
                  top: "25%",
                }}
              >
                <Text
                  style={{
                    fontSize: 50,
                    color: "hsla(186, 33%, 32%, 1)",
                    fontWeight: 700,
                  }}
                >
                  {Date + "\n"}
                </Text>
              </View>
              <Text
                style={{
                  marginTop: "40%",
                  fontSize: 15,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 400,
                }}
              >
                {Month}
              </Text>
            </View>
            <View style={styles.verticalLinesAreFun} />
            {/**This does not update ever which makes it useless the next day just repeat what I did for the minibars */}
            <View style={styles.excerciseOfDayBars}>
              {AddBar(ExcerciseBarType[0])}
              {AddBar(ExcerciseBarType[1])}
              {AddBar(ExcerciseBarType[2])}
              {AddBar(ExcerciseBarType[3])}
              {AddBar(ExcerciseBarType[4])}
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <ScrollView
            style={styles.dayScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {"Monday\n"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {Date}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {"Tuesday\n"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {Date + 1}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 14,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {"Wednesday\n"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {Date + 2}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {"Thursday\n"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {Date + 3}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {"Friday\n"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {Date + 4}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {"Saturday\n"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {Date + 5}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {"Sunday\n"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: 500,
                }}
              >
                {Date + 6}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>
          </ScrollView>
        </View>

        <View style={styles.calendar}>
          <Calendar
            markingType={"multi-dot"}
            markedDates={{
              "2021-8-9": {
                dots: [BackExcercise],
                selected: true,
                selectedColor: "red",
              },
              "2021-8-10": { selected: true, marked: true },
            }}
          />
        </View>
      </ScrollView>

      {/**Where the Height,Weight and active routines are displayed */}
      <View style={styles.quickStats}>
        <View style={styles.quickStatsChart}>
          <View style={styles.activeRoutines}>
            <Text
              style={{
                marginTop: "3%",
                fontSize: 25,
                color: "hsla(186, 33%, 32%, 1)",
                textAlign: "center",
              }}
            >
              {NumOfActiveRoutines + "\n"}
            </Text>
            <Text style={{ fontSize: 13, color: "hsla(186, 33%, 32%, 1)" }}>
              Active Routines
            </Text>
          </View>
          <View style={styles.verticalLine2} />
          <View style={styles.weight}>
            <Text
              style={{
                marginTop: "3%",
                fontSize: 25,
                color: "hsla(186, 33%, 32%, 1)",
              }}
            >
              {NumOfWeight + "\n"}
            </Text>
            <Text style={{ fontSize: 13, color: "hsla(186, 33%, 32%, 1)" }}>
              Weight
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.height}>
            <Text
              style={{
                marginTop: "3%",
                fontSize: 25,
                color: "hsla(186, 33%, 32%, 1)",
                textAlign: "center",
              }}
            >
              {NumOfHeight + '"\n'}
            </Text>
            <Text style={{ fontSize: 13, color: "hsla(186, 33%, 32%, 1)" }}>
              Height
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  topBanner: {
    flex: 0.1,
    backgroundColor: "white",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  profileHeader: {
    flex: 0.5,
    backgroundColor: "rgb(100, 181, 190)",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },

  quickStats: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: "32%",
  },
  quickStatsChart: {
    backgroundColor: "white",
    height: "80%",
    width: "93%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 1.5,
    borderColor: "rgb(100, 181, 190)",
  },
  activeRoutines: {
    flex: 0.3,
    top: "10%",
    width: "20%",
    textAlign: "center",
  },
  weight: {
    flex: 0.3,
    top: "10%",
    width: "20%",
    textAlign: "center",
  },
  height: {
    flex: 0.3,
    top: "10%",
    width: "20%",
    textAlign: "center",
  },
  verticalLine: {
    height: "80%",
    top: "5%",
    backgroundColor: "hsla(186, 33%, 32%, 0.3)",
    flex: 0.0056,
    width: 1,
  },
  verticalLine2: {
    height: "80%",
    top: "5%",
    backgroundColor: "hsla(186, 33%, 32%, 0.3)",
    flex: 0.0056,
    width: 1,
  },

  profileCharts: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    overflow: "scroll",
    flexDirection: "column",
    display: "flex",
  },
  excercise: {
    flex: 0.4,
    flexDirection: "row",
    marginTop: "16%",
  },
  key: {
    flex: 1.4,
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    marginRight: 20,
    marginBottom: 10,
    height: "90%",
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: 2,
  },
  keyElement: {
    flex: 0.6,
    width: "100%",
    height: "100%",
  },
  excerciseOfDay: {
    //I probably want to change excercise of the Day into another flexbox so I can include Key if needed
    flex: 5,
    marginRight: "3%",
    height: "90%",
    width: "100%",
    borderColor: "hsla(0, 0%, 0%, 0.25)",
    //1 is the smallest border size for some reason decimals dont work
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  excerciseOfDayDate: {
    flex: 0.45,
    width: "20%",
    textAlign: "center",
  },
  excerciseOfDayBars: {
    flex: 0.55,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  verticalLinesAreFun: {
    flex: 0.007,
    backgroundColor: "hsla(186, 33%, 32%, 1)",
    height: "80%",
    top: "8%",
    marginRight: 15,
  },
  dayScroll: {
    flex: 2,
    flexDirection: "row",
    width: "100%",
    height: "20%",
  },
  daysOfWeek: {
    backgroundColor: "#D6E4E2",
    flex: 0.5,
    width: 80,
    height: 110,
    marginHorizontal: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: "gray",
    textAlign: "center",
  },
  calendar: {
    flex: 0.1,
    backgroundColor: "white",
    width: "100%",
    marginTop: "5%",
    borderTopWidth: 1,
    borderColor: "black",
    zIndex: 3,
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 400,
    zIndex: 1,
  },
  profilePicture: {
    borderRadius: 30,
    borderColor: "black",
    width: 60,
    height: 60,
    backgroundColor: "red",
    overflow: "hidden",
    top: "20%",
  },
});
