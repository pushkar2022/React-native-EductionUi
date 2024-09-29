import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
      const navigaion=useNavigation()
  return (
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=>navigaion.goBack()}>
      <Image
      style={{width:24, height:24}}
      source={require('../Assets/arrowleft.png')}
      />
      </TouchableOpacity>
      <Image
      style={{width:24, height:24}}
      source={require('../Assets/more.png')}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})