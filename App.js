import * as React from "react";
import { NativeBaseProvider, Text } from "native-base";

import { NavigationContainer } from '@react-navigation/native';

import MyStack from "./Screens/Home";

export default function App() {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>

    </NativeBaseProvider>
  );
}
