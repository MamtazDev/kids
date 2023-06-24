import React, { useState } from "react";

import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RouteHeader from "../../../Utils/RouteHeader";
import {
  ScrollView,
  HStack,
  Box,
  Image,
  Text,
  Button,
  Icon,
  Flex,
  VStack,
  Center,
  View,
} from "native-base";
import COLORS from "../../../Utils/Constant";
import { Ionicons } from "@expo/vector-icons";

const Notification = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          // "rgba(170, 255, 251, 0.5)",
          "rgba(78, 67, 255, 0.87)",
          "rgba(137, 129, 254, 0.87)",
          "#e6e6e6",
        ]}
      >
        <Box paddingX={"5%"} marginTop={"5%"}>
          <RouteHeader title= "Custom Notification" />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Center>
              <HStack
                justifyContent={"center"}
                alignItems={"center"}
                height={38}
                backgroundColor="#F2FAFF"
                text
                mt={2}
                borderRadius={30}
                p={1}
                px={6}
                variant="subtle"
              >
                <Image
                  source={require("../../../assets/icons/calander.png")}
                  style={{
                    width: 14,
                    height: 16,
                    marginRight: 10,
                  }}
                  alt="logo"
                />
                <Text color="#2E20CA">07 January, 2023</Text>
              </HStack>
            </Center>

            <Text fontWeight={"bold"} fontSize={25} marginTop={6}>
              USD is increase-
            </Text>
            <Text fontWeight={"bold"} fontSize={20}>
              $1 = €0.83
            </Text>

            <Box
              flex={1}
              justifyContent="center"
              alignItems="center"
              marginTop={5}
            >
              <HStack space={2} alignItems="center">
                <Box
                  bg="white"
                  rounded="2xl"
                  width={"full"}
                  overflow="hidden"
                  backgroundColor="#2E20CA"
                  py={5}
                >
                  <Box flex={8} alignItems={"center"} paddingTop={4}>
                    <Center
                      height={70}
                      backgroundColor="#232631B8"
                      borderRadius={100}
                      px={10}
                      variant="subtle"
                    >
                      <Text fontSize={20} fontWeight={"bold"} color={"white"}>
                        USD / EUR Overview
                      </Text>
                      <Text fontSize={12} marginTop={1} color={"white"}>
                        07 January, 2023
                      </Text>
                    </Center>
                  </Box>

                  <VStack marginTop={10}>
                    <Flex
                      direction="row"
                      justifyContent="space-between"
                      paddingTop={2}
                      px={6}
                    >
                      <Text bold fontSize="xl" color={"white"}>
                        Close
                      </Text>
                      <Text fontSize="xl" color={"white"}>
                        0.939496
                      </Text>
                    </Flex>

                    <Flex
                      direction="row"
                      justifyContent="space-between"
                      paddingTop={2}
                      px={6}
                    >
                      <Text bold fontSize="xl" color={"white"}>
                        Low
                      </Text>
                      <Text fontSize="xl" color={"white"}>
                        0.8782885
                      </Text>
                    </Flex>
                  </VStack>
                </Box>
              </HStack>
            </Box>
          </ScrollView>
        </Box>
      </LinearGradient>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({
  primary_btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginTop: 40,
    paddingVertical: 30,
  },
});
