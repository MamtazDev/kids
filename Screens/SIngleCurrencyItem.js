import { StyleSheet } from "react-native";
import React from "react";
import { Avatar, CheckIcon, HStack, View, Text, Image } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setBaseCurr, setTargettedCurr } from "../store/colorSlice";

const SIngleCurrencyItem = ({
  navigation,
  item,
  favCurrency,
  setFavCurrency,
  isBase
}) => {
  const favHandler = () => {
    setFavCurrency([...favCurrency, item]);
  };


  const dispatch = useDispatch();
  

  return (
  

    <HStack
      mt={4}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#ffffff"
      py={3}
      px={4}
      borderRadius={10}
    >
      <HStack alignItems="center">
        
        <Image source={{
          uri: item.image
        }} alt="Alternate Text" size="xs" style={{ borderRadius: 20 }} />



        <View ml={2} style={styles.header}>
          <Text
            bold
            fontSize="md"
            onPress={() => {
              isBase ? dispatch(setBaseCurr(item.currencyName)) : dispatch(setTargettedCurr(item.currencyName));
              navigation.navigate("Currency_list")
            }}
          >
            
            {item.name}
          </Text>
          <Text ml={1} fontSize="xs">
            {item.currencyName}
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
