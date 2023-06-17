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

function AddCurrency({ navigation }) {
  const [favCurrency, setFavCurrency] = useState([]);

  return (
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
    name: "ABangladesh",
    favoirite: "false",
    Credit: "80.4",
    image: "https://www.worldometers.info//img/flags/small/tn_bg-flag.gif",
  },
  {
    name: "Afghanistan",
    favoirite: "false",
    Credit: "80.4",
    image: "https://www.worldometers.info//img/flags/small/tn_af-flag.gif",
  },
  {
    name: "Albania",
    favoirite: "false",
    Credit: "80.4",
    image: "https://www.worldometers.info//img/flags/small/tn_al-flag.gif",
  },
  {
    name: "Algeria",
    favoirite: "false",
    Credit: "80.4",
    image: "https://www.worldometers.info//img/flags/small/tn_ag-flag.gif",
  },

  {
    name: "Belarus",
    favoirite: "false",
    Credit: "80.4",
    image: "https://www.worldometers.info//img/flags/small/tn_bo-flag.gif",
  },
  {
    name: "Argentina Peso",
    favoirite: "false",
    Credit: "80.4",
    image: "https://www.worldometers.info//img/flags/small/tn_af-flag.gif",
  },
];
