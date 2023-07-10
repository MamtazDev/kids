import {
  CheckIcon,
  FavouriteIcon,
  HStack,
  Text,
  Icon,
  Input,
  View,
  Box,
  Button,
  IconButton,
  FlatList,
} from "native-base";
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
// import { ScrollView } from "native-base";
import RouteHeader from "../Utils/RouteHeader";

import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import SIngleCurrencyList from "../Components/AllCurrencyScreen/SIngleCurrencyList";
import COLORS from "../Utils/Constant";
import { primaryGrad } from "../Utils/GradientColor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BaseCurrency from "../Components/AllCurrencyScreen/BaseCurrency";
import { useDispatch, useSelector } from "react-redux";
import { setBaseCurr, setColor, setTargettedCurr } from "../store/colorSlice";


function AllCurrency({ navigation }) {
  const [AllCurrency, setAllCurrency] = useState([1, 2]);

  const [BaseCur, setBaseCurrency] = useState(null);
  const [TargetedCurrenc00y, setTargetedCurrency] = useState([]);

  const addMoreHandler = () => {
    const listLength = AllCurrency.length;

    setAllCurrency([...AllCurrency, listLength + 1]);
  };


  const {base, targettedCur} = useSelector((state) => state.color); //reading the state 
  const dispatch = useDispatch();

  console.log("color", base)
  console.log("targettedCur", targettedCur)

  return (
    <ScrollView style={{marginBottom:100,}}>
      
      {/* //Dispatch action */}

      <LinearGradient colors={primaryGrad}>
        <View style={styles.wrapper}>
          <Text bold mb={3} fontSize="xl" textAlign="center"></Text>
          {/* <RouteHeader title="Convert Currency" /> */}
          <Text bold mb={3} fontSize="xl" textAlign="center">
            Convert Currency
          </Text>
          <Box padding="3%">
            <BaseCurrency navigation={navigation} />
          </Box>

          {/* //Dispatch action */}
      <TouchableOpacity
        onPress={() => dispatch(setBaseCurr("Bangladesh"))} //Dispatch action

      >
        <Text style={{ fontSize: 20 }}>Generate Random Color</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(setTargettedCurr("Bangladesh"))} //Dispatch action

      >
        <Text style={{ fontSize: 20 }}>Generate setTargettedCurr</Text>
      </TouchableOpacity>

          {/* <Text mt={2}></Text> */}

          <View style={{ margin: 10 }}></View>

          <View style={styles.converted}>
            <ScrollView >
              {/* All Favorites Currency showlist */}
              {AllCurrency.length > 0 &&
                AllCurrency.map((item, index) => (
                  <SIngleCurrencyList key={index} navigation={navigation} />
                ))}

              <Box alignItems="center">
                <Box width={180} justifyContent="center">
                  <Button
                    onPress={() => addMoreHandler()}
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
                          fontWeight: "bold",
                          marginLeft: 15,
                          // backgroundColor: "#e6e6e6",
                        }}
                      >
                        Add More
                      </Text>
                    </View>
                  </Button>
                </Box>
              </Box>
            </ScrollView>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

export default AllCurrency;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },

  wrapper: {
    // backgroundColor: "#C0D8FC",
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
  converted: {
    padding: "3%",
    borderColor: "#000000",
    backgroundColor: "#eeeefd",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,

    height: "100%",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
});

const allData = [
  {
    name: "Euro",
    favoirite: "false",
    Credit: "80.4",
  },
  {
    name: "Bangladeshi Taka",
    favoirite: "false",
    Credit: "80.4",
  },
  {
    name: "Canadian Dollar",
    favoirite: "false",
    Credit: "80.4",
  },
  {
    name: "Australian Dollar",
    favoirite: "false",
    Credit: "80.4",
  },
  {
    name: "Argentina Peso",
    favoirite: "false",
    Credit: "80.4",
  },
  {
    name: "US Dollar",
    favoirite: "false",
    Credit: "80.4",
  },
];
