import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../innerScreen/HomeScreen';
import MyJobsScreen from '../innerScreen/MyJobsScreen';
import NotificationScreen from '../innerScreen/NotificationScreen';
import ProfileScreen from '../innerScreen/ProfileScreen';



const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    const [selectedTab, setSelectedTab] = useState(true);
    console.log(selectedTab,"jack")
  return (
    <Tab.Navigator
    screenOptions={{
      activeTintColor: 'blue', // Color for the active tab=
    }}
    >
      <Tab.Screen 
        name="Homee"
        component={HomeScreen}
        options={{
          headerShown: false,
          
          tabBarIcon: ({ color }) => (
           
            <Image
              style={{ height: 30, width: 30 }}
              source={require('../../assets/Icons/house.png')}
              // source={selectedTab === true ? require('../../assets/Icons/blueH.png') : (selectedTab === false ? require('../../assets/Icons/house.png') : require('../../assets/Icons/house.png'))}
              resizeMode="contain"
            />
            
          ),
          tabBarStyle: {
            backgroundColor: 'black', // Setting background color of the tab bar
          },
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            setSelectedTab(!selectedTab);
          },
        })}
      />
    <Tab.Screen 
    
     options={{
      tabBarStyle: {
        backgroundColor: 'black', // Setting background color of the tab bar
      },
      headerShown:false,
      tabBarIcon:({color})=>(
        <Image
        style={{ height: 30}}
        source={require('../../assets/Icons/trolly.png')}
        resizeMode="contain"
      />
      ),
    }}
    name="MyJobs" component={MyJobsScreen} />
    <Tab.Screen 
     options={{
      tabBarStyle: {
        backgroundColor: 'black', // Setting background color of the tab bar
      },
      headerShown:false,
      tabBarIcon:({color})=>(
        <Image
        style={{ height: 30}}
        source={require('../../assets/Icons/bell.png')}
        resizeMode="contain"
      />
      ),
    }}
    name="Notification" component={NotificationScreen} />
    <Tab.Screen 
     options={{
      tabBarStyle: {
        backgroundColor: 'black', // Setting background color of the tab bar
      },
      headerShown:false,
      tabBarIcon:({color})=>(
        <Image
        style={{ height: 30}}
        source={require('../../assets/Icons/person.png')}
        resizeMode="contain"
      />
      ),
    }}
    name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})