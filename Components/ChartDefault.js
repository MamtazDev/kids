// import { StyleSheet, Text, View } from "react-native";

// import { Defs, LinearGradient, Stop } from "react-native-svg";
// import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
// import React from "react";

// import { AreaChart, Grid } from "react-native-svg-charts";
// import * as shape from "d3-shape";


// import { LineChart } from "react-native-gifted-charts"

// // const gradientColors = ["#ffffff", "#000000"]; // Define your gradient colors here
// const ChartDefault = ({ DisplayDay, analyticData }) => {
//   // const data = [50, 30, 50, 40, 95, 30, 50, 40, 80, 24, 50];
//   // const data1 = [50, 30, 24, 50, 50, 40, 95, 30, 50, 40, 80];
//   // const data2 = [30, 50, 40, 80, 24, 50, 50, 30, 50, 40, 95];

//   const [currentData, setCurrentData] = useState(latestData);

//   // const AnayticsData = analyticData
//   // DisplayDay === "Day" ? data : DisplayDay === "7 Days" ? data1 : data2;
//   // DisplayDay === "Day" ? data : DisplayDay === "7 Days" ? data1 : data2;

//   const latestData = [
//     {
//       value: 100,
//       labelComponent: () => lcomp('22 Nov'),
//       customDataPoint: dPoint,
//     },
//     {
//       value: 120,
//       hideDataPoint: true,
//     },
//     {
//       value: 210,
//       customDataPoint: dPoint,
//     },
//     {
//       value: 250,
//       hideDataPoint: true,
//     },
//     {
//       value: 320,
//       labelComponent: () => lcomp('24 Nov'),
//       customDataPoint: dPoint,
//     },
//     {
//       value: 310,
//       hideDataPoint: true,
//     },
//     {
//       value: 270,
//       customDataPoint: dPoint,
//     },
//     {
//       value: 240,
//       hideDataPoint: true,
//     },
//     {
//       value: 130,
//       labelComponent: () => lcomp('26 Nov'),
//       customDataPoint: dPoint,
//     },
//     {
//       value: 120,
//       hideDataPoint: true,
//     },
//     {
//       value: 100,
//       customDataPoint: dPoint,
//     },
//     {
//       value: 210,
//       hideDataPoint: true,
//     },
//     {
//       value: 270,
//       labelComponent: () => lcomp('28 Nov'),
//       customDataPoint: dPoint,
//     },
//     {
//       value: 240,
//       hideDataPoint: true,
//     },
//     {
//       value: 120,
//       hideDataPoint: true,
//     },
//     {
//       value: 100,
//       customDataPoint: dPoint,
//     },
//     {
//       value: 210,
//       labelComponent: () => lcomp('28 Nov'),
//       customDataPoint: dPoint,
//     },
//     {
//       value: 20,
//       hideDataPoint: true,
//     },
//     {
//       value: 100,
//       customDataPoint: dPoint,
//     },
//   ];

//   // const dPoint = () => {
//   //   return (
//   //     <View
//   //       style={{
//   //         width: 14,
//   //         height: 14,
//   //         backgroundColor: 'white',
//   //         borderWidth: 3,
//   //         borderRadius: 7,
//   //         borderColor: '#07BAD1',
//   //       }}
//   //     ></View>
//   //   );
//   // };

//   return (
//     // <AreaChart
//     //   style={{ height: 300 }}
//     //   data={AnayticsData}
//     //   contentInset={{ top: 30 }}
//     //   curve={shape.curveNatural}
//     //   svg={{ stroke: "#BDC7FE", strokeWidth: "2", fill: "#CCE7FF" }}
//     // >
//     //   {/* <Grid /> */}
//     //   <Defs>
//     //     <ExpoLinearGradient id="gradient" colors={gradientColors} />
//     //   </Defs>
//     // </AreaChart>
//     <>

//       <View
//         style={{
//           marginVertical: 100,
//           paddingVertical: 50,
//           backgroundColor: '#414141',
//         }}>
//         <LineChart
//           isAnimated
//           thickness={3}
//           color="#07BAD1"
//           maxValue={600}
//           noOfSections={3}
//           animateOnDataChange
//           animationDuration={1000}
//           onDataChangeAnimationDuration={300}
//           areaChart
//           yAxisTextStyle={{ color: 'lightgray' }}
//           data={currentData}
//           hideDataPoints
//           startFillColor={'rgb(84,219,234)'}
//           endFillColor={'rgb(84,219,234)'}
//           startOpacity={0.4}
//           endOpacity={0.1}
//           spacing={22}
//           backgroundColor="#414141"
//           rulesColor="gray"
//           rulesType="solid"
//           initialSpacing={10}
//           yAxisColor="lightgray"
//           xAxisColor="lightgray"
//         />
//       </View>

//     </>
//   );
// };

// export default ChartDefault;

// const styles = StyleSheet.create({});


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart as SecondLine } from "react-native-gifted-charts"

const ChartDefault = () => {

  const [currentData, setCurrentData] = useState(latestData);
const latestData = [
    {
      value: 100,
      labelComponent: () => lcomp('22 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 210,
      customDataPoint: dPoint,
    },
    {
      value: 250,
      hideDataPoint: true,
    },
    // {
    //   value: 320,
    //   labelComponent: () => lcomp('24 Nov'),
    //   customDataPoint: dPoint,
    // },
    {
      value: 310,
      hideDataPoint: true,
    },
    {
      value: 270,
      customDataPoint: dPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 130,
      // labelComponent: () => lcomp('26 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 210,
      hideDataPoint: true,
    },
    {
      value: 270,
      // labelComponent: () => lcomp('28 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 210,
      // labelComponent: () => lcomp('28 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 20,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
  ];
  const dPoint = () => {
    return (
      <View
        style={{
          width: 14,
          height: 14,
          backgroundColor: 'white',
          borderWidth: 3,
          borderRadius: 7,
          borderColor: '#07BAD1',
        }}
      />
    );
  };
  return (
    <View>
      <Text>ChartDefault</Text>

      <View>
      
        <SecondLine
          isAnimated
          thickness={3}
          color="#07BAD1"
          maxValue={600}
          noOfSections={3}
          animateOnDataChange
          animationDuration={1000}
          onDataChangeAnimationDuration={300}
          areaChart
          yAxisTextStyle={{color: 'lightgray'}}
          data={currentData}
          hideDataPoints
          startFillColor={'rgb(84,219,234)'}
          endFillColor={'rgb(84,219,234)'}
          startOpacity={0.4}
          endOpacity={0.1}
          spacing={22}
          backgroundColor="#414141"
          rulesColor="gray"
          rulesType="solid"
          initialSpacing={10}
          yAxisColor="lightgray"
          xAxisColor="lightgray"
        />
      
    </View>
    </View>
  )
}

export default ChartDefault

const styles = StyleSheet.create({})