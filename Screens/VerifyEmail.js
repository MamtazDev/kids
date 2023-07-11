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
  import { primaryGrad } from "../Utils/GradientColor";
  import { LinearGradient } from "expo-linear-gradient";
  import AsyncStorage from '@react-native-async-storage/async-storage';
  // import LinearGradient from 'expo-linear-gradient'; // import LinearGradient
  
  const VerifyEmail = ({ navigation, route}) => {
    const [email, setEmail] = React.useState(route.params.email);
    const [loginKey, setLoginKey] = React.useState("");
    // const {state} = useLocation();
    // const stateEmail = state;


    const verifyHandler = async() => {
        try {
          const response = await fetch("http://api.qwixk.com/coin-alter/verify-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: "dihanopedia@gmail.com",
              verification_token: "2592023a-ea62-40c7-9044-3cfdbd413f99"
            }),
          });
    
          if (response.ok) {
            // Sign-in successful
            console.log("Login key", loginKey)
            AsyncStorage.setItem('user_details', JSON.stringify(loginKey));
            setTimeout(() => {navigation.navigate("Signup")}, 2000)   

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
    
        // navigation.navigate("VerifyEmail", { email: 'nahid.muradabir@gmail.com' });
      


      
    }

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
                >Verify your Email
                </Text>
              </Center>
            </View>
         
  
          <View style={styles.container} paddingTop={25}>
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
                value={email}
                placeholder="Email"
              />
              <TextInput
                style={[
                  {
                    backgroundColor: "white",
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    // placeholderTextColor: "gray",
                    marginTop: 30,
                  },
                  styles.input,
                ]}
                onChangeText={(text) => setLoginKey(text)}
                value={loginKey}
                placeholder="Enter your Login-key"
              />
  
              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Button
                  onPress={() => verifyHandler()}
                  style={[styles.primary_btn]}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Verify Your Email
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
  
  export default VerifyEmail;
  
  const styles = StyleSheet.create({
    container: {
      // width: "90%",
      // alignSelf: "center",
      // marginBottom: 100,
      // backgroundColor:'#f3f3f3'
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
  