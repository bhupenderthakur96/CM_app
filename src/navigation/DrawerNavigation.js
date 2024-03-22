import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import InviteFriendScreen from '../innerScreen/InviteFriendScreen';

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

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
   
      <Drawer.Navigator 
      // initialRouteName="Home"
      >
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
      </Drawer.Navigator>
   
  );
}