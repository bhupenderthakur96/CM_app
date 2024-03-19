import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../outerScreen/LoginScreen';
import RegisterScreen from '../outerScreen/RegisterScreen';
import SplashScreen from '../outerScreen/SplashScreen';





const RootScreen = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen
          name="Home"
          component={SplashScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Profile" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootScreen

const styles = StyleSheet.create({})