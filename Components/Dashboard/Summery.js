import { StyleSheet } from "react-native";
import { Button, Icon, Text, View } from "native-base";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

const Summery = () => {
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
      <Text color="##1E3DFB">Weekly Top</Text>
      <Text bold fontSize="2xl">
        Euro
      </Text>
      <Text bold fontSize="5xl">
        $1.084
      </Text>

      <Button
        backgroundColor="#E4F0FF"
        mt={2}
        borderRadius={30}
        p={1}
        px={2}
        variant="subtle"
        endIcon={<Icon as={SimpleLineIcons} name="graph" size="sm" />}
      >
        +0.005
      </Button>
    </View>
  );
};

export default Summery;

const styles = StyleSheet.create({});
