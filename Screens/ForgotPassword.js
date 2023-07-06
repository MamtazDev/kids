import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import AppScreen from "../Utils/AppScreen";
import { Button, Center, Flex, Image, VStack } from "native-base";
import COLORS from "../Utils/Constant";

import { LinearGradient } from "expo-linear-gradient";
import { primaryGrad } from "../Utils/GradientColor";

// import LinearGradient from 'expo-linear-gradient'; // import LinearGradient

const ForgotPassword = ({ navigation }) => {
  const [usernameOrEmail, setUsernameOrEmail] = React.useState("");
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
            // "#fbfbfb",
            "#f3f3f3"]}
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
                Forgot Password
              </Text>
            </Center>
          </View>
       
        <View style={styles.container} marginTop={25}>
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
              onChangeText={(text) => setUsernameOrEmail(text)}
              value={usernameOrEmail}
              placeholder="Username or email"
            />

            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Button
                onPress={() => navigation.navigate("ResetPassword")}
                style={[styles.primary_btn]}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  Reset Password
                </Text>
              </Button>
            </TouchableOpacity>
          </View>
        </View>
        </LinearGradient>
        {/* </LinearGradient> */}
      </ScrollView>
    </>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    // width: "90%",
    // alignSelf: "center",
    // marginBottom: 100,
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
    marginHorizontal: 30,
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
