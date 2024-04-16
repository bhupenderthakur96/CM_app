import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';



const MyEarning = () => {
  const barData = [
    {
      value: 230,
      label: 'Jan',
      frontColor: '#8AE08A',
      sideColor: '#23A7F3',
      topColor: '#92e6f6',
    },
    {
      value: 500,
      label: 'Feb',
      frontColor: '#8AE08A',
      sideColor: '#68BCD7',
      topColor: '#9FD4E5',
    },
    {
      value: 375,
      label: 'Mar',
      frontColor: '#8AE08A',
      sideColor: '#0FAAAB',
      topColor: '#66C9C9',
    },
    {
      value: 250,
      label: 'Apr',
      frontColor: '#8AE08A',
      sideColor: '#36D9B2',
      topColor: '#7DE7CE',
    },
    {
      value: 320,
      label: 'May',
      frontColor: '#8AE08A',
      sideColor: '#85E0E0',
      topColor: '#B0EAEB',
    },]
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Image
        source={require("../../assets/Images/line.png")}
        style={{ width: responsiveWidth(2), height: "100%", position: "absolute", marginTop: responsiveHeight(2) }}
      />
      <Image
        source={require("../../assets/Images/line.png")}
        style={{ width: responsiveWidth(2), height: "100%", alignSelf: "flex-end", position: "absolute", marginTop: responsiveHeight(2) }}
      />
      <View style={{
        flex: 1,
        backgroundColor: "white",
        marginHorizontal: responsiveWidth(2),
        borderRadius: responsiveWidth(5),

      }}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text style={{
            // backgroundColor: "#6369F3", 
            color: "black",
            padding: responsiveHeight(1),
            marginTop: responsiveHeight(4),
            borderRadius: responsiveWidth(3),
            paddingHorizontal: 15,
            fontFamily: "Poppins-Regular",
            borderWidth: 1,
          }}>Daily</Text>
          <Text style={{
            borderWidth: 1, color: "black", padding: responsiveHeight(1),
            marginTop: responsiveHeight(4), borderRadius: responsiveWidth(3), paddingHorizontal: 15, fontFamily: "Poppins-Regular"
          }}>Weekly</Text>
          <Text style={{
            backgroundColor: "#6369F3", color: "white", padding: responsiveHeight(1),
            marginTop: responsiveHeight(4), borderRadius: responsiveWidth(3), paddingHorizontal: 15, fontFamily: "Poppins-Regular"
          }}>Monthly</Text>
          <Text style={{
            borderWidth: 1, color: "black", padding: responsiveHeight(1),
            marginTop: responsiveHeight(4), borderRadius: responsiveWidth(3), paddingHorizontal: 15, fontFamily: "Poppins-Regular"
          }}>Yearly</Text>
        </View>
        <Text style={{ color: "#8AE08A", textAlign: "center", fontSize: 25, fontWeight: "bold", marginTop: responsiveHeight(4) }}>$5656</Text>
        <Text style={{ textAlign: "center", fontSize: 14 }}>March 2024</Text>
        <BarChart
          showFractionalValue
          showYAxisIndices
          hideRules
          noOfSections={4}
          maxValue={500}
          data={barData}
          barWidth={50}
          // sideWidth={45}
          // isThreeD 
          side="right"
        />

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
              <Text style={{ marginTop: responsiveHeight(0.1), fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#C8C8C8" }}>Drop off</Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), marginTop: responsiveHeight(0.3), color: "#0A0B1E" }}>Preston Rd, Inglewood, Maine</Text>
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
              <Text style={{ marginTop: responsiveHeight(0.1), fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#C8C8C8" }}>Drop off</Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), marginTop: responsiveHeight(0.3), color: "#0A0B1E" }}>Preston Rd, Inglewood, Maine</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: responsiveWidth(5.5), marginTop: responsiveHeight(2) }}>
            <Text style={{ color: "#6369F3", fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8) }}>$870</Text>
            <Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8), marginRight: responsiveWidth(20) }}>40KM</Text>
            <Text style={{ color: "#C8C8C8", fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), }}>March15, 2023 1:24pm</Text>
          </View>
        </View>
      </View>
    </View>

  )
}

export default MyEarning

const styles = StyleSheet.create({})  