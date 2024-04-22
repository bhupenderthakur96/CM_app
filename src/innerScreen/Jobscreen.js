import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CompletedJobScreen from './CompletedJobScreen';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import OngoinJob from './OngoinJob';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row',  borderRadius:responsiveWidth(2),marginHorizontal:responsiveWidth(10) }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const backgroundColor = isFocused ? '#6369F3' : 'white';
        const color = isFocused ? '#FFFFFF' : 'black';

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabItem, { backgroundColor }]}
            key={index}
          >
            <Text style={{ color, fontSize: 12 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Jobscreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
          <Tab.Screen name="JOBS DONE" component={CompletedJobScreen} />
          <Tab.Screen name="ONGOING JOB" component={OngoinJob} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Jobscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: responsiveWidth(5),
  },
  tabItem: {
    flex: 1,
    // alignItems: 'center',
    
    alignItems: 'center',
    justifyContent: 'center', // Added to vertically center the text
    paddingVertical:responsiveHeight(1.6), // Changed to paddingVertical for equal spacing
    paddingHorizontal:responsiveWidth(3), // Added paddingHorizontal for horizontal spacing
    borderRadius:responsiveWidth(3),
    marginHorizontal:responsiveWidth(1.5),
    borderWidth:responsiveWidth(0.2),
    borderColor:"#C8C8C8",
    marginTop:responsiveHeight(2.5)
  },
});
