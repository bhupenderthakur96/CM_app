import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';


const SettingScreen = ({ navigation }) => {
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
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: '#F0F0F3',
            padding: responsiveHeight(1)
          }}>
          <Image
            style={{ height: responsiveHeight(5), width: responsiveWidth(15) }}
            source={require('../../assets/Icons/pass.png')}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={() => { navigation.navigate("changeP") }}
          >
            <Text style={{
              alignSelf: "center",
              fontSize: responsiveFontSize(1.7),
              fontFamily: "Poppins-Medium",
              color: "#0A0B1E",
              marginTop: responsiveHeight(1.4)
            }}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: '#F0F0F3',
            padding: responsiveHeight(1)
          }}>
          <Image
            style={{ height: responsiveHeight(5), width: responsiveWidth(15), marginTop: responsiveHeight(1) }}
            source={require('../../assets/Icons/star.png')}
            resizeMode="contain"
          />
          <Text style={{
            alignSelf: "center",
            fontSize: 15,
            fontSize: responsiveFontSize(1.7),
            fontFamily: "Poppins-Medium",
            color: "#0A0B1E"
          }}>Rate the App</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1.5,
            borderBottomColor: '#F0F0F3',
            padding: responsiveHeight(1),
          }}>
          <Image
            style={{ height: responsiveHeight(5), width: responsiveWidth(15), marginTop: responsiveHeight(1) }}
            source={require('../../assets/Icons/ques.png')}
            resizeMode="contain"
          />
          <Text style={{
            alignSelf: "center",
            fontSize: responsiveFontSize(1.7),
            fontFamily: "Poppins-Medium",
            color: "#0A0B1E"
          }}>Help & FAQ</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: '#F0F0F3',
            padding: responsiveHeight(1)
          }}>
          <Image
            style={{ height: responsiveHeight(5), width: responsiveWidth(15), marginTop: responsiveHeight(1) }}
            source={require('../../assets/Icons/scan.png')}
            resizeMode="contain"
          />
          <Text
            style={{
              alignSelf: "center",
              fontSize: responsiveFontSize(1.7),
              fontFamily: "Poppins-Medium",
              color: "#0A0B1E"
            }}>
            Privacy Policy</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: '#F0F0F3',
            padding: responsiveHeight(1),
          }}>
          <Image
            style={{ height: responsiveHeight(5), width: responsiveWidth(15) }}
            source={require('../../assets/Icons/open.png')}
            resizeMode="contain"
          />
          <Text
            style={{
              alignSelf: "center",
              fontSize: responsiveFontSize(1.7),
              fontFamily: "Poppins-Medium",
              color: "#0A0B1E"
            }}>Terms & Conditions</Text>
        </View>
      </View>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: responsiveWidth(5),
    marginHorizontal: responsiveWidth(2)
  },
  image: {
    height: "40%",
    width: "90%",

  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#27AE60',
    justifyContent: 'center',
    marginHorizontal: responsiveWidth(7),
    padding: responsiveHeight(2),
    marginTop: responsiveHeight(27),
    borderRadius: responsiveWidth(4),
    fontSize: 18,
    fontFamily: "Poppins-Regular"
  },
})