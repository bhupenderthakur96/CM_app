import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';


const InviteFriendScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <View 
        style={{ 
          flexDirection: "row", 
          borderBottomWidth: 1, 
          borderBottomColor: '#F0F0F3',
          padding:responsiveHeight(1)
          }}>
          <Image
            style={{ height: responsiveHeight(5), width: responsiveWidth(15) }}
            source={require('../../assets/Icons/pass.png')}
            resizeMode="contain"
          />
          <Text style={{ 
            alignSelf: "center",
            fontSize:15,
            fontWeight:"bold" 
         }}>Change Password</Text>
        </View>

        <View 
        style={{ 
          flexDirection: "row", 
          borderBottomWidth: 1, 
          borderBottomColor: '#F0F0F3', 
          padding:responsiveHeight(1)
          }}>
          <Image
          style={{ height: responsiveHeight(5), width: responsiveWidth(15),marginTop: responsiveHeight(1) }}
            source={require('../../assets/Icons/star.png')}
            resizeMode="contain"
          />
          <Text style={{ 
            alignSelf: "center",
            fontSize:15,
            fontWeight:"bold", 
             }}>Rate the App</Text>
        </View>

        <View 
        style={{ 
          flexDirection: "row", 
          borderBottomWidth: 1.5, 
          borderBottomColor: '#F0F0F3', 
          padding:responsiveHeight(1),
          }}>
          <Image
             style={{ height: responsiveHeight(5), width: responsiveWidth(15),marginTop: responsiveHeight(1) }}
            source={require('../../assets/Icons/ques.png')}
            resizeMode="contain"
          />
          <Text style={{ 
            alignSelf: "center",
            fontSize:15,
            fontWeight:"bold" 
            }}>Help & FAQ</Text>
        </View>

        <View 
        style={{ 
          flexDirection: "row",
          borderBottomWidth: 1, 
          borderBottomColor: '#F0F0F3',
          padding:responsiveHeight(1)
           }}>
          <Image
             style={{ height: responsiveHeight(5), width: responsiveWidth(15),marginTop: responsiveHeight(1) }}
            source={require('../../assets/Icons/scan.png')}
            resizeMode="contain"
          />
          <Text 
          style={{ 
            alignSelf: "center",
            fontSize:15,
            fontWeight:"bold" 
             }}>
            Privacy Policy</Text>
        </View>

        <View 
        style={{ 
          flexDirection: "row", 
          borderBottomWidth: 1, 
          borderBottomColor: '#F0F0F3', 
          padding:responsiveHeight(1),
          }}>
          <Image
            style={{ height: responsiveHeight(5), width: responsiveWidth(15) }}
            source={require('../../assets/Icons/open.png')}
            resizeMode="contain"
          />
          <Text 
          style={{ 
            alignSelf: "center",
            fontSize:15,
            fontWeight:"bold" 
            }}>Terms & Conditions</Text>
        </View>
      </View>
    </View>
  )
}

export default InviteFriendScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: responsiveWidth(5),
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