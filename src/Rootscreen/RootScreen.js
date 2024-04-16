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
import ClickMover from '../innerScreen/ClickMover';
import YourOrderScreen from '../innerScreen/YourOrderScreen';
import SearchJobs from '../driverScreens/SearchJobs';
import OpenJobs from '../driverScreens/OpenJobs';
import AcceptJobScreen from '../driverScreens/AcceptJobScreen';
import StartJobScreen from '../driverScreens/StartJobScreen';
import CompletedJobScreen from '../driverScreens/CompletedJobScreen';
import RateYourJob from '../driverScreens/RateYourJob';
import WayToDropOff from '../driverScreens/WayToDropOff';
import DriverApply from '../driverScreens/DriverApply';
import MyJobScreen from '../innerScreen/MyJobsScreen';
import JobDetail from '../innerScreen/Ongoing';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Ongoing from '../innerScreen/Ongoing';
import JobDetailScreen from '../innerScreen/JobDetailScreen';
import ServiceScreen from '../ServiceScreen';
import CompleteJobDes from '../driverScreens/CompleteJobDes';
import TodoJobs from '../driverScreens/TodoJobs';
import LoginDriver from '../driverScreens/LoginDriver';
import HomeScreen from '../innerScreen/HomeScreen';

const RootScreen = () => {
    const Stack = createNativeStackNavigator();
  return (
  
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen
          // initialRouteName="Splash"
          name="Splash"
          component={SplashScreen}
          options={{headerShown:false}}
        />
         {/* <Stack.Screen
          initialRouteName="service"
          name="service"
          component={ServiceScreen}
          options={{headerShown:false}}
        /> */}
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
           <Stack.Screen
          name="Click" 
          component={ClickMover} 
          options={{headerShown:false}}
          />
            <Stack.Screen
          name="YourOrder" 
          component={YourOrderScreen} 
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="search" 
          component={SearchJobs} 
          options={{headerShown:false}}
          />
           <Stack.Screen
          name="openJob" 
          component={OpenJobs} 
          options={{headerShown:false}}
          />
            <Stack.Screen
          name="Accept" 
          component={AcceptJobScreen} 
          options={{headerShown:false}}
          />
            <Stack.Screen
          name="start" 
          component={StartJobScreen} 
          options={{headerShown:false}}
          />
           <Stack.Screen
          name="completed" 
          component={CompletedJobScreen} 
          options={{headerShown:false}}
          />
           <Stack.Screen
          name="rate" 
          component={RateYourJob} 
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="way" 
          component={WayToDropOff} 
          options={{headerShown:false}}
          />
           <Stack.Screen
          name="driverApply" 
          component={DriverApply} 
          options={{headerShown:false}}
          />
             <Stack.Screen
          name="myJob" 
          component={MyJobScreen} 
          options={{headerShown:false}}
          />
           <Stack.Screen
          name="Ongoing" 
          component={Ongoing} 
          options={{headerShown:false}}
          />
           <Stack.Screen
          name="jobDetail" 
          component={JobDetailScreen} 
          options={{headerShown:false}}
          />
           <Stack.Screen
          name="CompleteJobDes" 
          component={CompleteJobDes} 
          options={{headerShown:false}}
          />
           <Stack.Screen
          name="todo" 
          component={TodoJobs} 
          options={{headerShown:false}}
          />
           <Stack.Screen
          name="loginD" 
          component={LoginDriver} 
          options={{headerShown:false}}
          />
           <Stack.Screen
          name="home" 
          component={HomeScreen} 
          options={{headerShown:false}}
          />
        {/* <Stack.Screen name="Profile" component={RegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default RootScreen

const styles = StyleSheet.create({})