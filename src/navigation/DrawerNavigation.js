import React,{useState} from 'react';
import { Button, View,Image } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import InviteFriendScreen from '../innerScreen/InviteFriendScreen';
import SupportScreen from '../innerScreen/SupportScreen';
import DriverModeScreen from '../innerScreen/DriverModeScreen';
import JobScreen from '../driverScreens/JobScreen';
import SearchJobs from '../driverScreens/SearchJobs';

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
              source={require('../Assets/Images/owner.png')}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          </View>
          <DrawerItemList {...props} />
          {driver == false && 
          <DrawerItem 
          style={{
            backgroundColor:"blue",
            color:"white",marginHorizontal:50,marginTop:450
          }} label="Driver Mode"  labelStyle={{ color: "white",textAlign:"center" }}  onPress={() =>setDriver(true)}/>
          }
          {driver == true && 
          <DrawerItem 
          style={{backgroundColor:"blue",color:"white",marginHorizontal:50,marginTop:500}} 
          label="UserMode" labelStyle={{ color: "white",textAlign:"center" }}   onPress={() =>setDriver(false)}/>
          }
          <DrawerItem style={{color:"white",marginHorizontal:50}}
          labelStyle={{ textAlign:"center" }} 
          label="Logout" onPress={() => props.navigation.navigate("support")} />
        </DrawerContentScrollView>
      )
    }}>
      
      {driver == false && 
      <Drawer.Screen
        options={{
          // Styling options for the screen
          headerStyle: {
            backgroundColor: 'black', // Setting background color to black
          },
          headerTintColor: '#FFFFFF', // Setting text color to white
        }}
        name="Home"
        component={BottomNavigation}

      />
    }
     {driver == false && 
      <Drawer.Screen
        options={{
          // headerShown:false,
          // Styling options for the screen
          headerStyle: {
            backgroundColor: 'black', // Setting background color to black
          },
          headerTintColor: '#FFFFFF', // Setting text color to white
        }}
        name="Invite a Friend"
        component={InviteFriendScreen} />
      }
        {driver == false && 
      <Drawer.Screen
        options={{
          // headerShown:false,
          // Styling options for the screen
          headerStyle: {
            backgroundColor: 'black', // Setting background color to black
          },
          headerTintColor: '#FFFFFF', // Setting text color to white
        }}
        name="support"
        component={SupportScreen} />
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
              source={require('../Assets/Icons/job.png')}
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
              source={require('../Assets/Icons/job.png')}
              style={{height:30,width:30}}
            />
           ),

          }}
          name="Search Jobs"
          component={SearchJobs}
        />
      )}
      {/* } */}

    </Drawer.Navigator>

  );
}