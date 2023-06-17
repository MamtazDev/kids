import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../Utils/AppScreen";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Input,
  Modal,
  Popover,
  ScrollView,
  Stack,
  VStack,
  FormControl,
  Pressable,
  Icon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../Utils/Constant";
import RouteHeader from "../../Utils/RouteHeader";

import { LinearGradient } from "expo-linear-gradient";

const Personal = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {/* <HStack mt={5} justifyContent="space-between">
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Feather
            name="x"
            style={{ fontSize: 20, fontWeight: "bold", color: "#222222" }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#222222" }}>
          Personal Info
        </Text>
        <Text></Text>
      </HStack> */}

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            <Text style={styles.text1}> Discard changes</Text>
          </Modal.Header>
          <Modal.Body>
            {/* <Center> */}
            <Text>Are you sure you want to discard the changes you made?</Text>
            {/* </Center> */}
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                No thanks
              </Button>
              <Button
                colorScheme="danger"
                onPress={() => {
                  setShowModal(false);
                  navigation.goBack();
                }}
              >
                Discard
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <LinearGradient
        // Button Linear Gradient
        colors={[
          // "rgba(170, 255, 251, 0.5)",
          "rgba(78, 67, 255, 0.87)",
          "rgba(137, 129, 254, 0.87)",
          "#ffffff",
        ]}
      >
        <VStack alignItems="center" pt={5}>
          <Box padding="20px" style={{ width: "100%" }}>
            <RouteHeader title="Personal Information" />
          </Box>

          <TouchableOpacity>
            <Popover
              trigger={(triggerProps) => {
                return (
                  <Button {...triggerProps} m={0} p={0} borderRadius={100}>
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
                  </Button>
                );
              }}
            >
              <Popover.Content accessibilityLabel="Delete Customerd" w="80">
                <Popover.Arrow />
                <Popover.CloseButton />
                <Popover.Header>Change</Popover.Header>
                <Popover.Body>
                  <Center>
                    <Text style={styles.text}>Choose from Photos</Text>
                    <Text style={styles.text}>Open Camera</Text>
                  </Center>
                </Popover.Body>
              </Popover.Content>
            </Popover>
          </TouchableOpacity>

          <Box px={5} alignItems="center">
            <Text style={styles.header_title}>Dihan abir</Text>
            <Text style={styles.header_email}>nahid.muradabir@gmail.com</Text>
          </Box>
        </VStack>
      </LinearGradient>
      <ScrollView showsHorizontalScrollIndicator={false} mt={5}>
        <Box style={{ marginHorizontal: 20 }}>
          <FormControl backgroundColor={"white"} padding={3} rounded={10}>
            <FormControl.Label>Name</FormControl.Label>
            <Input
              variant="unstyled"
              p={0}
              color="black"
              fontSize={20}
              // placeholderTextColor="black"
              style={{ fontWeight: "semibold" }}
              placeholder="John"
              value={name}
              onChangeText={setName}
            />
          </FormControl>

          <FormControl
            marginTop={4}
            backgroundColor={"white"}
            padding={3}
            rounded={10}
          >
            <FormControl.Label>Email</FormControl.Label>
            <Input
              variant="unstyled"
              p={0}
              color="black"
              fontSize={20}
              // placeholderTextColor="black"
              style={{ fontWeight: "semibold" }}
              placeholder="name@gmail.com"
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
            />
          </FormControl>

          <FormControl
            marginTop={4}
            backgroundColor={"white"}
            padding={3}
            rounded={10}
          >
            <FormControl.Label>Password</FormControl.Label>
            <Input
              variant="unstyled"
              p={0}
              color="black"
              fontSize={20}
              // placeholderTextColor="black"
              style={{ fontWeight: "semibold" }}
              placeholder="*********"
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
            />
          </FormControl>

          {/* <TouchableOpacity onPress={() => navigation.navigate("Signin")}> */}
          <TouchableOpacity>
            <Button
              // onPress={() => navigation.navigate("Signin")}
              style={[styles.primary_btn]}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                }}
              >
                Edit Information
              </Text>
            </Button>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </>
  );
};

export default Personal;

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
    borderRadius: 15,
    marginTop: 40,
    height: 50,
    borderColor: "#968ef4",
    borderWidth: 2,
    // padding: 10,
  },
});
