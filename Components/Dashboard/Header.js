import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Avatar,
  Modal,
  HStack,
  Text,
  IconButton,
  Flex,
  Button,
  ScrollView,
  Image,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Notification from "./Notification";
import { useState } from "react";

const DashboardHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View>
      <HStack
        space={3}
        mt={5}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Flex direction="row" alignItems={"center"}>
          <Avatar
            bg="green.500"
            source={require("../../assets/icons/man.png")}
          ></Avatar>

          <Text bold fontSize="2xl" marginLeft={5}>
            Alex Rutuynos
          </Text>
        </Flex>

        <IconButton
          onPress={() => setIsModalOpen(true)}
          backgroundColor={"#232631CC"}
          style={{ borderRadius: 10 }}
          variant="solid"
          _icon={{
            as: Ionicons,
            name: "notifications-outline",
          }}
        />
      </HStack>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} px={6}>
        <Modal.Content width={"full"} maxWidth="400px" height={"full"}>
          <Modal.Header>Notification</Modal.Header>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Modal.Body>
              <HStack
                space={3}
                mt={5}
                justifyContent="space-between"
                backgroundColor="white"
                padding={3}
                borderRadius={10}
              >
                <View
                  display={"flex"}
                  flexDirection={"row"}
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
                  <View marginLeft={3}>
                    <Text bold fontSize="xl">
                      USD is increase
                    </Text>
                    <Text fontSize="sm">Date: 12-02-20223</Text>
                  </View>
                </View>
              </HStack>

              <HStack
                space={3}
                mt={5}
                justifyContent="space-between"
                backgroundColor="white"
                padding={3}
                borderRadius={10}
              >
                <View
                  display={"flex"}
                  flexDirection={"row"}
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
                  <View marginLeft={3}>
                    <Text bold fontSize="xl">
                      USD is increase
                    </Text>
                    <Text fontSize="sm">Date: 12-02-20223</Text>
                  </View>
                </View>
              </HStack>

              <HStack
                space={3}
                mt={5}
                justifyContent="space-between"
                backgroundColor="white"
                padding={3}
                borderRadius={10}
              >
                <View
                  display={"flex"}
                  flexDirection={"row"}
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
                  <View marginLeft={3}>
                    <Text bold fontSize="xl">
                      USD is increase
                    </Text>
                    <Text fontSize="sm">Date: 12-02-20223</Text>
                  </View>
                </View>
              </HStack>

              <HStack
                space={3}
                mt={5}
                justifyContent="space-between"
                backgroundColor="white"
                padding={3}
                borderRadius={10}
              >
                <View
                  display={"flex"}
                  flexDirection={"row"}
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
                  <View marginLeft={3}>
                    <Text bold fontSize="xl">
                      USD is increase
                    </Text>
                    <Text fontSize="sm">Date: 12-02-20223</Text>
                  </View>
                </View>
              </HStack>
              <HStack
                space={3}
                mt={5}
                justifyContent="space-between"
                backgroundColor="white"
                padding={3}
                borderRadius={10}
              >
                <View
                  display={"flex"}
                  flexDirection={"row"}
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
                  <View marginLeft={3}>
                    <Text bold fontSize="xl">
                      USD is increase
                    </Text>
                    <Text fontSize="sm">Date: 12-02-20223</Text>
                  </View>
                </View>
              </HStack>

              <HStack
                space={3}
                mt={5}
                justifyContent="space-between"
                backgroundColor="white"
                padding={3}
                borderRadius={10}
              >
                <View
                  display={"flex"}
                  flexDirection={"row"}
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
                  <View marginLeft={3}>
                    <Text bold fontSize="xl">
                      USD is increase
                    </Text>
                    <Text fontSize="sm">Date: 12-02-20223</Text>
                  </View>
                </View>
              </HStack>

              <HStack
                space={3}
                mt={5}
                justifyContent="space-between"
                backgroundColor="white"
                padding={3}
                borderRadius={10}
              >
                <View
                  display={"flex"}
                  flexDirection={"row"}
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
                  <View marginLeft={3}>
                    <Text bold fontSize="xl">
                      USD is increase
                    </Text>
                    <Text fontSize="sm">Date: 12-02-20223</Text>
                  </View>
                </View>
              </HStack>

              <HStack
                space={3}
                mt={5}
                justifyContent="space-between"
                backgroundColor="white"
                padding={3}
                borderRadius={10}
              >
                <View
                  display={"flex"}
                  flexDirection={"row"}
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
                  <View marginLeft={3}>
                    <Text bold fontSize="xl">
                      USD is increase
                    </Text>
                    <Text fontSize="sm">Date: 12-02-20223</Text>
                  </View>
                </View>
              </HStack>

              <HStack
                space={3}
                mt={5}
                justifyContent="space-between"
                backgroundColor="white"
                padding={3}
                borderRadius={10}
              >
                <View
                  display={"flex"}
                  flexDirection={"row"}
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
                  <View marginLeft={3}>
                    <Text bold fontSize="xl">
                      USD is increase
                    </Text>
                    <Text fontSize="sm">Date: 12-02-20223</Text>
                  </View>
                </View>
              </HStack>
            </Modal.Body>
          </ScrollView>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#666",
    fontSize: "12px",
  },
});
