import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Box, Center, Text } from "native-base";
import React, { useState } from "react";
import AppScreen from "../../Utils/AppScreen";
import RouteHeader from "../../Utils/RouteHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import { HStack, Switch, VStack, Image } from "native-base";
import COLORS from "../../Utils/Constant";

import { LinearGradient } from "expo-linear-gradient";

const Preference = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
      {/* <RouteHeader title="Preference" /> */}
      <LinearGradient
        // Button Linear Gradient
        colors={[
          // "rgba(170, 255, 251, 0.5)",
          "rgba(78, 67, 255, 0.87)",
          "rgba(137, 129, 254, 0.87)",
          // "#ffffff",
          "#e6e6e6",
        ]}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Security")}>
          <VStack alignItems="center" marginTop="10%" paddingBottom="10%">
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Image
                borderRadius={100}
                style={styles.image}
                resizeMode={"cover"}
                source={{
                  uri: "https://nahid-murad-abir.netlify.app/static/media/Dihan%20propic%20.c92ebf07.jpg",
                  width: 64,
                  height: 64,
                  borderRadius: 10,

                  borderRadius: 150 / 2,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red",
                  padding: 10,

                  // blurRadius: 64,
                }}
                alt="image"
              />
            </TouchableOpacity>
            <Box px={5} alignItems="center">
              <Text style={styles.header_title}>Dihan abir</Text>
              <Text style={styles.header_email}>nahid.muradabir@gmai.com</Text>
            </Box>
          </VStack>
        </TouchableOpacity>
      </LinearGradient>
      <VStack space={4} marginTop={10} marginX={5}>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Text fontSize="md" fontWeight="bold">
            NOTIFICATION
          </Text>
          <HStack
            space={3}
            mt={2}
            justifyContent="space-between"
            justifyItems={"center"}
            backgroundColor="white"
            paddingX={3}
            paddingY={6}
            borderRadius={10}
          >
            <Text style={styles.title}>Configure Notification</Text>

            <Image
              source={require("../../assets/icons/arrowr.png")}
              style={{
                width: 9,
                height: 16,
                marginRight: 15,
              }}
              alt="logo"
            />
          </HStack>
        </TouchableOpacity>

        <View>
          <Text fontSize="lg" fontWeight="bold">
            FOR CURRENCY RATE
          </Text>
          <HStack
            space={3}
            mt={2}
            justifyContent="space-between"
            justifyItems={"center"}
            backgroundColor="white"
            paddingX={3}
            paddingY={3}
            borderRadius={10}
          >
            <Text marginTop={4} style={styles.title}>
              Increase Decimal Places
            </Text>

            <Switch
              trackColor={{ false: "#666", true: "#6456FF" }}
              thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </HStack>

          <HStack
            space={3}
            mt={6}
            justifyContent="space-between"
            justifyItems={"center"}
            backgroundColor="white"
            paddingX={3}
            paddingY={3}
            borderRadius={10}
          >
            <Text marginTop={4} style={styles.title}>
              Separate Number with Cimmas
            </Text>

            <Switch
              trackColor={{ false: "#666", true: "#6456FF" }}
              thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </HStack>
        </View>

        <View>
          <Text fontSize="lg" fontWeight="bold">
            WIDGETS
          </Text>
          <HStack
            space={3}
            mt={2}
            justifyContent="space-between"
            justifyItems={"center"}
            backgroundColor="white"
            paddingX={3}
            paddingY={3}
            borderRadius={10}
          >
            <Text marginTop={4} style={styles.title}>
              Separate Number with Cimmas
            </Text>

            <Switch
              trackColor={{ false: "#666", true: "#6456FF" }}
              thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </HStack>
        </View>
      </VStack>

      {/* <VStack>
          <Text fontSize="lg" fontWeight="bold">
            Notification
          </Text>
          <Text fontSize="sm" color="#666">
            Configure Notification
          </Text>
        </VStack>
        <Switch
          trackColor={{ false: "#666", true: "#38E5C6" }}
          thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}

      {/* <HStack mt={5} alignItems="center" justifyContent="space-between">
          <VStack>
            <Text fontSize="lg" fontWeight="bold">
              FOR CURRENCY RATE
            </Text>
            <Text fontSize="sm" color="#666">
              Increase Decimal Places
            </Text>
          </VStack>
          <Switch
            trackColor={{ false: "#666", true: "#38E5C6" }}
            thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </HStack> */}

      {/* <HStack mt={5} alignItems="center" justifyContent="space-between">
        <VStack>
          <TouchableOpacity
            onPress={() => isEnabled && navigation.navigate("Fingerprint")}
          >
            <Text color="#9D9D9D" fontSize="lg" fontWeight="bold">
              Fingerprint {isEnabled && "click"}
            </Text>
          </TouchableOpacity>
          <Text fontSize="sm" color="#9D9D9D">
            Allow to use fingerprint to unlock the app
          </Text>
        </VStack>
        <Switch
          trackColor={{ false: "#666", true: "#38E5C6" }}
          thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </HStack> */}
    </View>
  );
};

export default Preference;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    borderColor: "#38E5C6",
    borderWidth: 1,
    width: "80%",
    marginTop: 5,
    borderRadius: 4,
    textAlign: "center",
    padding: 4,
    color: "#38E5C6",
    // backgroundColor
  },

  header_title: {
    fontSize: 20,
    marginTop: 6,
    fontWeight: "bold",
    color: "#2E20CA",
  },
  header_margin: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 40,
  },
  header_email: {
    color: "#9D9D9D",
  },
  text1: {
    color: "#38E5C6",
    fontSize: 16,
    fontWeight: "bold",
  },
  primary_btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginTop: 40,
    height: 50,
  },
  title: {
    fontSize: 17,
    // fontWeight: "bold",
    color: "#222222",
    marginLeft: 5,
  },
});
