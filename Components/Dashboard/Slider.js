import React from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
 
import Swiper from 'react-native-swiper'
 


const Slider = () => {
  return (
    <View>
      <Text>Slider New</Text>

      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
          <Text style={styles.text}>Beautiful</Text>
          <Text style={styles.text}>Beautiful</Text>
          <Text style={styles.text}>Beautiful</Text>
          <Text style={styles.text}>Beautiful</Text>
          <Text style={styles.text}>Beautiful</Text>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
          <Text style={styles.text}>And simple</Text>
          <Text style={styles.text}>And simple</Text>
          <Text style={styles.text}>And simple</Text>
          <Text style={styles.text}>And simple</Text>
          <Text style={styles.text}>And simple</Text>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    </View>
  )
}

export default Slider;




const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
