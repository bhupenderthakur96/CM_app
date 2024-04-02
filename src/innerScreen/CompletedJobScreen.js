import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import StepIndicator from 'react-native-step-indicator';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';


const CompletedJobScreen = () => {


  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#F6F6FE",
          padding: responsiveHeight(1),
          marginHorizontal: responsiveWidth(3),
          marginTop: responsiveHeight(1),
          borderRadius: responsiveWidth(3)
        }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text>Jobs ID:684</Text>
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
            <Text>PickUp</Text>
            <Text>Westhiemer RDllhgjt</Text>
            <Text style={{ marginTop: responsiveHeight(2.5) }}>PickUp</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text>$870</Text>
          <Text>40KM</Text>
          <Text>March15,2023 1:24pm</Text>
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
          <Text>Jobs ID:684</Text>
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
            <Text>PickUp</Text>
            <Text>Westhiemer RDllhgjt</Text>
            <Text style={{ marginTop: responsiveHeight(2.5) }}>PickUp</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text>$870</Text>
          <Text>40KM</Text>
          <Text>March15,2023 1:24pm</Text>
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
          <Text>Jobs ID:684</Text>
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
            <Text>PickUp</Text>
            <Text>Westhiemer RDllhgjt</Text>
            <Text style={{ marginTop: responsiveHeight(2.5) }}>PickUp</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text>$870</Text>
          <Text>40KM</Text>
          <Text>March15,2023 1:24pm</Text>
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
          <Text>Jobs ID:684</Text>
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
            <Text>PickUp</Text>
            <Text>Westhiemer RDllhgjt</Text>
            <Text style={{ marginTop: responsiveHeight(2.5) }}>PickUp</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text>$870</Text>
          <Text>40KM</Text>
          <Text>March15,2023 1:24pm</Text>
        </View>
      </View>
    </View>
  )
}

export default CompletedJobScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#FFFFFF"
  }
})