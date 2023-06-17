import React from "react";
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
} from "native-base";
import COLORS from "../../Utils/Constant";
import { Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

import { LinearGradient } from "expo-linear-gradient";
import { chartData } from "../../Utils/ChartData";

const Cards = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      marginBottom={5}
    >
      {chartData.map((item, index) => (
        <Box
          key={index}
          bg="white"
          rounded="2xl"
          width={260}
          height={280}
          mr={5}
          overflow="hidden"
        >
          <Box
            // flex={8}
            // backgroundColor="#2E20CA"
            // alignItems={"center"}
            paddingTop={4}
          >
            <LinearGradient
              style={{
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                padding: 10,
              }}
              // Button Linear Gradient
              colors={["#6456FF", "#2E20CA"]}
            >
              <Button
                width={98}
                height={38}
                backgroundColor="#232631B8"
                text
                mt={2}
                borderRadius={30}
                p={1}
                px={2}
                variant="subtle"
                endIcon={
                  <Icon
                    as={Ionicons}
                    name="cloud-download-outline"
                    size="sm"
                    color="white"
                  />
                }
              >
                <Text color="white">{item.value.toFixed(3)}</Text>
              </Button>

              <LineChart
                style={{ height: 120, width: 250, padding: 10 }}
                data={item.data}
                svg={{ stroke: "#ffffff", strokeWidth: "3" }}
                //   animate={true}
                //   animationDuration={5}
                curve={shape.curveNatural}
              ></LineChart>
            </LinearGradient>
          </Box>

          <Box flex={4}>
            <LinearGradient
              style={{
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}
              // Button Linear Gradient
              colors={["rgba(35, 38, 49, 0.72)", "#232631", "#232631"]}
            >
              <Flex
                direction="row"
                justifyContent="space-around"
                paddingTop={4}
                paddingBottom={4}
                // borderRadius={10}
              >
                <VStack space={1}>
                  <Text bold fontSize="xl" color={"white"}>
                    {item.name}
                  </Text>
                  <Text fontSize="sm" color={"white"}>
                    {item.value.toFixed(2)}
                  </Text>
                </VStack>
                <Button
                  width={98}
                  height={38}
                  backgroundColor="rgba(255, 255, 255, 0.15)"
                  text
                  mt={2}
                  borderRadius={30}
                  p={1}
                  px={2}
                  variant="subtle"
                >
                  <Text color="white">{item.currency}</Text>
                </Button>
              </Flex>
            </LinearGradient>
          </Box>
        </Box>
      ))}
    </ScrollView>
  );
};

export default Cards;
