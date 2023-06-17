import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import DashboardHeader from "../Components/Dashboard/Header";
import Summery from "../Components/Dashboard/Summery";
import CurrencysData from "../Components/Dashboard/CurrencysData";
import Cards from "../Components/Dashboard/Cards";
import { ScrollView } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const Dashboard = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={[
          "#AAFFFBE5",
          "#4E43FFDF",
          "#8981FEDF",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ]}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            {/* <Text>Dashboard</Text> */}
            <DashboardHeader />

            {/* View for weeklu summery */}
            <Summery />
          </View>
          <Cards />
          <View style={styles.wrapper}>
            <CurrencysData />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    //   backgroundColor: COLORS.purple,
  },
  container: {
    flex: 1,
  },
});
