import React, { useState } from "react";

import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import AppScreen from "../../Utils/AppScreen";

import { LinearGradient } from "expo-linear-gradient";
import RouteHeader from "../../Utils/RouteHeader";

import { AntDesign } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import COLORS from "../../Utils/Constant";
import { primaryGrad } from "../../Utils/GradientColor";

const Notification = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <>
      <LinearGradient
        // Button Linear Gradient
        colors={primaryGrad}
      >
        <Box paddingY="50px" paddingX="20px">
          <RouteHeader title="Notification" />
        </Box>

        <Center width={"full"}>
          <Text
            marginTop={10}
            style={{ fontSize: 18, color: "black", fontWeight: "bold" }}
          >
            You don’t have any notification
          </Text>
          <Text marginTop={2} marginX={1} style={{ alignItems: "center" }}>
            Notification allows you to be notified when a currency’s{" "}
          </Text>
          <Text paddingBottom={5}>
            {" "}
            will increase or goes above or below a set value
          </Text>
        </Center>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* <HStack mt={5} alignItems="center" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">
          Turn on notification
        </Text>
        <Switch
          trackColor={{ false: "#666", true: "#38E5C6" }}
          thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </HStack> */}

        <VStack marginX={5}>
          {[1, 2, 3].map((item, index) => (
            <HStack
              space={3}
              mt={5}
              justifyContent="space-evenly"
              backgroundColor="white"
              paddingY={2}
              paddingX={1}
              borderRadius={10}
              style={{
                shadowColor: '#e6e6e6',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 10
              }}
            >
              <View
                display={"flex"}
                flexDirection={"row"}
                alignItems="center"
                justifyItems="center"
              >
                <Image
                  borderRadius={100}
                  source={require("../../assets/icons/notification.png")}
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 100,
                  }}
                  alt="logo"
                />
                <View marginLeft={8} width="70%">
                  <Text bold fontSize="sm">
                    Notify me when USD is increase
                  </Text>
                  <Text fontSize="sm">Date: 12-02-20223</Text>
                </View>

                <Image
                  source={require("../../assets/icons/remove.png")}
                  style={{
                    width: 20,
                    height: 25,
                    resizeMode: 'contain',
                  }}
                  
                  alt="logo"
                />
              </View>
            </HStack>
          ))}
        </VStack>

        <TouchableOpacity
          onPress={() => navigation.navigate("AddNotification")}
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

        {/* <VStack>
        <Text fontSize="lg" color={isEnabled ? "#000" : "#e6e6e6"}>
          Notification tone
        </Text>
        <Text fontSize="sm" color={isEnabled ? "#000" : "#e6e6e6"}>
          Default(signal)
        </Text>
      </VStack>

      <VStack mt={5}>
        <Text fontSize="lg" color={isEnabled ? "#000" : "#e6e6e6"}>
          Vibrate
        </Text>
        <Text fontSize="sm" color={isEnabled ? "#000" : "#e6e6e6"}>
          Default
        </Text>
      </VStack> */}
      </ScrollView>
      
      </LinearGradient>
    </>
  );
};

export default Notification;

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
});
