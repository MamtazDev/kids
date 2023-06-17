import {
  CheckIcon,
  FavouriteIcon,
  HStack,
  Text,
  Icon,
  Input,
  View,
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

function SelectCurrency({ navigation }) {
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
          <Text bold mb={10} mt={2} fontSize="xl" textAlign="center"></Text>
          <RouteHeader title="Select Currency" />
          <Text bold mb={5} mt={2} fontSize="xl" textAlign="center"></Text>

          <View style={{ margin: 10 }}>
            <Input
              placeholder="Search People & Places"
              width="100%"
              borderRadius="15"
              py="3"
              px="1"
              variant="filled"
              backgroundColor="#ffffff"
              fontSize="14"
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="gray.400"
                  as={<MaterialIcons name="search" />}
                />
              }
              InputRightElement={
                <Icon
                  m="2"
                  mr="3"
                  size="6"
                  color="gray.400"
                  as={<MaterialIcons name="mic" />}
                />
              }
            />
          </View>

          <View style={styles.converted}>
            <ScrollView>
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

export default SelectCurrency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },

  wrapper: {
    // backgroundColor: "#C0D8FC",
  },
  converted: {
    padding: 20,
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
