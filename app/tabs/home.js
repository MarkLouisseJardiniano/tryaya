import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View>
<ImageBackground
  style={{ width: 400, height: 400,  resizeMode: 'contain',justifyContent:'center', alignItems:'center' }}
  source={require('../../assets/wow.jpg')}
/>

    </View>
  )
}

export default home

const styles = StyleSheet.create({})