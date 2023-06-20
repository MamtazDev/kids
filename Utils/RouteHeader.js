import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { HStack, Image } from "native-base";

import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const RouteHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <HStack alignItems={"center"} justifyContent="space-between">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/icons/arrowl.png")}
          style={{
            width: 50,
            height: 50,
          }}
          alt="logo"
        />

        {/* <AntDesign
          name="left"
          style={{ fontSize: 20, fontWeight: "bold", color: "#222222" }}
        /> */}
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          // marginLeft: "-50px",
          fontWeight: "bold",
          color: "#000000",
        }}
      >
        {title}
      </Text>
      <Text></Text>
    </HStack>
  );
};

export default RouteHeader;

const styles = StyleSheet.create({});
