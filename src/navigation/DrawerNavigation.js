import React,{useState} from 'react';
import { Button, View,Image,Text } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import InviteFriendScreen from '../innerScreen/InviteFriendScreen';
import SupportScreen from '../innerScreen/SupportScreen';
import DriverModeScreen from '../innerScreen/DriverModeScreen';
import JobScreen from '../driverScreens/JobScreen';
import SearchJobs from '../driverScreens/SearchJobs';
import Jobscreen from '../innerScreen/Jobscreen';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SettingScreen from '../innerScreen/SettingScreen';
import MyEarning from '../driverScreens/MyEarning';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

{/* <DrawerItemList
label="Custom Button"
onPress={() => alert('Custom Button pressed')}
/> */}


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const [driver,setDriver] = useState(false)
  console.log(driver,"driver")
  return (

    <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Image
              source={require('../../assets/Images/man.png')}
              style={{ width: responsiveWidth(20), height: responsiveHeight(10),borderRadius:responsiveWidth(5) }}
            />
          </View>
          <Text style={{textAlign:"center",fontFamily:"Poppins-Bold",fontSize:responsiveFontSize(2.2)}}>Ernest Smith</Text>
          <DrawerItemList {...props} />
          {driver == false && 
          <DrawerItem 
          style={{
            backgroundColor:"blue",
            borderRadius:responsiveWidth(3.5),
            color:"white",
            marginHorizontal:responsiveHeight(6),
            marginTop:responsiveHeight(30),
            width:180

          }} label="Driver Mode"  labelStyle={{ 
            color: "white",
            textAlign:"center",
            fontWeight:"bold",
            fontFamily:"Poppins-Regular",
            marginLeft:responsiveWidth(8)
           }}  onPress={() =>setDriver(true)}/>
          }
          {driver == true && 
          <DrawerItem 
          style={{backgroundColor:"blue",color:"white",marginHorizontal:50,marginTop:500}} 
          label="UserMode" labelStyle={{ color: "white",textAlign:"center" }}   onPress={() =>setDriver(false)}/>
          }
          
          <DrawerItem style={{color:"white",marginLeft:responsiveHeight(11)}}
           icon={() => (
            <Image
              source={require('../../assets/Icons/Logout.png')} // Change the path to your image
              style={{ width: responsiveWidth(10), height: responsiveHeight(5),position:"absolute"}}
             resizeMode='contain'
              // Adjust width, height, and tintColor as needed
            />
          )}

          labelStyle={{
            marginRight:20,
            fontWeight:"bold",
            fontFamily:"Poppins-Regular"
          }}
        
          label="Logout" onPress={() => props.navigation.navigate("support")} />
        </DrawerContentScrollView>
      )
    }}>
      
      {driver == false && 
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#FFFFFF',
          drawerLabelStyle: {
            fontSize: 20,
            marginBottom:responsiveHeight(1),
            marginHorizontal:responsiveWidth(2.5),
            // fontWeight:"bold",
            fontFamily:"Poppins-Medium"
          },
          fontSize:20,
          drawerIcon: ({focused, size}) => (
            <Image
            source={require('../../assets/Icons/home1.png')}
            style={{height:responsiveHeight(5),width:responsiveWidth(12),position:"absolute"}}
          />
         ),
        }}
        name="Home"
        component={BottomNavigation}

      />
    }
      {driver == false && 
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#FFFFFF',
          
          drawerLabelStyle: {
            fontSize: 20,
            marginBottom:responsiveHeight(0.5),
            marginHorizontal:responsiveWidth(2.5),
            // fontWeight:"bold",
            fontFamily:"Poppins-Medium"
          },
          drawerIcon: ({focused, size}) => (
            <Image
            source={require('../../assets/Icons/job1.png')}
            style={{height:responsiveHeight(6),width:responsiveWidth(10),position:"absolute",marginBottom:30}}
          />
         ),
        }}
        name="My Jobs"
        component={Jobscreen} />
      }
     {driver == false && 
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#FFFFFF',
          drawerLabelStyle: {
            fontSize: 20,
            marginBottom:responsiveHeight(0.5),
            marginHorizontal:responsiveWidth(2.5),
            // fontWeight:"bold",
            fontFamily:"Poppins-Medium"

          },
          drawerIcon: ({focused, size}) => (
            <Image
            source={require('../../assets/Icons/man.png')}
            style={{height:responsiveHeight(5),width:responsiveWidth(10),position:"absolute"}}
          />
         ),
        }}
        name="Invite a Friend"
        component={InviteFriendScreen} />
      }
        {driver == false && 
      <Drawer.Screen
        options={{
          drawerLabel: 'Support',
          labelStyle: {
            color: "white", // Change color as needed
            fontSize: 20, // Change font size as needed
            fontWeight: "bold", // Change font weight as needed
            padding:10
          },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#FFFFFF',
          drawerLabelStyle: {
            fontSize: 20,
            marginBottom:responsiveHeight(0.5),
            marginHorizontal:responsiveWidth(2.5),
            // fontWeight:"bold",
            fontFamily:"Poppins-Medium"
          },
          drawerIcon: ({focused, size}) => (
            <Image
            source={require('../../assets/Icons/message.png')}
            style={{
              height:responsiveHeight(5),
              width:responsiveWidth(10),
              position:"absolute",
       
            }}
          />
         ),
        }}
        name="Support"
        component={SupportScreen} />
      }
 {driver == false && 
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#FFFFFF',
          drawerLabelStyle: {
            fontSize: 20,
            marginBottom:responsiveHeight(1),
            marginHorizontal:responsiveWidth(2.5),
            // fontWeight:"bold",
            fontFamily:"Poppins-Medium"
          },
          drawerIcon: ({focused, size}) => (
            <Image
            source={require('../../assets/Icons/setting.png')}
            style={{height:responsiveHeight(5),width:responsiveWidth(10),position:"absolute"}}
          />
         ),
        }}
        name="Setting"
        component={SettingScreen} />
      }
      {driver == true && (
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerIcon: ({focused, size}) => (
              <Image
              source={require('../../assets/Icons/job.png')}
              style={{height:30,width:30}}
            />
           ),
          }}
          name="job"
          component={JobScreen}
        />
      )}
      {driver == true && (
        <Drawer.Screen
        
          options={{
            
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerIcon: ({focused, size}) => (
              <Image
              source={require('../../assets/Icons/job.png')}
              style={{height:30,width:30}}
            />
           ),

          }}
          name="Search Jobs"
          component={SearchJobs}
        />
      )}
       {driver == true && (
        <Drawer.Screen
        
          options={{
            
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerIcon: ({focused, size}) => (
              <Image
              source={require('../../assets/Icons/job.png')}
              style={{height:30,width:30}}
            />
           ),

          }}
          name="My Earnings"
          component={MyEarning}
        />
      )}
      {/* } */}

    </Drawer.Navigator>

  );
}