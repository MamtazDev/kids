import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import AppScreen from "../Utils/AppScreen";
import { Button, Center, Flex, Image, VStack } from "native-base";
import COLORS from "../Utils/Constant";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";
import { primaryGrad } from "../Utils/GradientColor";

const Signin = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const submitHandler = async () => {
    try {
      const response = await fetch("http://api.qwixk.com/coin-alter/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "dihanopedia@gmail.com",
          password: "abir",
          login_key: "49ae1c20-986b-43a6-aa2b-fb3ac65ff222"
        }),
      });

      if (response.ok) {
        // Sign-in successful
        const data = await response.json();
        // Do something with the response data
        console.log("Token: ",data.token);
        AsyncStorage.setItem('token', JSON.stringify(data.token));
        // navigation.navigate("Home");
      } else {
        // Sign-in failed
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
    }

    navigation.navigate("Home");
  };

  return (
    <>
      <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={[
          "rgba(170, 255, 251, 0.5)",
          "rgba(78, 67, 255, 0.57)",
          "rgba(137, 129, 254, 0.47)",
          "#fbfbfb",
          "#fbfbfb"]}
        style={{
          paddingTop: 100,
        }}
      >
        <View>
          <Center>
            <Image
              borderRadius={100}
              source={require("../assets/logo/logo.png")}
              style={{
                width: 99,
                height: 99,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "white",
                padding: 20,
                marginTop: 20,
              }}
              alt="logo"
            />
            <Text
              style={{
                fontSize: 30,
                fontWeight: 800,
                marginTop: 6,
              }}
            >
              Sign in
            </Text>
            <Text
              style={[
                styles.title_margin_Secondery,
                styles.main_Font_secondary,
              ]}
            >
              Access to your account
            </Text>
          </Center>
        </View>
      </LinearGradient>

      <View style={styles.wrapper}>
          <View style={{backgroundColor:"#ffffff"}}>
            <View style={styles.container_Input}>
              <TextInput
                style={[
                  {
                    backgroundColor: "white",
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                  },
                  styles.input,
                ]}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email Address"
              />
              <TextInput
                style={[
                  {
                    backgroundColor: "white",
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginTop: 16,
                  },
                  styles.input,
                ]}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Password"
              />

              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  style={[
                    styles.title_margin_Secondery,
                    styles.main_Font_secondary1,
                  ]}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={() => submitHandler()}> */}
              <Button
                onPress={() => submitHandler()}
                style={[styles.primary_btn]}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  Sign in
                </Text>
              </Button>
              {/* </TouchableOpacity> */}
              {/*  */}
              <VStack space={10} alignItems="center" marginTop={5}>
                <Text
                  style={[
                    styles.title_margin_Secondery,
                    styles.main_Font_secondary,
                  ]}
                >
                  Or sign in with
                </Text>

                <Flex
                  direction="row"
                  width={"full"}
                  padding={3}
                  bgColor={"white"}
                  rounded={6}
                  style={{
                    display: "flex",
                    shadowColor: '#666',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.9,
                    // shadowRadius: 10,
                    elevation: 3
                  }}
                >
                  <Image
                    borderRadius={100}
                    source={require("../assets/icons/google.png")}
                    style={{
                      width: 24,
                      height: 24,
                      marginLeft: 6,
                    }}
                    alt="logo"
                  />

                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      marginLeft: 90,
                    }}
                  >
                    Google
                  </Text>
                </Flex>
              </VStack>

              <TouchableOpacity
                onPress={() => navigation.navigate("Signup")}
                style={[styles.signContainer, styles.primaryText]}
              >
                <Text style={[styles.main_Font_secondary1]}>
                  Don’t have an account?
                </Text>
                <Text
                  style={[styles.main_Font_secondary, styles.main_Font_signup]}
                >
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      
      </View>
       </ScrollView>
    </>
  );
};

export default Signin;

const styles = StyleSheet.create({

  wrapper: {
    padding:15,
    backgroundColor:'#ffffff'
  },

  main_title: {
    marginTop: 20,
  },
  main_titleSecondery: {
    marginTop: 60,
  },
  title_margin_Secondery: {
    marginTop: 16,
  },
  main_Font: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  main_Font_secondary: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9D9D9D",
  },
  main_Font_align: { textAlign: "center" },
  main_Font_Signup: { textAlign: "center" },
  container_Input: {
    marginTop: 30,
  },

  input: {
    borderWidth: 0,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 14,

    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 10,
  },
  primary_btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginTop: 40,
    height: 50,
  },
  main_Font_signup: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  signContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  main_Font_secondary1: {
    color: "#000",
    marginRight: 10,
  },
});
