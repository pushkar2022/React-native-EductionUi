import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from './Compontest/Header'
import { useNavigation } from '@react-navigation/native'
const EductionComtent = () => {
  const navigation=useNavigation()

  return (
    <View style={styles.container}>
      <Header/>

      <View style={{marginTop:25}}>
        <Text
        style={{fontSize:20,fontWeight:'700', marginBottom:10,color:'#000'}}
        
        >Python Basics</Text>
        <Text
        style={{fontSize:18,fontWeight:'300', color:'#000'}}
        >Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace.</Text>
      </View>



      <TouchableOpacity
      style={{borderRadius:7,backgroundColor:'#1D92FF',height:45,

        position:'absolute',
        bottom:30,
        left:20,
        right:20,
        justifyContent:'center',
        alignItems:'center'
      }}
      onPress={()=>navigation.navigate('EductionCourse')}
      >
        <Text
        style={{fontSize:18,fontWeight:'500', color:'#000',textAlign:'center',color:'#fff'}}
        >Finish</Text>
      </TouchableOpacity>

      
    </View>
  )
}

export default EductionComtent

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    marginTop:10,
    backgroundColor:'#F5F5F5'

  },


})