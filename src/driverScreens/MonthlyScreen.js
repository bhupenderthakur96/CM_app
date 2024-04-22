import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';



const MonthlyScreen = () => {
  const barData = [
    {
      value: 230,
      label: '1st week',
      frontColor: '#8AE08A',
      sideColor: '#23A7F3',
      topColor: '#92e6f6',
    },
    {
      value: 500,
      label: '2nd week',
      frontColor: '#8AE08A',
      sideColor: '#68BCD7',
      topColor: '#9FD4E5',
    },
    {
      value: 375,
      label: '3rd week',
      frontColor: '#8AE08A',
      sideColor: '#0FAAAB',
      topColor: '#66C9C9',
    },
    {
      value: 250,
      label: '4th week',
      frontColor: '#8AE08A',
      sideColor: '#36D9B2',
      topColor: '#7DE7CE',
    },
   ]
  return (
   
    <View style={{ flex: 1, backgroundColor: "black" }}>
     
      <View style={{
        flex: 1,
        backgroundColor: "white",
    

      }}>
      
        <Text style={{ color: "#8AE08A", textAlign: "center", fontSize: 25, fontWeight: "bold", marginTop: responsiveHeight(4) }}>$5656</Text>
        <Text style={{ textAlign: "center", fontSize: 14 }}>March 2024</Text>
        <BarChart
          showFractionalValue
          showYAxisIndices
          hideRules
          noOfSections={5}
          maxValue={500}
          data={barData}
          barWidth={55}
          // sideWidth={45}
          // isThreeD 
          side="right"
        />
   
<ScrollView>
        <View
          style={{
            backgroundColor: "#F6F6FE",
            padding: responsiveHeight(1),
            marginHorizontal: responsiveWidth(3),
            marginTop: responsiveHeight(1),
            borderRadius: responsiveWidth(3)
          }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: responsiveWidth(4.1) }}>
            <Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Regular" }}>Job ID:<Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Bold" }}>684</Text></Text>
            <View style={{}}>
              <Image
                style={{
                  height: responsiveHeight(3),
                  width: responsiveWidth(8),

                  // backgroundColor: "green",
                  marginTop: responsiveHeight(2)
                }}
                source={require('../../assets/Icons/Check.png')}
                resizeMode="contain"
              />
            </View>
          </View>
          <View
          >
            <Image
              style={{ height: responsiveHeight(10), width: responsiveWidth(13) }}
              source={require('../../assets/Icons/location.png')}
              resizeMode="contain"
            />
            <View style={{ position: "absolute", marginLeft: responsiveWidth(10), }}>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#C8C8C8" }}>PickUp</Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), color: "#0A0B1E" }}>Westhiemer RD, Santa Ana</Text>
              <Text style={{ marginTop: responsiveHeight(0.6), fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#C8C8C8" }}>Drop off</Text>
              <Text style={{ marginTop: responsiveHeight(0.3),fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), marginTop: responsiveHeight(0.3), color: "#0A0B1E" }}>Preston Rd, Inglewood, Maine</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: responsiveWidth(5.5), marginTop: responsiveHeight(2) }}>
            <Text style={{ color: "#6369F3", fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8) }}>$870</Text>
            <Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8), marginRight: responsiveWidth(20) }}>40KM</Text>
            <Text style={{ color: "#C8C8C8", fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), }}>March15, 2023 1:24pm</Text>
          </View>
        </View>
      
        <View
          style={{
            backgroundColor: "#F6F6FE",
            padding: responsiveHeight(1),
            marginHorizontal: responsiveWidth(3),
            marginTop: responsiveHeight(1),
            borderRadius: responsiveWidth(3)
          }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: responsiveWidth(4.1) }}>
            <Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Regular" }}>Job ID:<Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Bold" }}>684</Text></Text>
            <View style={{}}>
              <Image
                style={{
                  height: responsiveHeight(3),
                  width: responsiveWidth(8),

                  // backgroundColor: "green",
                  marginTop: responsiveHeight(2)
                }}
                source={require('../../assets/Icons/Check.png')}
                resizeMode="contain"
              />
            </View>
          </View>
          <View
          >
            <Image
              style={{ height: responsiveHeight(10), width: responsiveWidth(13) }}
              source={require('../../assets/Icons/location.png')}
              resizeMode="contain"
            />
            <View style={{ position: "absolute", marginLeft: responsiveWidth(10), }}>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#C8C8C8" }}>PickUp</Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), color: "#0A0B1E" }}>Westhiemer RD, Santa Ana</Text>
              <Text style={{ marginTop: responsiveHeight(0.6), fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#C8C8C8" }}>Drop off</Text>
              <Text style={{marginTop: responsiveHeight(0.3), fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), marginTop: responsiveHeight(0.3), color: "#0A0B1E" }}>Preston Rd, Inglewood, Maine</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: responsiveWidth(5.5), marginTop: responsiveHeight(2) }}>
            <Text style={{ color: "#6369F3", fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8) }}>$870</Text>
            <Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8), marginRight: responsiveWidth(20) }}>40KM</Text>
            <Text style={{ color: "#C8C8C8", fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), }}>March15, 2023 1:24pm</Text>
          </View>
        </View>
        </ScrollView>
      </View>
    </View>

  )
}

export default MonthlyScreen

const styles = StyleSheet.create({})  