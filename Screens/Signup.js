import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppScreen from "../Utils/AppScreen";
import { Button, Center, Flex, Image, VStack } from "native-base";
import COLORS from "../Utils/Constant";
import { primaryGrad } from "../Utils/GradientColor";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from '@react-native-async-storage/async-storage';

// import LinearGradient from 'expo-linear-gradient'; // import LinearGradient

const Signup = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState("");

  const [username, setUsername] = React.useState("");
  // const [password, setPassword] = useState('');

  // const asyncStorageData =   "dihan"
  const submitHandler = async () => {
    try {
      const response = await fetch("http://api.qwixk.com/coin-alter/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Sign-in successful
        const data = await response.json();
        // Do something with the response data
        console.log(data.message);
        data.message && navigation.navigate("VerifyEmail", { email: 'nahid.muradabir@gmail.com' });
      } else {
        // Sign-in failed
        const errorData = await response.json();
        // Handle the error
        console.log(errorData);
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
    }

    navigation.navigate("VerifyEmail", { email: 'nahid.muradabir@gmail.com' });
  };




  const showData = async () => {
    let user = await AsyncStorage.getItem('user_details');
    user = JSON.parse(user);
    console.log(typeof user, user);

    // const name = await AsyncStorage.getItem("name");
    // const age = await AsyncStorage.getItem("age");
    // console.log(name);
    // console.log(typeof(age), age)
  }


  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
        > */}

        <LinearGradient
          // Button Linear Gradient
          colors={[

            "rgba(170, 255, 251, 0.5)",
            "rgba(78, 67, 255, 0.57)",
            "rgba(137, 129, 254, 0.47)",
            // "#fbfbfb",
            "#fbfbfb"]}
          style={{
            paddingTop: 50,
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
                Sign Up
              </Text>
              <Text
                style={[
                  styles.title_margin_Secondery,
                  styles.main_Font_secondary,
                ]}
              >
                Open your account
              </Text>
            </Center>
          </View>
        </LinearGradient>

        <View style={styles.container}>
          <View>

            {/* <Text> LoginKey: {asyncStorageData}</Text> */}
            <Text> Use name: {user}</Text>
            <Text> Use name: {email}</Text>
            <Text> Use name: {password}</Text>
          </View>
          <View style={styles.container_Input}>
            <TextInput
              style={[
                {
                  backgroundColor: "white",
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  // placeholderTextColor: "gray",
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
                  height: 40, marginTop: 16,
                  borderColor: "gray",
                  borderWidth: 1,
                  // placeholderTextColor: "gray",
                },
                styles.input,
              ]}
              onChangeText={(text) => setUser(text)}
              value={user}
              placeholder="User Name"
            />
            <TextInput
              style={[
                {
                  backgroundColor: "white",
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  marginTop: 16,
                  // placeholderTextColor: "gray",
                },
                styles.input,
              ]}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
            />
            {/* <TextInput
              style={[
                {
                  backgroundColor: "white",
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  marginTop: 16,
                  placeholderTextColor: "gray",
                },
                styles.input,
              ]}
              onChangeText={(text) => setReTypePassword(text)}
              value={reTypePassword}
              placeholder="Re-type Password"
            /> */}

            <Button
              onPress={() => showData()}
              style={[styles.primary_btn]}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                }}
              >
                Retrive data from store
              </Text>
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
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
                  Sign Up
                </Text>
              </Button>
            </TouchableOpacity>

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
                  // justifyContent: "center"
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
                  XLambda
                </Text>
              </Flex>
            </VStack>

            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[styles.signContainer, styles.primaryText]}
            >
              <Text style={[styles.main_Font_secondary1]}>
                Already have an account?
              </Text>
              <Text
                style={[styles.main_Font_secondary, styles.main_Font_signup]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* </LinearGradient> */}
      </ScrollView>
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ffffff'
  },
  main_title: {
    marginTop: 99,
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
    marginHorizontal: "5%",
    // marginLeft: 20,
  },

  input: {
    borderWidth: 0,
    height: 50,
    paddingHorizontal: 20,
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
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  main_Font_secondary1: {
    color: "#000",
    marginRight: 10,
  },
});
