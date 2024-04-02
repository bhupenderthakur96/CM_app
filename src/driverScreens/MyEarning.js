import { StyleSheet, Text, TextInput, View,Image } from 'react-native'
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
      <View style={{
        flex: 1,
        backgroundColor: "white",

        borderRadius: responsiveWidth(5),

      }}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text style={{ 
            // backgroundColor: "#6369F3", 
            color: "black", 
            padding: responsiveHeight(1),
            marginTop:responsiveHeight(4),
            borderRadius:responsiveWidth(3),
            paddingHorizontal:15,
            fontFamily:"Poppins-Regular",
            borderWidth:1 ,
            }}>Daily</Text>
          <Text style={{ borderWidth:1 , color: "black",padding: responsiveHeight(1),
            marginTop:responsiveHeight(4),borderRadius:responsiveWidth(3), paddingHorizontal:15,fontFamily:"Poppins-Regular"    }}>Weekly</Text>
          <Text style={{ backgroundColor: "#6369F3", color: "white",padding: responsiveHeight(1),
            marginTop:responsiveHeight(4),borderRadius:responsiveWidth(3), paddingHorizontal:15,fontFamily:"Poppins-Regular"    }}>Monthly</Text>
          <Text style={{ borderWidth:1 , color: "black",padding: responsiveHeight(1),
            marginTop:responsiveHeight(4),borderRadius:responsiveWidth(3), paddingHorizontal:15,fontFamily:"Poppins-Regular"    }}>Yearly</Text>
        </View>
        <Text style={{color:"#8AE08A",textAlign:"center",fontSize:25,fontWeight:"bold",marginTop:responsiveHeight(4)}}>$5656</Text>
        <Text style={{textAlign:"center",fontSize:14}}>March 2024</Text>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text style={{fontFamily:"Poppins-Regular"}}>Jobs ID:684</Text>
          <View style={{ backgroundColor: "green", borderRadius: 30, padding: 3 }}>
            <Image
              style={{ height: responsiveHeight(2), width: responsiveWidth(4) }}
              source={require('../../assets/Icons/right.png')}
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
          <View style={{ position: "absolute", marginLeft: responsiveWidth(10) }}>
            <Text style={{fontFamily:"Poppins-Regular"}}>PickUp</Text>
            <Text style={{fontFamily:"Poppins-Regular"}}>Westhiemer RDllhgjt</Text>
            <Text style={{ marginTop: responsiveHeight(2.5) }}>PickUp</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text style={{fontFamily:"Poppins-Regular"}}>$870</Text>
          <Text style={{fontFamily:"Poppins-Regular"}}>40KM</Text>
          <Text style={{fontFamily:"Poppins-Regular"}}>March15,2023 1:24pm</Text>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text style={{fontFamily:"Poppins-Regular"}}>Jobs ID:684</Text>
          <View style={{ backgroundColor: "green", borderRadius: 30, padding: 3 }}>
            <Image
              style={{ height: responsiveHeight(2), width: responsiveWidth(4) }}
              source={require('../../assets/Icons/right.png')}
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
          <View style={{ position: "absolute", marginLeft: responsiveWidth(10) }}>
            <Text style={{fontFamily:"Poppins-Regular"}}>PickUp</Text>
            <Text style={{fontFamily:"Poppins-Regular"}}>Westhiemer RDllhgjt</Text>
            <Text style={{ marginTop: responsiveHeight(2.5) }}>PickUp</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text style={{fontFamily:"Poppins-Regular"}}>$870</Text>
          <Text style={{fontFamily:"Poppins-Regular"}}>40KM</Text>
          <Text style={{fontFamily:"Poppins-Regular"}}>March15,2023 1:24pm</Text>
        </View>
      </View>
      </View>
    </View>

  )
}

export default MyEarning

const styles = StyleSheet.create({})  