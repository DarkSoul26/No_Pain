import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Menu({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: -70,
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 80, height: 115 }}
        />
        <Text style={{ fontSize: 25, margin: 15 }}>
          How is your pain today?
        </Text>
        <Text
          style={{ fontSize: 15, color: "484747" }}
          onPress={() => alert('This is the "Home" screen.')}
        >
          Kindly use the pain assesment scale below
        </Text>
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
