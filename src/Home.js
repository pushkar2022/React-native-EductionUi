import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation =useNavigation()
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View>
          <Text style={{fontSize:12,color:'#000',fontWeight:'400'}}>Hello</Text>
          <Text style={{fontSize:14,color:'#000',fontWeight:'600'}}>Rahul Raj</Text>
        </View>
        <View>
          <Image
          style={{width: 60, height: 60}}
          source={require('./Assets/UserIcon.png')}
          />
        </View>
      </View>
      <View style={{marginTop:20}}/>
      <View style={{
        borderRadius:10,
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
        height:52,
        
      }}>
       
        <TextInput
        style={{
          backgroundColor:'#fff',
         width:'100%',
         height:'100%',
        borderRadius:10,
        fontSize:14,
        fontWeight:'400',
        paddingHorizontal:30,
          paddingLeft:45



          // flex:1

        }}
        placeholder='Search'
        placeholderTextColor={'gray'}
        onChangeText={(val)=>console.log(('val',val))}
        />
         <Image
         tintColor={'gray'}
        style={{width: 20, height: 20,position:'absolute',left:15,top:15}}
        source={require('./Assets/searchIocn.png')}
        />
      </View>
      <View style={{marginTop:15}}/>

      <View
      style={{
        // borderRadius:30
      }}
      >
        <Image
        style={{width: '100%', height:143,borderRadius:15}}
        source={require('./Assets/imagesSlider.png')}
        
        />
      </View>
      <View style={{marginTop:15}}/>

      <Text
      style={{
        fontSize:20,
        fontWeight:'700',
        marginBottom:10,
        lineHeight:25,
        color:'#000'

      }}
      >
      Video Course
      </Text>
      <FlatList
      horizontal={true}
      data={[{name:'rahul'},{name:'kumr'}]}
      renderItem={({item,index})=>{
        return(<TouchableOpacity style={{
          width:200,
          height:130,
          borderRadius:10,
          backgroundColor:'#fff',
          marginHorizontal:10,
          marginBottom:15,
          padding:10,
          margin:20,

         

          
        }}
        onPress={()=>navigation.navigate('EductionCourse')}
        >
          <Image
          style={{width: '100%', height:100}}
          source={require('./Assets/course1.png')}
          />


        </TouchableOpacity>
          
          )
      }}
      />
      <View style={{marginTop:15}}/>

      <Text
      style={{
        fontSize:20,
        fontWeight:'700',
        marginBottom:10,
        lineHeight:25,
        color:'#000'

      }}
      >
     Basic Popular Course
      </Text>


     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:15,
    marginTop:10,
  }

})