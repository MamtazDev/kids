import * as React from "react";
import { NativeBaseProvider, Text, View } from "native-base";

import { NavigationContainer } from '@react-navigation/native';

import MyStack from "./Screens/Home";

import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
