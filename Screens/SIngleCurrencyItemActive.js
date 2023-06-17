import { StyleSheet } from "react-native";
import React from "react";
import { Avatar, CheckIcon, HStack, View, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const SIngleCurrencyItemActive = ({
  navigation,
  item,
  favCurrency,
  setFavCurrency,
}) => {
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
        padding={5}
        borderRadius={10}
      >
        <HStack alignItems="center">
          <Avatar
            bg="green.500"
            size="sm"
            source={{
              uri: item.image,
            }}
          ></Avatar>

          <View ml={2} style={styles.header}>
            <Text
              bold
              fontSize="xl"
              onPress={() => navigation.navigate("CalculateCurrency")}
            >
              {" "}
              {item.name}
            </Text>
            <Text ml={2} fontSize="sm">
              CAD
            </Text>
          </View>
        </HStack>

        <AntDesign
          onPress={favHandler}
          name="pushpin"
          size={10}
          style={styles.icon}
          color="black"
        />

        {/* <Ionicons name="notifications" size={24} color="black" /> */}
      </HStack>
    </>

    // <AntDesign onPress={ favHandler} name="pushpin" size={24} style={styles.icon} color="black" />
  );
};

export default SIngleCurrencyItemActive;

const styles = StyleSheet.create({
  icon: {
    color: "#3426D0",
    fontSize: 16,
    //  transform: [{ rotate: '90deg' }],
  },
});
