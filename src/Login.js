import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const natvigation=useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground
      style={{width: '100%', height:265}}
      source={require('./Assets/loginheader.png')}
      />
      <View style={styles.loginContainer}> 

        <View style={{
        justifyContent:'center',
       alignItems: 'center',
       marginTop:100

        }}>
         < Text
         style={{
          fontSize:30,
          fontWeight:'500',
          textAlign:'center',
          color:'#000000',
           width:300,
           lineHeight:45
         }}
         >Welcome to Education App</Text>
        </View>
        <Text
      style={{
        fontSize:20,
        fontWeight:'700',
        textAlign:'center',
        color:'#000000',
        marginTop:50,
      
        
      }}
      >Login/Signup</Text>

      <TouchableOpacity style={{
        // textAlign:'center',
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        // paddingHorizontal:150



      }}
      
      onPress={()=>natvigation.navigate('Home')}
      >
        <Text
        style={{
          fontSize:20,
          fontWeight:'700',
          textAlign:'center',
          color:'white',
          padding:15,
          borderRadius:20,
          backgroundColor:'#12B3C9'
        }}
        
        
        >Sign in With Google</Text>
      </TouchableOpacity>

      </View>

     

   

      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  loginContainer:{
    backgroundColor:'#fff',
    flex:1,
    marginTop:-20,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    // justifyContent: 'center',
    // alignContent: 'center',
    
    width:'100%',
    shadowColor: '#000',
    
  }
})