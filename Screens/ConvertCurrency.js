import React, { useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Avatar, Button, HStack, Text, VStack, View } from "native-base";

import { LinearGradient } from "expo-linear-gradient";
import RouteHeader from "../Utils/RouteHeader";
import Dropdown from "../Utils/Dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { Menu, HamburgerIcon, Box, Pressable, Center } from "native-base";
import COLORS from "../Utils/Constant";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

// import flagsList from "../Utils/flag";


const flagsList = {

  "INR": "https://plus.unsplash.com/premium_photo-1674591172888-1184c4170a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "BDT": "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  "YEN": "https://plus.unsplash.com/premium_photo-1675865394925-8ccfb93e2dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  "USD": "https://images.unsplash.com/photo-1590638302397-73c58ddba466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  "GBP": "https://plus.unsplash.com/premium_photo-1674591172569-834e3c928c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",

}


const ConvertCurrency = ({ navigation }) => {
  const [targetedValue, setTargetedValue] = useState(null);
  const [baseValues, setBaseValues] = useState([]);

  const [targeetedResponse, setTargeetedResponse] = useState([]);
  const [inputedValue, setInputedValue] = useState(0);


  const convertHandler = () => { };

  const targetredInputHandler = (text) => {
    console.log("inputVal", text);
    setTargetedValue(text);
    setInputedValue(text)
  };
  const baseInputHandler = (text) => {
    console.log("inputVal new", text);
    setBaseValues([...baseValues, text]);
  };

  console.log("targetedValue", targetedValue);
  console.log("baseInputHandler", baseValues);


  
    
  const {base, targettedCur} = useSelector((state) => state.color); //reading the state 
  console.log("base City: ", base)
  console.log("targettedCur", targettedCur)



  
  const apicallHandler = async () => {
    let user_token = await AsyncStorage.getItem("token");
    user_token = JSON.parse(user_token);





    console.log("user_token: ", typeof user_token, user_token);
    await fetch("http://api.qwixk.com/coin-alter/rates", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user_token}`,
      },
      body: JSON.stringify({
        base_currency: base,
        target_currencies:  targettedCur ,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Profile ", json);
        setTargeetedResponse(Object.entries(json.target_currencies))

        console.log("Profile target_currencies", json.target_currencies);
      })
      .catch((error) => {
        console.error("error", error);
      });

    console.log(user_token);

    // navigation.navigate("Home");
  };
  console.log("targeetedResponse", targeetedResponse.length)


  



  useEffect(() => {
    apicallHandler()
  }, [])

  return (
    <View>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          "rgba(170, 255, 251, 0.5)",
          "rgba(78, 67, 255, 0.87)",
          "rgba(137, 129, 254, 0.87)",
        ]}
      >
        <View pt={5}>
          {/* <Text bold mb={5} fontSize="xl" textAlign="center"></Text> */}

          <Box padding="20px">
            <RouteHeader title="Convert Currency" />
          </Box>


          {/* <Text bold mb={5} mt={2} fontSize="xl" textAlign="center">
            Convert Currency
          </Text> */}



          <HStack mt={15} mx={8} justifyContent="space-between">
            <VStack>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  marginBottom: 10,

                  color: "#FFFFFF",
                }}
              >
                Selected
              </Text>
              <HStack alignItems="center">
                <Avatar
                  size="md"
                  mr={2}
                  bg="green.500"
                  source={{
                    uri: flagsList[base],
                  }}
                ></Avatar>
                <Text bold fontSize="md" textAlign="center">
                {base}
                </Text>
                <Box ml={2} alignItems="flex-start">
                  <Menu
                    shadow={2}
                    w="90"
                    trigger={(triggerProps) => {
                      return (
                        <Pressable
                          accessibilityLabel="More options menu"
                          {...triggerProps}
                        >
                          <MaterialIcons
                            name="arrow-drop-down-circle"
                            size={24}
                            color="white"
                          />
                        </Pressable>
                      );
                    }}
                  >
                    <Menu.Item>USD</Menu.Item>
                    <Menu.Item>EUR</Menu.Item>
                    <Menu.Item>JPY</Menu.Item>
                    <Menu.Item>GBP</Menu.Item>
                    <Menu.Item>CAD</Menu.Item>
                    <Menu.Item>SEK</Menu.Item>
                    <Menu.Item>MXN</Menu.Item>
                    <Menu.Item>NOK</Menu.Item>
                  </Menu>
                </Box>
              </HStack>
            </VStack>

            <View
              style={{
                width: "50%",
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  marginBottom: 10,

                  color: "#FFFFFF",
                }}
              >
                Enter Amount
              </Text>
              <View
                style={{
                  alignItems: "flex-end",
                }}
              >
                <TextInput
                  style={styles.textInputStyle}
                  placeholderTextColor="#60605e"
                  numeric
                  keyboardType={"numeric"}
                  onChangeText={(text) => {
                    apicallHandler();
                    targetredInputHandler(text);
                  }}
                />
                {/* <TextInput
                  onChangeText={() => convertHandler()}
                  placeholder="Amount border"
                  // w="100%"
                  // rounded
                  // style={{ borderRadius: 60 }}
                  // variant="filled"
                  // backgroundColor="#ffffff"
                /> */}
              </View>
            </View>
          </HStack>
        </View>

        <View style={styles.converted}>

          {
            targeetedResponse.map(([currency, value], index) => (
              <HStack
                mt={4}
                justifyContent="space-between"
                backgroundColor="#ffffff"
                paddingX={3}
                paddingY={2}
                borderRadius={10}
              >
                <HStack alignItems="center">
                  <Avatar
                    size="md"
                    mr={2}
                    bg="green.500"
                    source={{
                      uri: flagsList[currency],
                    }}
                  ></Avatar>
                  <Text bold fontSize="md" textAlign="center">
                    {currency}
                  </Text>




                  <Box ml={2} alignItems="flex-start">
                    <Menu
                      shadow={2}
                      w="90"
                      trigger={(triggerProps) => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}
                          >
                            <FontAwesome name="caret-down" size={20} color="black" />
                          </Pressable>
                        );
                      }}
                    >
                      <Menu.Item>USD</Menu.Item>
                      <Menu.Item>EUR</Menu.Item>
                      <Menu.Item>JPY</Menu.Item>
                      <Menu.Item>GBP</Menu.Item>
                      <Menu.Item>CAD</Menu.Item>
                      <Menu.Item>SEK</Menu.Item>
                      <Menu.Item>MXN</Menu.Item>
                      <Menu.Item>NOK</Menu.Item>
                    </Menu>
                  </Box>
                </HStack>
                <View
                  style={{
                    width: "50%",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "left",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: 14,
                      marginBottom: 2,

                      color: "#000000",
                    }}
                  >
                    Amount
                  </Text>
                  <View
                    style={{
                      alignItems: "flex-end",
                    }}
                  >
                    {/* <Input
                  placeholder="Amount"
                  w="100%"
                  style={{ borderRadius: 20 }}
                  variant="filled"
                  backgroundColor="#F1F1F1"
                /> */}
                    {/* <TextInput
                  style={styles.textInputStyle1}
                  // placeholder="Enter Numeric Values Only"
                  placeholderTextColor="#60605e"
                  numeric
                  keyboardType={"numeric"}
                  onChangeText={(text) => baseInputHandler(text)}
                /> */}
                    <Text style={styles.textInputStyle1}>{value * inputedValue}</Text>
                  </View>
                </View>
              </HStack>
            ))
          }




          <Box alignItems="center">
            <Box width={180} justifyContent="center">
              <Button
                onPress={() => navigation.navigate("Currency_add")}
                style={[styles.primary_btn]}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                    // backgroundColor: "#e6e6e6",
                  }}
                >
                  <AntDesign name="pluscircleo" size={18} color="white" />
                  <Text style={{ fontSize: 10, color: 'transparent' }}>d</Text> Add More
                </Text>
              </Button>
            </Box>
          </Box>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ConvertCurrency;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#C0D8FC",
  },
  converted: {
    padding: 20,
    marginTop: 30,
    borderColor: "#000000",
    backgroundColor: "#eeeefd",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,

    height: "100%",
    borderColor: "#ffffff",
    borderWidth: 1,
  },

  primary_btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    marginTop: 40,
    height: 50,
    borderColor: "#968ef4",
    borderWidth: 2,
    // padding: 10,
  },
  textInputStyle: {
    width: "100%",
    padding: 10,
    borderRadius: 17,
    backgroundColor: "#ffffff",
  },
  textInputStyle1: {
    width: "100%",
    padding: 10,
    borderRadius: 17,
    backgroundColor: "#f5f5f5",
  },
});
