import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../outerScreen/LoginScreen';
import RegisterScreen from '../outerScreen/RegisterScreen';
import SplashScreen from '../outerScreen/SplashScreen';
import DrawerNavigation from '../navigation/DrawerNavigation';
import PickDropScreen from '../innerScreen/PickDropScreen';
import DelivaryTypeScreen from '../innerScreen/DelivaryTypeScreen';


const RootScreen = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen
          initialRouteName="Splash"
          name="Splash"
          component={SplashScreen}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="drawer" 
          component={DrawerNavigation} 
          options={{headerShown:false}}
          />
            <Stack.Screen
          name="PickDrop" 
          component={PickDropScreen} 
          options={{headerShown:false}}
          />
            <Stack.Screen
          name="DeliveryType" 
          component={DelivaryTypeScreen} 
          options={{headerShown:false}}
          />
        {/* <Stack.Screen name="Profile" component={RegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootScreen

const styles = StyleSheet.create({})