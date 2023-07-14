import {
  CheckIcon,
  FavouriteIcon,
  HStack,
  Text,
  Icon,
  Input,
  View,
  Box,
} from "native-base";
import React, { useState } from "react";
import { Button, Animated, SafeAreaView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import SIngleCurrencyItem from "./SIngleCurrencyItem";
import SIngleCurrencyItemActive from "./SIngleCurrencyItemActive";
import { StyleSheet, StatusBar } from "react-native";
import { ScrollView } from "native-base";
import RouteHeader from "../Utils/RouteHeader";

import { LinearGradient } from "expo-linear-gradient";
import SIngleCurrencyList from "../Components/AllCurrencyScreen/SIngleCurrencyList";

function AddCurrency({route,  navigation }) {
  const [favCurrency, setFavCurrency] = useState([]);


  const { isBase } = route.params

  return (

    <ScrollView>
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          "rgba(170, 255, 251, 0.5)",
          "rgba(78, 67, 255, 0.87)",
          "rgba(137, 129, 254, 0.87)",
        ]}
      >
        <View style={styles.wrapper}>
          <Text bold mb={5} fontSize="xl" textAlign="center"></Text>
          <Box padding="20px">
            <RouteHeader title="Select Currency" />
          </Box>

          {/* {isBase && <Text>Dihan</Text>} */}

          <Box alignItems="center">
            {/* <Input
              w={{
                base: "65%",
                md: "35%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="search" />}
                  size={15}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Search..."
            /> */}
            <Input
              w={{
                base: "90%",
                md: "25%",
              }}
              style={{ backgroundColor: "#FFFFFF" }}
              variant="rounded"
              placeholder="Search..."
            />
          </Box>

          {/* <Text bold mb={5} mt={2} fontSize="xl" textAlign="center"></Text> */}

          <View style={{ margin: 10 }}>
            {/* <SIngleCurrencyList
              navigation={navigation}
              favCurrency={favCurrency}
              setFavCurrency={setFavCurrency}
              item={{
                name: "Canadian Dollar",
                favoirite: "false",
                Credit: "80.4",
              }}
            /> */}
          </View>

          <View style={styles.converted}>
            {/* All Favorites Currency showlist */}
            {favCurrency.length > 0 && (
              <View style={{ padding: 10 }}>
                <Text bold mb={2} fontSize="xl" style={{ margin: 5 }}>
                  Favorites
                </Text>

                <View>
                  {favCurrency.map((item, index) => (
                    <SIngleCurrencyItemActive
                      key={index}
                      isBase={isBase}
                      navigation={navigation}
                      favCurrency={favCurrency}
                      setFavCurrency={setFavCurrency}
                      item={item}
                    />
                  ))}
                </View>
              </View>
            )}
            <ScrollView>
              {/* All Currency showlist */}
              <View style={{ padding: 10 }}>
                <Text bold my={5} fontSize="xl" style={{ margin: 10 }}>
                  All Currencies
                </Text>

                <View>
                  {allData.map((item, index) => {
                    return (
                      <SIngleCurrencyItem
                        key={index}
                        isBase={isBase}
                        navigation={navigation}
                        favCurrency={favCurrency}
                        setFavCurrency={setFavCurrency}
                        item={item}
                      />
                    );
                    //  <View>
                    //     <Text onPress={() =>navigation.navigate('Convert')}>Name {item.name}</Text>

                    // </View>
                  })}
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
    </ScrollView>
  );
}

export default AddCurrency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },

  wrapper: {
    // backgroundColor: "#C0D8FC",
  },
  converted: {
    padding: 10,
    marginTop: 30,
    borderColor: "#000000",
    backgroundColor: "#eeeefd",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,

    height: "100%",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  scrollView: {
    // backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
});

const allData = [
  {
    name: "Bangladesh",
    currencyName: "BDT",
    favoirite: "false",
    Credit: "80.4",
    image: "https://plus.unsplash.com/premium_photo-1675865393754-3c72283604ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  },
  {
    name: "Japan",
    currencyName: "YEN",
    favoirite: "false",
    Credit: "80.4",
    image: "https://plus.unsplash.com/premium_photo-1675865394925-8ccfb93e2dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  },
  {
    name: "America",
    currencyName: "USD",
    favoirite: "false",
    Credit: "80.4",
    image: "https://images.unsplash.com/photo-1590638302397-73c58ddba466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "India",
    currencyName: "INR",
    favoirite: "false",
    Credit: "80.4",
    image: "https://plus.unsplash.com/premium_photo-1674591172888-1184c4170a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "UK",
    currencyName: "GBP",
    favoirite: "false",
    Credit: "80.4",
    image: "https://plus.unsplash.com/premium_photo-1674591172569-834e3c928c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },

];
