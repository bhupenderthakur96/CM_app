import React,{useState} from 'react';
import { Button, View,Image,Text, TouchableOpacity } from 'react-native';
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
import HomeLandingScreen from '../driverScreens/HomeLandingScreen';
import MyJobsScreen from '../driverScreens/MyJobsScreen';
import DocumentsScreen from '../driverScreens/DocumentsScreen';
import InviteAFriendScreen from '../driverScreens/InviteAFriendScreen';
import SupportDriverScreen from '../driverScreens/SupportDriverScreen';
import NotificationScreen from '../driverScreens/NotificationScreen';
import SettingsScreen from '../driverScreens/SettingsScreen';
import ProfileDriverScreen from '../driverScreens/ProfileDriverScreen';
import Documents from '../driverScreens/Documents';
import { Rating } from "react-native-ratings";
import HomeScreen from '../innerScreen/HomeScreen';
import MyJobScreen from '../innerScreen/MyJobsScreen';



{/* <DrawerItemList
label="Custom Button"
onPress={() => alert('Custom Button pressed')}
/> */}


const Drawer = createDrawerNavigator();

export default function DrawerNavigation({navigation}) {
  const [driver,setDriver] = useState(false)
  console.log(driver,"driver")
  return (

    <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <View style={{ alignItems: 'center', marginTop:responsiveHeight(3) }}>
            <Image
              source={require('../../assets/Images/man.png')}
              style={{ width: responsiveWidth(20), height: responsiveHeight(10),borderRadius:responsiveWidth(5) }}
            />
            
          </View>
          <Text style={{textAlign:"center",fontFamily:"Poppins-Medium",fontSize:responsiveFontSize(2.2),color:"#000000",marginVertical:responsiveHeight(2)}}>Ernest Smith</Text>
          {driver == true && 
          <Rating
            // type='custom'
            //   ratingImage={WATER_IMAGE}
            ratingColor='#3498db'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            imageSize={18}
            onFinishRating={this.ratingCompleted}
            style={{
              // marginLeft: responsiveWidth(1.5),
              alignSelf: "center",
              backgroundColor:"green",
              position:"relative",
              bottom:responsiveHeight(2)
            }}
          />
    }
        {driver == true && 
        <Text style={{
          textAlign:"center",
          borderWidth:responsiveWidth(0.2),
          marginHorizontal:responsiveWidth(21),
          paddingHorizontal:responsiveHeight(1),
          paddingVertical:responsiveHeight(0.6),
          borderRadius:responsiveWidth(2),
          color:"#0A0B1E",
          borderColor:"#C8C8C8"
        }}>Edit Profile</Text>
        }
          <DrawerItemList {...props} />
          {driver == false && 
          <DrawerItem 
          style={{
            backgroundColor:"#6369F3",
            borderRadius:responsiveWidth(3.5),
            color:"white",
            marginHorizontal:responsiveHeight(6),
            marginTop:responsiveHeight(30),
            width:180

          }} label="Driver Mode"  labelStyle={{ 
            color: "white",
            textAlign:"center",
            fontFamily:"Poppins-Medium",
            fontSize:responsiveFontSize(1.5),
            marginLeft:responsiveWidth(8)
           }}  onPress={() =>setDriver(true)}/>
          }
          {driver == true && 
          <DrawerItem 
          style={{
            backgroundColor:"#6369F3",
            borderRadius:responsiveWidth(3.5),
            color:"white",
            marginHorizontal:responsiveHeight(6),
            marginTop:responsiveHeight(30),
            width:180
          }} 
          label="UserMode" 
          labelStyle={{ 
            color: "white",
            textAlign:"center",
            fontFamily:"Poppins-Medium",
            fontSize:responsiveFontSize(1.5),
            marginLeft:responsiveWidth(8)
           }}
             onPress={() =>setDriver(false)}/>
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
            color:"#0A0B1E",
            fontFamily:"Poppins-Medium",
            fontSize:responsiveFontSize(1.8)
          }}
        
          label="Logout" onPress={() => navigation.navigate("Login")} />
        </DrawerContentScrollView>
      )
    }}>
      
      {driver == false && 
      <Drawer.Screen
        options={{
          headerStyle: {
            
            backgroundColor: 'black',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
          drawerLabelStyle: {
           
            marginBottom:responsiveHeight(1),
            marginHorizontal:responsiveWidth(2.5),
            fontFamily:"Poppins-Medium",
            fontSize:responsiveFontSize(2.2),
            color:"#0A0B1E",
           
          },
          
          drawerIcon: ({focused, size}) => (
            <Image
            source={require('../../assets/Icons/home1.png')}
            style={{height:responsiveHeight(5),width:responsiveWidth(12),position:"absolute"}}
          />
         ),
        }}
        name="Item Size"
        component={MyJobScreen}

      />
    }
      {driver == false && 
      <Drawer.Screen
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
            
          },
          headerTintColor: '#FFFFFF',
          
          drawerLabelStyle: {
            
            marginBottom:responsiveHeight(0.5),
            marginHorizontal:responsiveWidth(2.5),
            fontFamily:"Poppins-Medium",
            fontSize:responsiveFontSize(2.2),
            color:"#0A0B1E",
            
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
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#FFFFFF',
          drawerLabelStyle: {
            marginBottom:responsiveHeight(0.5),
            marginHorizontal:responsiveWidth(2.5),
            fontFamily:"Poppins-Medium",
            fontSize:responsiveFontSize(2.2),
            color:"#0A0B1E"

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
          headerTitleAlign: 'center',
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
            marginBottom:responsiveHeight(0.5),
            marginHorizontal:responsiveWidth(2.5),
            fontFamily:"Poppins-Medium",
            fontSize:responsiveFontSize(2.2),
            color:"#0A0B1E"
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
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#FFFFFF',
          drawerLabelStyle: {
            marginBottom:responsiveHeight(1),
            marginHorizontal:responsiveWidth(2.5),
            fontFamily:"Poppins-Medium",
            fontSize:responsiveFontSize(2.2),
            color:"#0A0B1E"
          },
          drawerIcon: ({focused, size}) => (
            <Image
            source={require('../../assets/Icons/setting.png')}
            style={{height:responsiveHeight(5),width:responsiveWidth(10),position:"absolute"}}
          />
         ),
        }}
        name="Settings"
        component={SettingScreen} />
      }
       {driver == true && (
        <Drawer.Screen
        
          options={{
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("search") }>
              <Image
                source={require('../../assets/Icons/Search.png')}
                style={{ height:responsiveHeight(3), width:responsiveWidth(5), marginRight:responsiveWidth(4) }}
              />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerLabelStyle: {
              fontSize:responsiveFontSize(2),
              marginBottom:responsiveHeight(1),
              marginHorizontal:responsiveWidth(2.5),
              // fontWeight:"bold",
              fontFamily:"Poppins-Medium",
              marginTop:responsiveHeight(2)
            },
            drawerIcon: ({focused, size}) => (
              <Image
              source={require('../../assets/Icons/home1.png')}
              style={{height:responsiveHeight(5.5),width:responsiveWidth(10),position:"absolute",top:responsiveHeight(3.2)}}
            />
           ),

          }}
          name="Home"
          component={HomeLandingScreen}
        />
      )}
       {driver == true && (
        <Drawer.Screen
        
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerLabelStyle: {
              fontSize:responsiveFontSize(2),
              marginBottom:responsiveHeight(1),
              marginHorizontal:responsiveWidth(2.5),
              // fontWeight:"bold",
              fontFamily:"Poppins-Medium"
            },
            drawerIcon: ({focused, size}) => (
              <Image
              source={require('../../assets/Icons/job1.png')}
              style={{height:responsiveHeight(5),width:responsiveWidth(10),position:"absolute"}}
            />
           ),

          }}
          name="My Jobs"
          component={MyJobsScreen}
        />
      )}
      {driver == true && (
        <Drawer.Screen
        
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerLabelStyle: {
              fontSize:responsiveFontSize(2),
              marginBottom:responsiveHeight(1),
              marginHorizontal:responsiveWidth(2.5),
              // fontWeight:"bold",
              fontFamily:"Poppins-Medium"
            },
            drawerIcon: ({focused, size}) => (
              <Image
              source={require('../../assets/Icons/money.png')}
              style={{height:responsiveHeight(5),width:responsiveWidth(7),position:"absolute",marginLeft:responsiveWidth(1)}}
            />
           ),

          }}
          name="My Earnings"
          component={MyEarning}
        />
      )}
     
       {driver == true && (
        <Drawer.Screen
        
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerLabelStyle: {
              fontSize:responsiveFontSize(2),
              marginBottom:responsiveHeight(1),
              marginHorizontal:responsiveWidth(2.5),
              // fontWeight:"bold",
              fontFamily:"Poppins-Medium"
            },
            drawerIcon: ({focused, size}) => (
              <Image
              source={require('../../assets/Icons/man.png')}
              style={{height:responsiveHeight(4),width:responsiveWidth(9.5),position:"absolute",left:responsiveWidth(1),bottom:responsiveHeight(2.2)}}
            />
           ),

          }}
          name="Invite a Friend"
          component={InviteAFriendScreen}
        />
      )}
       {driver == true && (
        <Drawer.Screen
        
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerLabelStyle: {
              fontSize:responsiveFontSize(2),
              marginBottom:responsiveHeight(1),
              marginHorizontal:responsiveWidth(2.5),
              // fontWeight:"bold",
              fontFamily:"Poppins-Medium"
            },
            drawerIcon: ({focused, size}) => (
              <Image
              source={require('../../assets/Icons/message.png')}
              style={{height:responsiveHeight(5),width:responsiveWidth(8),position:"absolute",left:responsiveWidth(1)}}
            />
           ),

          }}
          name="Support"
          component={SupportDriverScreen}
        />
      )}
           {driver == true && (
        <Drawer.Screen
        
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerLabelStyle: {
              fontSize:responsiveFontSize(2),
              marginBottom:responsiveHeight(1),
              marginHorizontal:responsiveWidth(2.5),
              // fontWeight:"bold",
              fontFamily:"Poppins-Medium"
            },
            drawerIcon: ({focused, size}) => (
              <Image
              source={require('../../assets/Icons/bell1.png')}
              style={{height:responsiveHeight(6),width:responsiveWidth(10),position:"absolute"}}
            />
           ),

          }}
          name="Notification"
          component={NotificationScreen}
        />
      )}
         {driver == true && (
        <Drawer.Screen
        
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerLabelStyle: {
              fontSize:responsiveFontSize(2),
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
          name="Settings"
          component={SettingsScreen}
        />
      )}
       {driver == true && (
        <Drawer.Screen
        
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerLabelStyle: {
              fontSize:responsiveFontSize(2),
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
          name="Profile"
          component={ProfileDriverScreen}
        />
      )}
       {driver == true && (
        <Drawer.Screen
        
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FFFFFF',
            drawerLabelStyle: {
              fontSize:responsiveFontSize(2),
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
          name="Document"
          component={Documents}
        />
      )}
      {/* {driver == true && (
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
      )} */}
      {/* {driver == true && (
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
      )} */}
       
      {/* } */}

    </Drawer.Navigator>

  );
}