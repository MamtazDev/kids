import { StyleSheet, TouchableOpacity } from "react-native";
import * as React from "react";
import {
  View,
  Button,
  Icon,
  Text,
  Box,
  Image,
  Modal,
  Pressable,
  Spinner,
  Heading,
} from "native-base";
import { Dimensions, SafeAreaView } from "react-native";

import { Defs, LinearGradient, Stop } from "react-native-svg";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import COLORS from "../Utils/Constant";
import AppScreen from "../Utils/AppScreen";
import { Center, HStack, ScrollView, Square, VStack } from "native-base";
import { useEffect } from "react";
import { useState } from "react";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

import DateTimePicker from "@react-native-community/datetimepicker";
import { currencyList } from "../Utils/CurrencyItem";
import ChartDefault from "../Components/ChartDefault";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateRange from "../Components/DateRange/DateRange";

export default function Analytics() {
  const screenWidth = Dimensions.get("window").width;
  const [period, setPeriod] = useState("");
  const [period1, setPeriod1] = useState([]);

  const [day, setDay] = useState("Day");
  const [date1, setDate1] = useState("7/15/2023");
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const [analyticData, setAnalyticData] = useState([]);

  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [openCurrency1, setOpenCurrency1] = useState(false);
  const [openCurrency2, setOpenCurrency2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCurrencyResult, setShowCurrencyResult] = useState(false);

  const handleCurrency = (data) => {
    if (openCurrency1) {
      setCurrency1(data);
      setOpenCurrency1(false);
    }
    if (openCurrency2) {
      setCurrency2(data);
      setOpenCurrency2(false);
    }
    if (currency1 && currency2) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowCurrencyResult(true);
      }, 5000);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showData = async () => {
    let user_token = await AsyncStorage.getItem("token");
    user_token = JSON.parse(user_token);
    console.log("user_token: ", typeof user_token, user_token);
  };


  function extractINROpenValues(data) {
    const inrData = data.target_currencies.INR;
    const inrOpenValues = inrData.map(item => item.open);
    return inrOpenValues;
  }


  const refetchData = async () => {
    let user_token = await AsyncStorage.getItem("token");
    user_token = JSON.parse(user_token);

    console.log("user_token: ", typeof user_token, user_token);

    fetch("http://api.qwixk.com/coin-alter/historical", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user_token}`,
      },
      body: JSON.stringify({
        base_currency: "BDT",
        target_currencies: ["INR"],
        start: "2022-01-01",
        end: "2022-02-27",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Profile Data:  ", json);

        const inrOpenValues = extractINROpenValues(json);
        console.log(inrOpenValues);
        setAnalyticData(inrOpenValues)
        


      })
      .catch((error) => {
        console.error(error);
      });

    // navigation.navigate("Home");
  };

  useEffect(() => {
    refetchData();
  }, []);

  useEffect(() => {
    showData();
  }, [period1, period]);
  return (
    <ScrollView>
      <ExpoLinearGradient
        // Button Linear Gradient
        colors={[
          // "rgba(170, 255, 251, 0.5)",
          "#AAFFFB",
          "#8981FE",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ]}
      >
        <Text bold mb={5} fontSize="xl" textAlign="center"></Text>
        {/* <RouteHeader title="" /> */}
        <Center>
          <Text mb={5} style={styles.chartTitle}>
            Analytics
          </Text>
        </Center>

        {/* <Text>{user_token}</Text> */}

        <HStack
          justifyContent="space-between"
          alignContent="center"
          backgroundColor="#ffffff"
          borderRadius={40}
          mx={5}
        >
          <ExpoLinearGradient
            colors={
              day === "Day" ? ["#6456FF", "#2E20CA"] : ["#ffffff", "#ffffff"]
            }
            style={{ borderRadius: 30 }}
          >
            <Button
              onPress={() => {
                refetchData();
                console.log("DIhan consoled the log!");
                setDay("Day");
              }}
              backgroundColor={"transparent"}
              borderWidth={2}
              borderColor={"white"}
              borderRadius={30}
              px="10%"
            >
              <Text color={day === "Day" ? "white" : "black"}>7 Days</Text>
            </Button>
          </ExpoLinearGradient>

          <ExpoLinearGradient
            colors={
              day === "7 Days" ? ["#6456FF", "#2E20CA"] : ["#ffffff", "#ffffff"]
            }
            style={{ borderRadius: 30 }}
          >
            <Button
              onPress={() => setDay("7 Days")}
              backgroundColor={"transparent"}
              borderWidth={2}
              borderColor={"white"}
              borderRadius={30}
              // px={7}
              px="8%"
            >
              <Text color={day === "7 Days" ? "white" : "black"}>30 Days</Text>
            </Button>
          </ExpoLinearGradient>

          <ExpoLinearGradient
            colors={
              day === "30 Days"
                ? ["#6456FF", "#2E20CA"]
                : ["#ffffff", "#ffffff"]
            }
            style={{ borderRadius: 30 }}
          >
            <Button
              onPress={() => setDay("30 Days")}
              backgroundColor={"transparent"}
              borderWidth={2}
              borderColor={"white"}
              borderRadius={30}
              // px={8}
              px= "6%"
            >
              <Text color={day === "30 Days" ? "white" : "black"}>
                365 Days
              </Text>
            </Button>
          </ExpoLinearGradient>
        </HStack>

        {/* <View mt={7} alignItems="center">
          <ExpoLinearGradient
            colors={["#CCE7FF", "#F2FAFF", "#FFFFFF"]}
            style={{ borderRadius: 20 }}
          >
            <Button
              onPress={() => setShow(true)}
              borderRadius="30"
              // padding={5}
              backgroundColor="transparent"
              color={"white"}
              leftIcon={
                <Icon
                  as={SimpleLineIcons}
                  name="calendar"
                  color="#6456FF"
                  size="sm"
                />
              }
              endIcon={
                <Icon
                  as={MaterialIcons}
                  name="keyboard-arrow-down"
                  color="#6456FF"
                  size="sm"
                />
              }
            >
              <Text color="#6456FF">{date.toDateString()}</Text>
            </Button>
          </ExpoLinearGradient>
        </View> */}

        <DateRange/>
        
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        )}


        <HStack alignItems={"center"} mx={6} my={10}>
          {showCurrencyResult ? (
            <VStack>
              <Text color={"black"} fontWeight={"bold"} fontSize={24}>
                {date.toDateString()}
              </Text>
              <Text color={"black"} fontWeight={"bold"} fontSize={17}>
                $1 = €0.83
              </Text>
            </VStack>
          ) : (
            <>
              {isLoading ? (
                <HStack space={2} justifyContent="center" alignItems={"center"}>
                  <Spinner accessibilityLabel="Loading posts" />
                  <Heading color="primary.500" fontSize="md">
                    Loading
                  </Heading>
                </HStack>
              ) : (
                <>
                  <Pressable onPress={() => setOpenCurrency1(true)}>
                    <HStack alignItems={"center"}>
                      <Text bold fontSize="sm">
                        {currency1 ? currency1 : "Add Currency"}
                      </Text>
                      <Image
                        source={require("../assets/icons/downSolid.png")}
                        width={2}
                        height={1}
                        ml={2}
                        alt="image"
                      />
                      {currency1 && (
                        <Image
                          source={require("../assets/icons/rightArrow.png")}
                          width={4}
                          height={2}
                          ml={2}
                          alt="image"
                        />
                      )}
                    </HStack>
                  </Pressable>

                  <Pressable onPress={() => setOpenCurrency2(true)} ml={8}>
                    <HStack alignItems={"center"}>
                      <Text bold fontSize="sm">
                        {currency2 ? currency2 : "Add Currency"}
                      </Text>
                      <Image
                        source={require("../assets/icons/downSolid.png")}
                        width={2}
                        height={1}
                        ml={2}
                        alt="image"
                      />
                    </HStack>
                  </Pressable>
                </>
              )}
            </>
          )}
        </HStack>

        <ChartDefault DisplayDay={day}  analyticData={analyticData}/>
      </ExpoLinearGradient>

      <Box
        height="210px"
        mt={10}
        mx={5}
        mb="110"
        backgroundColor="#6456FF"
        borderRadius={20}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          height="60px"
          width="90%"
          mt={1}
          backgroundColor="#232631"
          borderRadius={50}
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="md" px={5} color="#ffffff">
            USD / EUR Overview
          </Text>
          <Text fontSize="xs" px={5} py={0} color="#ffffff">
            01 -07 January, 2023
          </Text>
        </Box>

        {[1, 2, 3].map((item, index) => (
          <HStack
            key={index}
            mt={4}
            justifyContent="space-between"
            width="100%"
            // backgroundColor="#e6e6e6"
          >
            <Text fontSize="md" px={5} py={0} color="#ffffff">
              Close
            </Text>
            <Text fontSize="xs" px={5} py={0} color="#ffffff">
              --- ---- ---
            </Text>
          </HStack>
        ))}
      </Box>

      <Modal
        isOpen={openCurrency1 || openCurrency2}
        onClose={() => setOpenCurrency1(false) || setOpenCurrency2(false)}
      >
        <Modal.Content width={350} maxWidth="400px" height={"full"}>
          <Modal.Header>Select Currency</Modal.Header>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Modal.Body>
              {currencyList?.map((crn, i) => (
                <Pressable key={i} onPress={() => handleCurrency(crn?.name)}>
                  <View
                    backgroundColor={"gray.100"}
                    mb={2}
                    height={10}
                    justifyContent={"center"}
                    px={5}
                  >
                    <Text key={i}>{crn?.name}</Text>
                  </View>
                </Pressable>
              ))}
            </Modal.Body>
          </ScrollView>
        </Modal.Content>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  singleItem: {
    height: 80,
    backgroundColor: COLORS.purple,
    marginTop: 10,
  },
  chartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    padding: 10,
    // margin: 5,
    // height:'40%'
  },
  btn_common: {
    padding: 9,
    borderColor: "#9D9D9D",
    color: "#9D9D9D",
    fontSize: 12,
  },
  btn_left: {
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  btn_right: {
    borderWidth: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  btn_c: {
    marginTop: 20,
  },
  btn_day: {
    borderBottomWidth: 2,
    borderColor: "#000",
    color: "#000",
  },
});
