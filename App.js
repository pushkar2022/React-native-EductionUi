import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Home from './src/Home';
import EductionCourse from './src/EductionCourse';
import EductionContant from './src/EductionContant';
import EductionComtent from './src/EductionComtent';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
       screenOptions={{headerShown: false}}
       >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="EductionCourse" component={EductionCourse} />
        <Stack.Screen name="EductionContant" component={EductionContant} />

        <Stack.Screen name="EductionComtent" component={EductionComtent} />
      
      </Stack.Navigator>

      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})