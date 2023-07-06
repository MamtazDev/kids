import React, { useState } from 'react'
import { StyleSheet, } from 'react-native'

import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import {
    View,
    Button,
    Icon,
    Text,
    Box,
    Image,
    Modal,
    Pressable,
    Spinner,
    Heading,
    Input, VStack, FormControl, Center, NativeBaseProvider 
  } from "native-base";

import moment from "moment";
import DateRangePicker from "rn-select-date-range";



import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";


const DateRange = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const [selectedRange, setRange] = useState({});

    const [modalVisible, setModalVisible] = React.useState(false);

    
  return (
    <>
        <View mt={7} alignItems="center">
          <ExpoLinearGradient
            colors={["#CCE7FF", "#F2FAFF", "#FFFFFF"]}
            style={{ borderRadius: 20 }}
          >
            <Button
             onPress={() => {
                setModalVisible(!modalVisible);
              }}
              borderRadius="30"
              // padding={5}
              backgroundColor="transparent"
              color={"white"}
              leftIcon={
                <Icon
                  as={SimpleLineIcons}
                  name="calendar"
                  color="#6456FF"
                  size="sm"
                />
              }
              endIcon={
                <Icon
                  as={MaterialIcons}
                  name="keyboard-arrow-down"
                  color="#6456FF"
                  size="sm"
                />
              }
            >
              <Text color="#6456FF">{date.toDateString()}</Text>
            </Button>
          </ExpoLinearGradient>
        </View>

        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="center" bottom="4" size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Forgot Password?</Modal.Header>
          
          <View>
        <DateRangePicker
          onSelectDateRange={(range) => {
            setRange(range);
          }}
          blockSingleDateSelection={true}
          responseFormat="YYYY-MM-DD"
          maxDate={moment()}
          minDate={moment().subtract(365 , "days")}
          selectedDateContainerStyle={styles.selectedDateContainerStyle}
          selectedDateStyle={styles.selectedDateStyle}
        />
        <View style={styles.container}>
          <Text>first date: {selectedRange.firstDate}</Text>
          <Text>second date: {selectedRange.secondDate}</Text>
        </View>
    </View>

        </Modal.Content>
      </Modal>
      <VStack space={8} alignItems="center" style={{ display:
        'none' }} >
        <Button w="104" onPress={() => {
        setModalVisible(!modalVisible);
      }}>
          Open Modal
        </Button>
        <Text textAlign="center">
          Open modal and focus on the input element to see the effect.
        </Text>
      </VStack>
    </>
  )
}

export default DateRange

const styles = StyleSheet.create({})