import { StyleSheet } from "react-native";
import React from "react";
import { Avatar, CheckIcon, HStack, View, Text, Image } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const SIngleCurrencyItem = ({
  navigation,
  item,
  favCurrency,
  setFavCurrency,
}) => {
  const favHandler = () => {
    setFavCurrency([...favCurrency, item]);
  };

  return (
    // <HStack space={2} marginX={5} marginY={1} justifyContent="space-between">
    //     <Text onPress={() =>navigation.navigate('CalculateCurrency')}  color="emerald.500" fontSize="md">
    //         {item.name}
    //     </Text>
    //     <AntDesign onPress={ favHandler} name="pushpin" size={24} style={styles.icon} color="black" />
    // </HStack>

    <HStack
      mt={3}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#ffffff"
      padding={5}
      borderRadius={10}
    >
      <HStack alignItems="center">
        {/* <Avatar
          bg="green.500"
          size="sm"
          rounded="full"
          source={{
            uri: item.image,
          }}
        ></Avatar> */}
        <Image
            Image
            borderRadius={100}
            style={styles.image}
            resizeMode={"cover"}
            source={{
              uri: item.image,
              width: 60,
              height: 60,
              borderRadius: "50%",

              overflow: "hidden",
              borderWidth: 3,
              borderColor: "red",
              padding: 10,
              

              // blurRadius: 64,
            }}
            alt="image"
        />
        <View ml={2} style={styles.header}>
          <Text
            bold
            fontSize="md"
            onPress={() => navigation.navigate("CalculateCurrency")}
          >
            {" "}
            {item.name}
          </Text>
          <Text ml={1} fontSize="xs">
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
  );
};

export default SIngleCurrencyItem;

const styles = StyleSheet.create({
  // icon : {
  //     color:'#3426D0',
  //     fontSize: 16,
  //  transform: [{ rotate: '90deg' }],
  // },
  

  icon: {
    color: "#BFB9FF",
    fontSize: 16,
    transform: [{ rotate: "90deg" }],
  },
});
