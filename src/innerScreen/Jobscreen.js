import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CompletedJobScreen from './CompletedJobScreen';
import OngoinJob from './OngoinJob';


const Tab = createMaterialTopTabNavigator();
const Jobscreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          // tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: 'powderblue',borderRadius:20 },
        }}
      >
          <Tab.Screen name="Completed Job" component={CompletedJobScreen} />
          <Tab.Screen name="Ongoing Job" component={OngoinJob} />
        </Tab.Navigator>
      </View>
      <Text>Jobscreen</Text>
    </View>
  )
}

export default Jobscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: responsiveWidth(5),
  },
})