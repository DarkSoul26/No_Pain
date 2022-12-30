import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style={{ width: 80, height: 115 }}
      />
      <Text style={{ fontSize: 25, margin: 15 }}>How is your pain today?</Text>
      <Text style={{ fontSize: 15, color: "484747" }}>
        Kindly use the pain assesment scale below
      </Text>
      <StatusBar style="auto" />
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
