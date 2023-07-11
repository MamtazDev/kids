import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppScreen from "../Utils/AppScreen";
import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Modal,
  Pressable,
  VStack,
} from "native-base";

import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { useState } from "react";
import { primaryGrad } from "../Utils/GradientColor";

import { LinearGradient } from "expo-linear-gradient";

const Profile = ({ navigation }) => {
  const [logoutModal, setLogoutModal] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={primaryGrad}
        style={{
          // paddingTop: 50,
        }}
      >
        <VStack alignItems="center" marginTop="20%">
          <Text
            style={{ fontWeight: "bold", fontSize: 18, marginBottom: 25 }}
            mb={3}
            textAlign="center"
          >
            Profile
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
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

        {/* -------------itemss ------------- */}

        <Pressable  onPress={() => navigation.navigate("Personal")}>
          <HStack
            space={3}
            mt={10}
            mx="4%"
            justifyContent="space-between"
            justifyItems={"center"}
            backgroundColor="white"
            paddingX={3}
            paddingY={6}
            borderRadius={10}
            style={{ elevation: 1 }}
          >
            <View display={"flex"} flexDirection={"row"} justifyItems="center">
              <Image
                source={require("../assets/icons/user.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
                alt="logo"
              />
              <Text style={styles.title}>Personal Information</Text>
            </View>

            <Image
              source={require("../assets/icons/arrowr.png")}
              style={{
                width: 9,
                height: 16,
              }}
              alt="logo"
            />
          </HStack>
        </Pressable >

        <Pressable  onPress={() => navigation.navigate("Preference")}>
          <HStack
            space={3}
            mt={5}
            mx="4%"
            justifyContent="space-between"
            justifyItems={"center"}
            backgroundColor="white"
            paddingX={3}
            paddingY={6}
            style={{ elevation: 1 }}
            borderRadius={10}
          >
            <View display={"flex"} flexDirection={"row"} justifyItems="center">
              <Image
                source={require("../assets/icons/setting.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
                alt="logo"
              />
              <Text style={styles.title}>Preference</Text>
            </View>

            <Image
              source={require("../assets/icons/arrowr.png")}
              style={{
                width: 9,
                height: 16,
              }}
              alt="logo"
            />
          </HStack>
        </Pressable >

        <Pressable onPress={() => setLogoutModal(true)}>
          <HStack
            onPress={() => setLogoutModal(true)}
            space={3}
            mt={5}
            mx="4%"
            justifyContent="space-between"
            justifyItems={"center"}
            backgroundColor="white"
            paddingX={3}
            paddingY={6}
            borderRadius={10}
            style={{ elevation: 1 }}
          >
            <View display={"flex"} flexDirection={"row"} justifyItems="center">
              <Image
                source={require("../assets/icons/logout.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
                alt="logo"
              />
              <Text style={styles.title}>Logout</Text>
            </View>

            <Image
              source={require("../assets/icons/arrowr.png")}
              style={{
                width: 9,
                height: 16,
              }}
              alt="logo"
            />
          </HStack>
        </Pressable>

        {/* --------------logout modal---------------- */}
        <Modal
          isOpen={logoutModal}
          onClose={() => setLogoutModal(false)}
          px={8}
        >
          <Modal.Content width={"full"} maxWidth="400px">
            <Modal.Body px={6}>
              <Text
                style={{ fontSize: 20, color: "#2E20CA", fontWeight: "bold" }}
              >
                Logout
              </Text>
              <Text fontWeight={"bold"} fontSize={20} marginTop={10}>
                Do you want to exit?
              </Text>

              <HStack
                display={"flex"}
                justifyContent={"flex-end"}
                marginTop={10}
              >
                <Text
                  onPress={() => setLogoutModal(false)}
                  style={{ fontSize: 20, color: "#2E20CA", fontWeight: "bold" }}
                >
                  No
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#2E20CA",
                      fontWeight: "bold",
                      marginLeft: 40,
                    }}
                  >
                    Yes
                  </Text>
                </TouchableOpacity>
              </HStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </LinearGradient>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header_title: {
    fontSize: 20,
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
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222222",
    marginLeft: 20,
  },
  container: {
    height: "100%",
    backgroundColor: "#fbfbfb",
    marginBottom:90,
  },
});
