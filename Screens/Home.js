import * as React from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LinearGradient } from "expo-linear-gradient";
import SelectCurrency from "./SelectCurrency";
import ConvertCurrency from "./ConvertCurrency";
import CurrencyCalculator from "./CurrencyCalculator";
import Signup from "./Signup";
import Signin from "./Signin";
import Profile from "./Profile";
import Personal from "./Profile/Personal";
import Notification from "./Profile/Notification";
import Preference from "./Profile/Preference";
import Analytics from "./Analytics";
import Dashboard from "./Dashboard";
import { Button, Icon, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import AddNotification from "./Profile/Notifications/AddNotification";
import CustomNotification from "./Profile/Notifications/CustomNotification";
import Calculator from "./Calculator";
import AllCurrency from "./AllCurrency";
import AddCurrency from "./AddCurrency";
import VerifyEmail from "./VerifyEmail";

const Tab = createBottomTabNavigator();

const CustomeTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      // ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View>
      <LinearGradient
        // Button Linear Gradient
        colors={["#6456FF", "#2E20CA", "rgba(46, 32, 202, 1)"]}
        style={{
          width: 70,
          height: 70,
          borderRadius: 50,
        }}
      >
        {children}
      </LinearGradient>
    </View>
  </TouchableOpacity>
);

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Currency_list"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 5,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 70,
        },
    }}
  
      // screenOptions={{ ShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        // component={Signup}
        // component={VerifyEmail}
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2E20CA" : "#748c94",
                }}
                alt="image"
              />
              <Text
                style={{ color: focused ? "#2E20CA" : "#748c94", fontSize: 8 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/analytics.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2E20CA" : "#748c94",
                }}
                alt="image"
              />
              <Text
                style={{ color: focused ? "#2E20CA" : "#748c94", fontSize: 8 }}
              >
                Analytics
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Currency_list"
        component={AllCurrency}
        // CustomeTabBarButton
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/currencyList.png")}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
                tintColor: focused ? "#ffffff" : "#ffffff",
                
              }}
              alt="image"
            />
          ),
          tabBarButton: (props) => <CustomeTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/calculator.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2E20CA" : "#748c94",
                }}
                alt="image"
              />
              <Text
                style={{ color: focused ? "#2E20CA" : "#748c94", fontSize: 8 }}
              >
                Calculator
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/profile.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2E20CA" : "#748c94",
                }}
                alt="image"
              />
              <Text
                style={{ color: focused ? "#2E20CA" : "#748c94", fontSize: 8 }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Convert_Currency"
        component={Home}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#4E43FF" },
        }}
      />
      <Stack.Screen
        name="Currency_list"
        component={AllCurrency}
        options={{ title: "Select Currency", headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Currency_add"
        component={AddCurrency}
        options={{ title: "Select Currency", headerStyleInterpolator: forFade }}
      />

      <Stack.Screen
        name="Profile"
        component={SelectCurrency}
        options={{ title: "Select Currency", headerStyleInterpolator: forFade }}
      />

      <Stack.Screen
        name="Calculator"
        component={Calculator}
        options={{ title: "Calculator", headerStyleInterpolator: forFade }}
      />

      <Stack.Screen
        name="CalculateCurrency"
        component={ConvertCurrency}
        options={{
          title: "Convert Currency",
          headerStyleInterpolator: forFade,
        }}
      />
      <Stack.Screen
        name="Convert"
        component={ConvertCurrency}
        options={{
          title: "Convert Currency",
          headerStyleInterpolator: forFade,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Signin}
        options={{ title: "Signin", headerStyleInterpolator: forFade }}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Signup", headerStyleInterpolator: forFade }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ title: "Forgot Password", headerStyleInterpolator: forFade }}
      />

      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ title: "Reset Password", headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={{ title: "VerifyEmail", headerStyleInterpolator: forFade }}
      />

      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: "Dashboard", headerStyleInterpolator: forFade }}
      />

      <Stack.Screen
        name="user-profile"
        component={Profile}
        options={{ title: "Profile", headerStyleInterpolator: forFade }}
      />

      <Stack.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: "Analytics", headerStyleInterpolator: forFade }}
      />

      <Stack.Screen
        name="Personal"
        component={Personal}
        options={{ title: "Personal", headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ title: "Notification", headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="AddNotification"
        component={AddNotification}
        options={{
          title: "Add Notification",
          headerStyleInterpolator: forFade,
        }}
      />
      <Stack.Screen
        name="CustomNotification"
        component={CustomNotification}
        options={{
          title: "Custom Notification",
          headerStyleInterpolator: forFade,
        }}
      />

      {/* <Stack.Screen name="Notification" component={Notification} /> */}
      {/* <Stack.Screen name="Personal" component={Personal} /> */}
      {/* <Stack.Screen name="Preference" component={Preference} /> */}
      <Stack.Screen
        name="Preference"
        component={Preference}
        options={{ title: "Preference", headerStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}
