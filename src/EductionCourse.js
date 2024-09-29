import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from './Compontest/Header'

const ContaentList=({item,index},NextPages)=>{
  // console.log('data',data)
  // let item='Introduction'
  return(
    <TouchableOpacity style={{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:15,
      borderRadius:10,
      backgroundColor:'#fff',
      marginHorizontal:10,
      marginBottom:15,
    

    }}
    onPress={()=>NextPages()}
    >
      <View style={{flexDirection:'row',gap:10}}>
      <Text
      style={{
        fontSize:14,
        fontWeight:'600',
        color:'#000',
        lineHeight:20
      }}
      >{`0 ${index+1}`}</Text>
      <Text
      style={{
        fontSize:16,
        fontWeight:'500',
        color:'#000',
        lineHeight:20
      }}
      >{item?.name}</Text>
      </View>
      <Image
      style={{width:30, height:30,marginLeft:10}}
      
      source={require('./Assets/playcircle.png')}
      />


      
    </TouchableOpacity>
  )
}

const EductionCourse = () => {
  const navigation =useNavigation()
  let data=[{name:'Introduction'},{name:'Variables'},{name:'Data Types'},{name:'Numbers'}]
  return (
    <View style={styles.container}>

      <Header/>

     
      <View style={{marginTop:15}}>
        <Text
        style={{fontSize:20,fontWeight:'600',color:'#000'}}
        >Python Basics</Text>
        <Text
        style={{fontSize:12,fontWeight:'400',color:'#000',lineHeight:15}}
        
        >By Pushkar</Text>

      </View>

      <View style={{marginTop:20}}>
        <Image
        style={{width: '100%', height:200,borderRadius:20}}
        source={require('./Assets/courseDetail.png')}
        />

      </View>

      <View style={{marginTop:15}}>
        <Text
        style={{fontSize:20,fontWeight:'600',color:'#000'}}
        >About Course</Text>
        <Text
        style={{fontSize:13,fontWeight:'300',color:'#000',lineHeight:15,marginTop:10}}
        
        >Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace. </Text>

      </View>
      <View style={{marginTop:15}}/>

      <Text
        style={{fontSize:16,fontWeight:'700',color:'#000'}}
        >Course Content</Text>
      <View style={{marginTop:15}}/>

        <FlatList
        data={data}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item,index})=>ContaentList({item,index},NextPages=()=>navigation.navigate('EductionContant'))}
        />
        {}

      
    </View>
  )
}

export default EductionCourse

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    marginTop:10,
    backgroundColor:'#F5F5F5'
  }
})