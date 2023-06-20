import React, { useEffect, useState } from "react";

import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import AppScreen from "../../../Utils/AppScreen";

import RouteHeader from "../../../Utils/RouteHeader";
import {
  FormControl,
  Select,
  Box,
  Center,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
  Divider,
  Flex,
  Button,
} from "native-base";

import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../../Utils/Constant";

import { AntDesign } from "@expo/vector-icons";
import CurrencyDropdown from "../../../Components/CurrencyDropdown";

const AddNotification = ({ navigation }) => {
  const [IsIncreate, setIsIncreate] = useState(null);

  useEffect(() => {}, [IsIncreate]);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={[
            // "rgba(170, 255, 251, 0.5)",
            "rgba(78, 67, 255, 0.87)",
            "rgba(137, 129, 254, 0.87)",
            // "#ffffff",
            "#e6e6e6",
          ]}
        >
          <Box paddingY="50px" paddingX="20px">
            <RouteHeader title="Add Notification" />
          </Box>

          <Center width={"full"}>
            <Text
              marginBottom={10}
              style={{ fontSize: 18, color: "black", fontWeight: "bold" }}
            >
              Notify me when
            </Text>
          </Center>

          <CurrencyDropdown />
          <HStack marginX={5} mt={5} justifyContent="space-between">
            <Button
              backgroundColor="#ffffff"
              // style={{
              //   borderTopWidth: IsIncreate === true ? 2 : 0,
              //   borderBottomWidth: IsIncreate === true ? 2 : 0,
              //   borderLeftWidth: IsIncreate === true ? 1 : 0,
              //   borderRightWidth: IsIncreate === true ? 2 : 0,
              // }}
              borderWidth={IsIncreate === true ? 1 : 0}
              borderColor={COLORS.primary}
              borderRadius={18}
              // rounded
              _text={{
                color: "#1F2937",
                paddingX: "7",
                paddingY: "1",
                fontWeight: "bold",
                fontSize: 20,
              }}
              onPress={() => setIsIncreate(true)}
              // onPress={(IsIncreate) => setIsIncreate(!IsIncreate)}
            >
              Is Increase
            </Button>
            <Button
              backgroundColor="#ffffff"
              borderWidth={IsIncreate === false ? 1 : 0}
              borderColor={COLORS.primary}
              borderRadius={18}
              _text={{
                color: "#1F2937",
                paddingX: "7",
                paddingY: "1",
                fontWeight: "bold",
                fontSize: 20,
              }}
              onPress={() => setIsIncreate(false)}
            >
              Is Decrease
            </Button>
            {/* <Button
              size={"md"}
              // rounded
              paddingX={2}
              // paddingY={5}
              backgroundColor="#ffffff"
              _text={{
                color: "#1F2937",
                paddingX: "10",
                paddingY: "1",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              BUTTON
            </Button> */}

            {/* <Center
              width={"50%"}
              // height={"50px"}
              marginRight={3}
              justifyContent="space-between"
              justifyItems={"center"}
              backgroundColor="white"
              paddingX={3}
              paddingY={6}
              borderRadius={10}
            >
              <Text fontWeight={"bold"} fontSize={17} style={styles.title}>
             
              </Text>
            </Center> */}

            {/* <Center
              width={"45%"}
              marginLeft={3}
              justifyContent="space-between"
              justifyItems={"center"}
              backgroundColor="white"
              paddingX={3}
              paddingY={6}
              borderRadius={10}
            >
              <Text fontWeight={"bold"} fontSize={17} style={styles.title}>
            
              </Text>
            </Center> */}
          </HStack>
        </LinearGradient>

        <TouchableOpacity>
          {/* <HStack
            style={[styles.primary_btn]}
            display={"flex"}
            justifyContent={"center"}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
              }}
            >
              Add Notification
            </Text>
          </HStack> */}
          <Box alignItems="center">
            <Box width="85%" justifyContent="center">
              <Button
                onPress={() => navigation.navigate("CustomNotification")}
                style={[
                  IsIncreate !== null
                    ? styles.primary_btn
                    : styles.primary_btn_disabled,
                  { display: "flex", flexDirection: "row" },
                ]}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <AntDesign name="pluscircleo" size={18} color="white" />
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      // fontWeight: "bold",
                      marginLeft: 5,
                      // backgroundColor: "#e6e6e6",
                    }}
                  >
                    Add Notification
                  </Text>
                </View>
              </Button>
            </Box>
          </Box>
        </TouchableOpacity>

        <Box alignItems="center" marginTop={3}>
          <Flex direction="row" alignItems={"center"} justifyItems={"center"}>
            <Divider
              _light={{
                bg: "#CFCBFB",
              }}
            />

            <Box
              borderRadius="full"
              bg="white"
              width={10}
              height={10}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text color="#2E20CA" fontWeight="bold" fontSize={12}>
                OR
              </Text>
            </Box>

            <Divider
              _light={{
                bg: "#CFCBFB",
              }}
            />
          </Flex>
        </Box>

        {/* <HStack marginX={5}>
          <Center
            width={"50%"}
            marginRight={3}
            justifyContent="space-between"
            justifyItems={"center"}
            backgroundColor="white"
            paddingX={3}
            paddingY={6}
            borderRadius={10}
          >
            <Text fontWeight={"bold"} fontSize={17} style={styles.title}>
              Is increase
            </Text>
          </Center>

          <Center
            width={"45%"}
            marginLeft={3}
            justifyContent="space-between"
            justifyItems={"center"}
            backgroundColor="white"
            paddingX={3}
            paddingY={6}
            borderRadius={10}
          >
            <Text fontWeight={"bold"} fontSize={17} style={styles.title}>
              Is decrease
            </Text>
          </Center>
        </HStack> */}
        <CurrencyDropdown ValueIsNeeded={true} />
        <HStack marginX={5} mt={5} justifyContent="space-between">
          <Button
            backgroundColor="#ffffff"
            // style={{
            //   borderTopWidth: IsIncreate === true ? 2 : 0,
            //   borderBottomWidth: IsIncreate === true ? 2 : 0,
            //   borderLeftWidth: IsIncreate === true ? 1 : 0,
            //   borderRightWidth: IsIncreate === true ? 2 : 0,
            // }}
            borderWidth={IsIncreate === true ? 1 : 0}
            borderColor={COLORS.primary}
            borderRadius={18}
            // rounded
            _text={{
              color: "#1F2937",
              paddingX: "7",
              paddingY: "1",
              fontWeight: "bold",
              fontSize: 20,
            }}
            onPress={() => setIsIncreate(true)}
            // onPress={(IsIncreate) => setIsIncreate(!IsIncreate)}
          >
            Is Increase
          </Button>
          <Button
            backgroundColor="#ffffff"
            borderWidth={IsIncreate === false ? 1 : 0}
            borderColor={COLORS.primary}
            borderRadius={18}
            _text={{
              color: "#1F2937",
              paddingX: "7",
              paddingY: "1",
              fontWeight: "bold",
              fontSize: 20,
            }}
            onPress={() => setIsIncreate(false)}
          >
            Is Decrease
          </Button>
          {/* <Button
              size={"md"}
              // rounded
              paddingX={2}
              // paddingY={5}
              backgroundColor="#ffffff"
              _text={{
                color: "#1F2937",
                paddingX: "10",
                paddingY: "1",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              BUTTON
            </Button> */}

          {/* <Center
              width={"50%"}
              // height={"50px"}
              marginRight={3}
              justifyContent="space-between"
              justifyItems={"center"}
              backgroundColor="white"
              paddingX={3}
              paddingY={6}
              borderRadius={10}
            >
              <Text fontWeight={"bold"} fontSize={17} style={styles.title}>
             
              </Text>
            </Center> */}

          {/* <Center
              width={"45%"}
              marginLeft={3}
              justifyContent="space-between"
              justifyItems={"center"}
              backgroundColor="white"
              paddingX={3}
              paddingY={6}
              borderRadius={10}
            >
              <Text fontWeight={"bold"} fontSize={17} style={styles.title}>
            
              </Text>
            </Center> */}
        </HStack>
        {/* <TouchableOpacity>
          <Box alignItems="center">
            <Box width="85%" justifyContent="center">
              <Button
                onPress={() => navigation.navigate("AddNotification")}
                style={[
                  styles.primary_btn,
                  { display: "flex", flexDirection: "row" },
                ]}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <AntDesign name="pluscircleo" size={18} color="white" />
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      // fontWeight: "bold",
                      marginLeft: 5,
                      // backgroundColor: "#e6e6e6",
                    }}
                  >
                    Add New
                  </Text>
                </View>
              </Button>
            </Box>
          </Box>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("CustomNotification")}
        >
          <Box alignItems="center">
            <Box width="85%" justifyContent="center">
              <Button
                onPress={() => navigation.navigate("AddNotification")}
                style={[
                  styles.primary_btn,
                  { display: "flex", flexDirection: "row" },
                ]}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <AntDesign name="pluscircleo" size={18} color="white" />
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      // fontWeight: "bold",
                      marginLeft: 5,
                      // backgroundColor: "#e6e6e6",
                    }}
                  >
                    Add New
                  </Text>
                </View>
              </Button>
            </Box>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default AddNotification;

const styles = StyleSheet.create({
  primary_btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    marginTop: 40,
    height: 50,
    borderColor: "#968ef4",
    borderWidth: 2,
    // padding: 10,
  },
  primary_btn_disabled: {
    backgroundColor: "#6456FF",
    borderRadius: 15,
    marginTop: 40,
    height: 50,
    borderColor: "#968ef4",
    borderWidth: 2,
    opacity: 0.4,
  },
});
