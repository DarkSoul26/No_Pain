import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View, Image } from "react-native";

// Screens
import MenuPage from "./screens/Menu";
import MedicinePage from "./screens/Medicine";
import CallPage from "./screens/Call";
import BookAppointmentPage from "./screens/BookAppointment";

//Screen names
const Menu = "Menu";
const Medicine = "Medicine";
const Call = "Call";
const BookAppointment = "BookAppointment";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Menu}
        tabBarOptions={{
          activeTintColor: "#DBEFE9",
          inactiveTintColor: "#64BC9F",
          // labelStyle: { paddingBottom: 0, fontSize: 0 },
          style: { height: 200 },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === Menu) {
              // iconName = focused ? "menu" : "menu-outline";
              return (
                <Image
                  source={require("../assets/menu.jpg")}
                  style={{ width: 25, height: 25 }}
                />
              );
            } else if (rn === Medicine) {
              return (
                <Image
                  source={require("../assets/meds.jpg")}
                  style={{ width: 25, height: 25 }}
                />
              );
            } else if (rn === Call) {
              return (
                <Image
                  source={require("../assets/phone.jpg")}
                  style={{ width: 25, height: 25 }}
                />
              );
            } else if (rn === BookAppointment) {
              return (
                <Image
                  source={require("../assets/book.jpg")}
                  style={{ width: 25, height: 25 }}
                />
              );
            }

            // You can return any component that you likehere!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={Menu} component={MenuPage} />
        <Tab.Screen name={Medicine} component={MedicinePage} />
        <Tab.Screen name={Call} component={CallPage} />
        <Tab.Screen name={BookAppointment} component={BookAppointmentPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
