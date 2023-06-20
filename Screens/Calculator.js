import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  Divider,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    let newExpression = expression;
    let newResult = result;

    if (value === "AC") {
      newExpression = "";
      newResult = "";
    } else if (value === "=") {
      try {
        newResult = eval(expression);
      } catch (error) {
        newResult = "Error";
      }
    } else {
      newExpression += value;
      newResult = "";
    }

    setExpression(newExpression);
    setResult(newResult);
  };

  const handleClearInput = () => {
    if (expression.length > 0) {
      const newExpression = expression.slice(0, -1);
      setExpression(newExpression);
    }
  };

  return (
    <>
      <>
        <View>
          <LinearGradient colors={["#e6f9ff", "#e7e6ff", "#e7e6ff", "#ffffff"]}>
          
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
                
              
              <HStack
                paddingX={2}
                display={"flex"}
                justifyContent={"flex-end"}
                height={200}
                // paddingBottom={5}
              >
              
                <VStack justifyContent={"flex-end"} alignItems={"flex-end"}>
                  <View>
                    <Text
                    Color="#e6e6e6"
                      fontSize={20}
                      // marginTop={1}
                      fontWeight={700}
                    >
                      Calculator
                    </Text>
                  </View>
                
                  <Text fontSize={30} fontWeight={600}>
                    {expression}
                  </Text>
                  <Text
                    fontSize={18}
                    fontWeight={600}
                    //   marginTop={4}
                    color={"#2E20CA"}
                    textAlign={"right"}
                  >
                    {result && `= ${result}`}
                  </Text>
                  <Pressable onPress={handleClearInput}>
                    <Image
                      source={require("../assets/icons/close.png")}
                      style={{
                        width: 27,
                        height: 16,
                        marginTop: 20,
                        marginBottom: 5,
                      }}
                      alt="image"
                    />
                  </Pressable>
                </VStack>
              </HStack>
            </ScrollView>
            <Divider></Divider>
            <View>
              <Text marginBottom={0.1}></Text>
            </View>
          </LinearGradient>
        </View>
      </>

      <View
        width={"full"}
        height={560}
        roundedTop={40}
        backgroundColor={"blue.100"}
        paddingX={5}
        // marginBottom={5}
      >
        <VStack space={6} width={"full"} marginTop={5} >
          <HStack space={5}>
            {/* First Row */}

            {/* <Box
                borderRadius="full"
                bg={"#8981FE7C"}
                width={66}
                height={66}
                alignItems="center"
                justifyContent={"center"}
              >
                <Text fontSize={30} fontWeight="bold" color="black">
                  AC
                </Text>
              </Box> */}

            <Pressable
              onPress={() => handleButtonClick("AC")}
              _pressed={{
                bg: "rgba(136, 128, 254, 0.5)",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  AC
                </Text>
              </LinearGradient>
            </Pressable>

            <Pressable
              onPress={() => handleButtonClick("(")}
              _pressed={{
                bg: "rgba(136, 128, 254, 0.5)",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  ( )
                </Text>
              </LinearGradient>
            </Pressable>

            <Pressable
              onPress={() => handleButtonClick("%")}
              _pressed={{
                bg: "rgba(136, 128, 254, 0.5)",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  %
                </Text>
              </LinearGradient>
            </Pressable>

            <Pressable
              onPress={() => handleButtonClick("÷")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={35} fontWeight="bold" color="#000000">
                  ÷
                </Text>
              </LinearGradient>
            </Pressable>
          </HStack>

          <HStack space={5}>
            {/* Second Row */}
            <Pressable
              onPress={() => handleButtonClick("1")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  1
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("2")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  2
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("3")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  3
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("×")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  ×
                </Text>
              </LinearGradient>
            </Pressable>
          </HStack>

          <HStack space={5}>
            {/* Third Row */}
            <Pressable
              onPress={() => handleButtonClick("4")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  4
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("5")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  5
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("6")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  6
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("-")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  -
                </Text>
              </LinearGradient>
            </Pressable>
          </HStack>

          <HStack space={5}>
            {/* Fourth Row */}
            <Pressable
              onPress={() => handleButtonClick("7")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  7
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("8")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  8
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("9")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  9
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("+")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  +
                </Text>
              </LinearGradient>
            </Pressable>
          </HStack>

          <HStack space={5}>
            {/* Fifth Row */}
            <Pressable
              onPress={() => handleButtonClick("+/-")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  +/-
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("0")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  0
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick(".")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  .
                </Text>
              </LinearGradient>
            </Pressable>
            <Pressable
              onPress={() => handleButtonClick("=")}
              _pressed={{
                bg: "blue.500",
                rounded: "full",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(170, 255, 251, 0.5)",
                  "rgba(78, 67, 255, 0.48508)",
                  "rgba(136, 128, 254, 0.5)",
                ]}
                style={styles.button}
              >
                <Text fontSize={30} fontWeight="bold" color="#000000">
                  =
                </Text>
              </LinearGradient>
            </Pressable>
          </HStack>
        </VStack>
      </View>
    </>
  );
};

export default Calculator;

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
  buttongrad: {
    flex: 1,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    background: "linear-gradient(#ffffff, #7C)",
  },
  button: {
    padding: 7,

    width: 65,
    height: 65,
    alignItems: "center",
    borderRadius: 50,
    borderColor: "#ffffff",
    borderWidth: 2,
  },
});
