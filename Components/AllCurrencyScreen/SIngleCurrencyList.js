import { StyleSheet } from "react-native";
import React from "react";
import {
  Avatar,
  CheckIcon,
  HStack,
  View,
  Text,
  Image,
  IconButton,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

const SIngleCurrencyList = ({ navigation }) => {
  const favHandler = () => {
    const items = favCurrency.filter((single) => single.name !== item.name);
    setFavCurrency(items);
  };
  return (
    <>
      <HStack
        mt={3}
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#ffffff"
        padding={4}
        borderRadius={10}
      >
        <HStack alignItems="center">
          {/* <Image
            source={require("../../assets/icons/arrowl.png")}
            style={{
              width: 50,
              height: 50,
            }}
            alt="logo"
          /> */}
          <IconButton
            onPress={() => navigation.navigate("Currency_add")}
            style={{
              backgroundColor: "rgba(242, 244, 255, 1)",
              borderRadius: 50,
              marginRight: 10,
            }}
            colorScheme="indigo"
            variant="ghost"
            _icon={{
              as: AntDesign,
              name: "plus",
            }}
          />

          <View ml={2} style={styles.header}>
            <Text
              bold
              fontSize="xl"
              onPress={() => navigation.navigate("CalculateCurrency")}
            >
              Add Currency
            </Text>
            <Text fontSize="sm">Tap to add new currency to your list</Text>
          </View>
        </HStack>
      </HStack>
    </>

    // <AntDesign onPress={ favHandler} name="pushpin" size={24} style={styles.icon} color="black" />
  );
};

export default SIngleCurrencyList;

const styles = StyleSheet.create({
  icon: {
    color: "#3426D0",
    fontSize: 16,
    //  transform: [{ rotate: '90deg' }],
  },
});
