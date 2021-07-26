import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export function Section1() {
    const [isEnabled, setEnabled] = useState(false);
    const toggleSystem = () => setEnabled(prev => !prev);
    const [Height, setHeight] = useState("");
    const [Age, setAge] = useState("");
    const [Weight, setWeight] = useState("");

    return (
    <View style = {styles.container}> 
        <Text>Metric System</Text>
        <Switch onValueChange={toggleSystem} value ={isEnabled}/>
        <Text>Height</Text>
        <RNPickerSelect
            style={{ inputAndroid: { color: 'black' } }}
            //useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setHeight(value)}
            items={height}
        />
        <Text>Weight</Text> 
        <RNPickerSelect
            style={{ inputAndroid: { color: 'black' } }}
            //useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setWeight(value)}
            items={weight}
        />
        <Text>Age</Text>
        <RNPickerSelect
            style={{ inputAndroid: { color: 'black' } }}
            //useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setAge(value)}
            items={age}
        />
        <Button title="Next" />
        
        <StatusBar style="auto" />
    </View>
    )
} 

const height = [
    {
        label: "6'2",
        value: "6'2",
    },
    {
        label: "5'2",
        value: "5'2",
    },
    {
        label: "3'6",
        value: "3'6",
    }

];

const weight = [
    {
        label: "135lbs",
        value: 135,
    },
    {
        label:"65lbs",
        value: 65,
    }
]

const age = [
    {
        label: "15yrs",
        value: 15,
    }
]

//Change colors to match whether its metric or not + labels
const styles = StyleSheet.create({
    container: {
      color: 'black',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });