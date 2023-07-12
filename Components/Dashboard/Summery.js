import { StyleSheet } from "react-native";
import { Button, Icon, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Summery = () => {

  const [weeklyCurrent, setWeeklyCurrency] = useState("INR")
  
  const [highestOpen, setHighestOpen] = useState()



  const WeeklyTophDataFetch = async () => {
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
        target_currencies: [weeklyCurrent],
        start: "2022-01-01",
        end: "2022-01-07",

      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Weekly Data: ", json);

        let highestOpen1 = -Infinity;
        let highestOpenCurrency = '';

        for (const currency in json.target_currencies) {
          const currencyData = json.target_currencies[currency];
          for (const obj of currencyData) {
            if (obj.open > highestOpen1) {
              setHighestOpen(obj.open);
              highestOpenCurrency = currency;
            }
          }
        }

        console.log("Currency with the highest open value:", highestOpenCurrency);
        console.log("Highest Open Value:", highestOpen);

        
      })
      .catch((error) => {
        console.error(error);
      });

    // navigation.navigate("Home");
  };
  
  useEffect(() => {
    WeeklyTophDataFetch()
  },[])

  return (
    <View 
      mt={8}
      borderWidth={1}
      borderColor={"gray.100"}
      height="198px"
      backgroundColor="rgba(255, 255, 255, 0.350) 0%, #FFFFFF 100%)"
      alignItems="center"
      display="flex"
      justifyContent="center"
      my={5}
      p={5}
      borderRadius={40}
    >
      <Text color="#1E3DFB">Weekly Top</Text>
      <Text bold fontSize="2xl">
      INR
      </Text>
      <Text bold fontSize="5xl">
        ${highestOpen}
      </Text>

      <Button
        backgroundColor="#E4F0FF"
        mt={2}
        borderRadius={30}
        p={1}
        px={2}
        variant="subtle"
        endIcon={<Icon as={SimpleLineIcons} name="graph" size="sm" />}
        onPress={() => WeeklyTophDataFetch()}
      >
        +0.005
      </Button>
    </View>
  );
};

export default Summery;

const styles = StyleSheet.create({});
