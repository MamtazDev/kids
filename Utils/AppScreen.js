import React from "react";
import { Box } from "native-base";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
const AppScreen = ({ children }) => {
  return (

    <ScrollView>

      <Box flex="1" style={styles.container} safeArea>
        {children}
      </Box>
    </ScrollView>

    // <Box flex="1" safeArea>
    //   {children}
    // </Box>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 50,
  },
});
