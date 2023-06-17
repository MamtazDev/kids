import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, HStack, Input, Text, VStack, View } from "native-base";

import { LinearGradient } from "expo-linear-gradient";
import RouteHeader from "../Utils/RouteHeader";
import Dropdown from "../Utils/Dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Menu, HamburgerIcon, Box, Pressable, Center } from "native-base";
import COLORS from "../Utils/Constant";

const ConvertCurrency = ({ navigation }) => {


  const convertHandler = () => {
    
  }
  
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
                  size="sm"
                  mr={2}
                  bg="green.500"
                  source={{
                    uri: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
                  }}
                ></Avatar>
                <Text bold fontSize="md" textAlign="center">
                  BDT
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
                <Input
                  onChangeText={() => convertHandler()}
                  placeholder="Amount"
                  w="100%"
                  style={{ borderRadius: 20 }}
                  variant="filled"
                  backgroundColor="#ffffff"
                />
              </View>
            </View>
          </HStack>
        </View>

        <View style={styles.converted}>
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
                  uri: "https://images.unsplash.com/photo-1467912407355-245f30185020?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                }}
              ></Avatar>
              <Text bold fontSize="md" textAlign="center">
                USD
              </Text>
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
                Enter Amount
              </Text>
              <View
                style={{
                  alignItems: "flex-end",
                }}
              >
                <Input
                  placeholder="Amount"
                  w="100%"
                  style={{ borderRadius: 20 }}
                  variant="filled"
                  backgroundColor="#F1F1F1"
                />
              </View>
            </View>
          </HStack>

          <HStack
            mt={4}
            justifyContent="space-between"
            backgroundColor="#ffffff"
            padding={3}
            borderRadius={10}
          >
            <HStack alignItems="center">
              <Avatar
                size="md"
                mr={2}
                bg="green.500"
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1675875487955-0947bcad1597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
                }}
              ></Avatar>
              <Text bold fontSize="md" textAlign="center">
                Riyal
              </Text>
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
                Enter Amount
              </Text>
              <View
                style={{
                  alignItems: "flex-end",
                }}
              >
                <Input
                  placeholder="Amount"
                  w="100%"
                  style={{ borderRadius: 20 }}
                  variant="filled"
                  backgroundColor="#F1F1F1"
                />
              </View>
            </View>
          </HStack>

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
                  Add More
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
});
