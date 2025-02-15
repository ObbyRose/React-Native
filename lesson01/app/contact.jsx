import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

import coffeeBeans from "@/assets/images/coffee-splash.png"

const contact = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeeBeans} style={styles.image}>
        <Text style={styles.text}>In our coffee shop we use jamaican coffee beans that had been roasted to perfection</Text>
      </ImageBackground>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})