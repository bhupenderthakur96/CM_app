import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../innerScreen/HomeScreen';
import MyJobsScreen from '../innerScreen/MyJobsScreen';
import NotificationScreen from '../innerScreen/NotificationScreen';
import ProfileScreen from '../innerScreen/ProfileScreen';



const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
    <Tab.Screen 
    //  options={{headerShown:false}}
    name="Homee" component={HomeScreen} 
    options={{
      headerShown:false,
      tabBarStyle: {
        backgroundColor: 'black', // Setting background color of the tab bar
      },
      tabBarActiveTintColor: 'blue', // Setting active tab text color to white
      tabBarInactiveTintColor: 'gray', // Setting inactive tab text color to gray
      // tabBarLabelStyle: {
      //   fontSize: 16, // Adjust font size of tab labels as needed
      // },
    }}
    />
    <Tab.Screen 
     options={{headerShown:false}}
    name="MyJobs" component={MyJobsScreen} />
    <Tab.Screen 
     options={{headerShown:false}}
    name="Notification" component={NotificationScreen} />
    <Tab.Screen 
     options={{headerShown:false}}
    name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})