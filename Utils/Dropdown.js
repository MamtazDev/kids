import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Menu,
  HamburgerIcon,
  Box,
  Pressable,
  Center,
  NativeBaseProvider,
} from "native-base";

const Dropdown = () => {
  return (
    <Box h="80%" w="90%" alignItems="flex-start">
      <Menu
        shadow={2}
        w="190"
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>
          );
        }}
      >
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
