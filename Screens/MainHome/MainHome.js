import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { ScrollView } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import DashboardHeader from "../../Components/Dashboard/Header";
import Summery from "../../Components/Dashboard/Summery";
import CurrencysData from "../../Components/Dashboard/CurrencysData";
import Cards from "../../Components/Dashboard/Cards";
import MainHeader from "./MainHeader";

const MainHome = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >

     <LinearGradient
        // Button Linear Gradient
        colors={[
          "#AAFFFBE5",
          "#D1CEFF",
          "#82AEFD",
          "#8981FEDF",
          "#E4F0FF",
          "#8981FEDF",
          "#F5F5F5",
        ]}
      >
        <View style={styles.container}>
          <View style={styles.wrapper}>
            {/* <Text>Dashboard</Text> */}
            {/* <MainHeader /> */}
            {/* View for weeklu summery */}
            <Summery />
          </View>
          <Cards />
          <View style={styles.wrapperBottom}>
            <CurrencysData />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>


  );
};

export default MainHome;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    marginBottom: 9,
    //   backgroundColor: COLORS.purple,
  },
  wrapperBottom: {
    padding: 20,
    marginBottom: 90,
    //   backgroundColor: COLORS.purple,
  },
  container: {
    flex: 1,
  },
});
