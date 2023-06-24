import React from "react";
import { StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  HStack,
  Icon,
  IconButton,
  Text,
  View,
} from "native-base";

import { LineChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

const CurrencysData = () => {
  return (
    <View>
      <Text bold fontSize="xl">
        Currencies Market Data
      </Text>

      {/* all data */}
      {[1, 2].map((item, index) => (
        <HStack
        key={index}
          space={3}
          mt={5}
          justifyContent="space-between"
          backgroundColor="#ffffff"
          padding={3}
          borderRadius={10}
          style={{ elevation: 1 }}
          
          shadowColor="#050505"
        >
          <View display={"flex"} flexDirection={"row"}>
            <Avatar
              bg="green.500"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            ></Avatar>
            <View style={styles.header} ml={3}>
              <Text bold fontSize="xl">
                US Dollar
              </Text>
              <Text fontSize="sm">USD</Text>
            </View>
          </View>
          <LineChart
            style={{ marginTop: 12, height: 12, width: 55 }}
            data={[40, 71, 25, 43, -23, 14, 35, -30, -60]}
            svg={{
              stroke: index % 2 === 0 ? "#C80000" : "#00BF58",
              strokeWidth: "1",
            }}
            //   animate={true}
            //   animationDuration={5}
            curve={shape.curveNatural}
          ></LineChart>
          <View style={styles.header}>
            <Text bold fontSize="xl">
              $1.3
            </Text>
            <Text fontSize="sm" color="#00BF58">
              - 0.1%
            </Text>
          </View>
          {/* <Ionicons name="notifications" size={24} color="black" /> */}
        </HStack>
      ))}
    </View>
  );
};

export default CurrencysData;

const styles = StyleSheet.create({});
