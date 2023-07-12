import React, { useState } from 'react'
import { StyleSheet, } from 'react-native'

import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import {
    View,
    Button,
    Icon,
    Text,
    Modal,
  } from "native-base";

import moment from "moment";
import DateRangePicker from "rn-select-date-range";



import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";


const DateRange = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const [selectedRange, setRange] = useState({});

    const [modalVisible, setModalVisible] = React.useState(false);

    
    const options = {
      day: "2-digit",
      weekday: "short",
      month: "short",
      year: "numeric"
    };

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
              <Text color="#6456FF"> {new Date(selectedRange.firstDate).toDateString("en-US", options)}  - {new Date(selectedRange.secondDate).toDateString("en-US", options)}  </Text>
            </Button>
          </ExpoLinearGradient>
        </View>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="center" bottom="4" size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Select Date Range</Modal.Header>
          <Modal.Body>
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
        </View>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setModalVisible(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setModalVisible(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

       
     
    </>
  )
}

export default DateRange

const styles = StyleSheet.create({})