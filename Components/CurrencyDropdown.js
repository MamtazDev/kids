import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, Input, Menu, Pressable, Text, View } from "native-base";
import {Dimensions} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

const CurrencyDropdown = ({ ValueIsNeeded }) => {
  const windowWidth = Dimensions.get('window').width - 40;
  return (
    <View marginX={5} style={{ width:"20%"}}>
      {/* <Text>CurrencyDropdown</Text> */}

      <Box ml={0} alignItems="flex-start">
        <Menu
          shadow={2}
          w="120"
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                <HStack
                  backgroundColor="#ffffff"
                  width={`${windowWidth}px`}
                  //   paddingright={20}
                  paddingX={2}
                  paddingY={2}
                  justifyContent="space-between"
                  alignItems="center"
                  //   marginY={5}
                  borderRadius={15}
                >
                  <HStack>
                    <Text fontSize={25} marginLeft={2} fontWeight="bold">
                      USD 
                    </Text>
                    <MaterialIcons
                      name="arrow-drop-down"
                      size={40}
                      color="#000000"
                    />
                  </HStack>
                  {ValueIsNeeded && (
                    <Input
                      type="number"
                      width={10}
                      fontSize={25}
                      color="#000000"
                      variant="underlined"
                      placeholder="1"
                    />
                  )}
                </HStack>
              </Pressable>
            );
          }}
        >
          <Menu.Item>USD</Menu.Item>
          <Menu.Item>EUR</Menu.Item>
          <Menu.Item>JPY</Menu.Item>
          <Menu.Item>GBP</Menu.Item>
          <Menu.Item>CAD</Menu.Item>
          <Menu.Item>SEK</Menu.Item>
          <Menu.Item>MXN</Menu.Item>
          <Menu.Item>NOK</Menu.Item>
        </Menu>
      </Box>
    </View>
  );
};

export default CurrencyDropdown;

const styles = StyleSheet.create({});
