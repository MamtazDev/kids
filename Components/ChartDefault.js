import { StyleSheet, Text, View } from "react-native";

import { Defs, LinearGradient, Stop } from "react-native-svg";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import React from "react";

import { AreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";

const gradientColors = ["#ffffff", "#000000"]; // Define your gradient colors here
const ChartDefault = ({ DisplayDay, analyticData }) => {
  const data = [50, 30, 50, 40, 95, 30, 50, 40, 80, 24, 50];
  const data1 = [50, 30, 24, 50, 50, 40, 95, 30, 50, 40, 80];
  const data2 = [30, 50, 40, 80, 24, 50, 50, 30, 50, 40, 95];

  const AnayticsData = analyticData
    // DisplayDay === "Day" ? data : DisplayDay === "7 Days" ? data1 : data2;
    // DisplayDay === "Day" ? data : DisplayDay === "7 Days" ? data1 : data2;

  return (
    <AreaChart
      style={{ height: 300 }}
      data={AnayticsData}
      contentInset={{ top: 30 }}
      curve={shape.curveNatural}
      svg={{ stroke: "#BDC7FE", strokeWidth: "2", fill: "#CCE7FF" }}
    >
      {/* <Grid /> */}
      <Defs>
        <ExpoLinearGradient id="gradient" colors={gradientColors} />
      </Defs>
    </AreaChart>
  );
};

export default ChartDefault;

const styles = StyleSheet.create({});
