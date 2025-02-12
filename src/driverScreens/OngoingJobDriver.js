import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import StepIndicator from 'react-native-step-indicator';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    color:"#FFF9E6",
    borderColor:"#FFC107",
    image: require("../../assets/Icons/onGoing.png"),
    status:'Way to drop off'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    color:"#F6F6FE",
    borderColor:"#C8C8C8",
    image: require("../../assets/Icons/Check.png"),
    status:'Accepted'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    color:"#F6F6FE",
    borderColor:"#C8C8C8",
    image: require("../../assets/Icons/Check.png"),
    status:'Accepted'
    
  },
  {
    id: '58694a0f-3da1-471f-b',
    title: 'Fourth Item',
    color:"#F6F6FE",
    borderColor:"#C8C8C8",
    image: require("../../assets/Icons/Check.png"),
    status:'Accepted'
    
  },
]



const OngoinJob = ({ navigation }) => {

  const Item = ({ title, onPress }) => {
    const backgroundColor = title.color
    const borderColor = title.borderColor
    const image = title.image
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[styles.grid, { backgroundColor, borderColor ,marginBottom:responsiveHeight(1)}]}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{   marginLeft:responsiveWidth(2),color: "#0A0B1E", fontFamily: "Poppins-Regular", marginTop: responsiveHeight(1) }}>Job ID:<Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Bold" }}>684</Text></Text>
            <View style={{ 
              
              flexDirection: "row", 
              marginTop: responsiveHeight(1),
              //  marginLeft: responsiveWidth(42)
                }}>
              <Text style={{ 
                marginTop: responsiveHeight(0.5),
                 fontFamily: "Poppins-Medium", fontSize: responsiveFontSize(1.3) }}>{title.status}</Text>
              <Image
                style={{
                  height: responsiveHeight(3),
                  width: responsiveWidth(8),
                  marginRight:responsiveWidth(1.5)
                  // backgroundColor: "green",
                  // marginTop: responsiveHeight(1.5)
                }}
                source={title.image}
                resizeMode="contain"
              />
            </View>
          </View>
          <View
            style={{ marginTop: responsiveHeight(2)}}
          >
            <Image
              style={{ height: responsiveHeight(10), width: responsiveWidth(7) }}
              source={require('../../assets/Icons/location.png')}
              resizeMode="contain"
            />
            <View style={{ position: "absolute", marginLeft: responsiveWidth(8), }}>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#C8C8C8" }}>PickUp</Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), color: "#0A0B1E" }}>Westhiemer RD, Santa Ana</Text>
              <Text style={{ marginTop: responsiveHeight(0.5), fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#C8C8C8" }}>Drop off</Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), marginTop: responsiveHeight(0.3), color: "#0A0B1E" }}>Preston Rd, Inglewood, Maine</Text>
            </View>
          </View>
          <View style={{
             flexDirection: "row", 
             justifyContent: "space-between",
              marginHorizontal: responsiveWidth(2.5),
               marginTop: responsiveHeight(2) }}>
            <Text style={{marginTop:responsiveHeight(2), color: "#6369F3", fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8) }}>$870</Text>
            <Text style={{marginTop:responsiveHeight(2), color: "#0A0B1E", fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8), marginRight: responsiveWidth(20) }}>40KM</Text>
             
           
            <Text style={{ marginTop:responsiveHeight(2), color: "#0D1B25", fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), }}>March15, 2023 1:24pm</Text>
          
          </View>
        </View>
      </TouchableOpacity>
    )
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item} onPress={() => navigation.navigate('jobDetail')} />}
        keyExtractor={item => item.id}
      
     
      />
    </View>
  )
}

export default OngoinJob

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#FFFFFF",

  },
  grid: {
    // backgroundColor: "#F6F6FE",
    padding: responsiveHeight(1),
    marginHorizontal: responsiveWidth(3),
    marginTop: responsiveHeight(1),
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.5)
  }
})