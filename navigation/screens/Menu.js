import * as React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
// import Slider from "@react-native-community/slider";
import { Slider } from "react-native";


export default function Menu({ navigation }) {
  // const []
  const [loaded] = useFonts({
    'PTSans-Bold': require('../../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('../../assets/fonts/PTSans-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  const { width, height } = Dimensions.get("screen");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: -70,
        fontFamily: "PTSans-Regular",
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 70, height: 100 }}
        />
        <Text style={{ fontSize: 23, margin: 15, marginLeft: -25}}>
          How is your pain today?
        </Text>
        <Text
          style={{ fontSize: 13, color: "#484747", marginLeft: -25 }}
          onPress={() => alert('This is the "Home" screen.')}
        >
          Kindly use the pain assesment scale below
        </Text>
        <Text style={{ marginTop: 15, fontSize: 18, color: "#64BC9F" }}>
          1    2    3    4     5    6    7    8    9    10
        </Text>
        <Slider
          style={{
            width: 200,
            height: 40,
            transform: [{ scaleX: 2 }, { scaleY: 2 }],
          }}
          minimumValue={0}
          maximumValue={10}
          value={5}
          thumbTintColor="#484747"
          minimumTrackTintColor="#478772"
          maximumTrackTintColor="#64BC9F"
        />
        <View
          style={{
            width: width * 0.9,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/10.jpg")}
            style={{ marginRight: 18, width: "15%", height: 60 }}
          />
          <Image
            source={require("../../assets/8.jpg")}
            style={{ marginRight: 18, width: "15%", height: 60 }}
          />
          <Image
            source={require("../../assets/5.jpg")}
            style={{ marginRight: 18, width: "15%", height: 60 }}
          />
          <Image
            source={require("../../assets/3.jpg")}
            style={{ marginRight: 18, width: "15%", height: 60 }}
          />
          <Image
            source={require("../../assets/1.jpg")}
            style={{ width: "15%", height: 60 }}
          />
        </View>
        <View
        elevation={5}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F0F2F2",
            borderRadius: 35,
            marginTop: 20,
            padding: 20,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "PTSans-Bold" }}>Mild Pain</Text>
          <Text style={{ color: "#478772" }}>
            Can do most activities with rest periods
          </Text>
        </View>
        <Text
          style={{
            marginLeft: -30,
            marginTop: 20,
            fontSize: 20,
          }}
        >
          Select other complain (if any)
        </Text>
        <View
          style={{
            width: width * 0.9,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            elevation={5}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F0F2F2",
              borderRadius: 40,
              marginTop: 20,
              width: 160,
              marginRight: 20,
              padding: 10,
              paddingLeft: 30,
              paddingRight: 30,
            }}
            onStartShouldSetResponder={() => {alert('Clicked Nausea')}}
          >
            <Text style={{ fontSize: 20, color: "#484747" }}>Nausea</Text>
          </View>
          <View
            elevation={5}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F0F2F2",
              borderRadius: 40,
              marginTop: 20,
              width: 160,
              padding: 10,
              paddingLeft: 30,
              paddingRight: 30,
            }}
            onStartShouldSetResponder={() => {alert('Clicked Vomiting')}}
          >
            <Text style={{ fontSize: 20, color: "#484747" }}>Vomiting</Text>
          </View>
        </View>
        <View
          style={{
            width: width * 0.9,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            elevation={5}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F0F2F2",
              borderRadius: 40,
              marginTop: 20,
              width: 160,
              marginRight: 20,
              padding: 10,
              paddingLeft: 8,
              paddingRight: 8,
            }}
            onStartShouldSetResponder={() => {alert('Clicked Hyper Acidity')}}
          >
            <Text style={{ fontSize: 20, color: "#484747" }}>
              Hyper Acidity
            </Text>
          </View>
          <View
            elevation={5}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F0F2F2",
              borderRadius: 40,
              marginTop: 20,
              width: 160,
              padding: 10,
              paddingLeft: 30,
              paddingRight: 30,
            }}
            onStartShouldSetResponder={() => {alert('Bleeding')}}
          >
            <Text style={{ fontSize: 20, color: "#484747" }}>Bleeding</Text>
          </View>
        </View>
        <View
            elevation={5}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#478772",
              borderRadius: 40,
              marginTop: 20,
              width: 160,
              padding: 10,
              paddingLeft: 30,
              paddingRight: 30,
            }}
            onStartShouldSetResponder={() => {alert('Submitted')}}
          >
            <Text style={{ fontSize: 20}}>Submit</Text>
          </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
    padding: 20,
    // justifyContent: "center",
  },
});
