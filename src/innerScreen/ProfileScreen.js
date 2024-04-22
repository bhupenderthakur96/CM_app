import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "black", }}>
          <View style={{ flexDirection: "row", }}>

            <Text
              style={{
                color: "white",
                textAlign: "center",
                width: '100%',
                marginVertical: responsiveHeight(2),
                fontSize: responsiveFontSize(2.2),
                fontFamily: "Poppins-Medium",
                // alignSelf:"center",
                alignSelf: "center",
                // marginLeft: responsiveWidth(-8.5),
                // fontWeight:"bold"
              }}>Profile</Text>
            <TouchableOpacity style={{ height: "100%", justifyContent: 'center', position: "absolute" }}
              onPress={() => navigation.goBack()}

            >
              <Image
                style={{
                  height: responsiveHeight(5),
                  width: responsiveWidth(6),

                  marginLeft: responsiveWidth(2.5),

                }}
                source={require('../../assets/Icons/back.png')}
                resizeMode="contain"

              />
            </TouchableOpacity>

          </View>

          <View style={styles.container}>
            <Image
              source={require('../../assets/Images/man.png')}
              resizeMode="contain"
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(30),
                // marginHorizontal:responsiveWidth(35)
                alignSelf: "center",

              }}
            />

            <View style={{ height: responsiveHeight(0.1), width: responsiveWidth(5) }}>
              <TouchableOpacity >

                <Image
                  source={require('../../assets/Icons/camera2.png')}
                  resizeMode="contain"
                  style={{
                    height: responsiveHeight(19),
                    width: responsiveWidth(20),
                    // height:122,
                    // marginHorizontal:responsiveWidth(28),

                    position: "relative",
                    left: responsiveWidth(52),
                    bottom: responsiveHeight(15)
                    // top:responsiveHeight(0.1),
                    // borderRadius:responsiveWidth(3),
                    // marginVertical:responsiveHeight(10)
                    // backgroundColor:"red"
                  }}
                />

              </TouchableOpacity>
            </View>
            <TextInput
              label="Name"
              mode="outlined"
              // outlineStyle={{ borderWidth: 0.3 }}
              outlineStyle={{
                borderWidth: responsiveWidth(0.2),
                borderColor: "#C8C8C8"
              }}
              theme={{
                roundness: 15,
                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
              }}
              // value={email}
              // onChangeText={(text) => setEmail(text)}

              // onChangeText={(email) =>setEmail(email)}
              // onBlur={()=>emailValidator()}
              // onChange={()=>{
              //   blurEmail(),
              //   emailValidator()
              // }}

              style={styles.email}
            />
            <TextInput
              label="Email"
              mode="outlined"
              // outlineStyle={{ borderWidth: 0.3 }}
              outlineStyle={{
                borderWidth: responsiveWidth(0.2),
                borderColor: "#C8C8C8"
              }}
              theme={{
                roundness: 15,
                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
              }}
              // value={email}
              // onChangeText={(text) => setEmail(text)}

              // onChangeText={(email) =>setEmail(email)}
              // onBlur={()=>emailValidator()}
              // onChange={()=>{
              //   blurEmail(),
              //   emailValidator()
              // }}

              style={styles.email}
            />
            <TextInput
              label="Phone"
              mode="outlined"
              // outlineStyle={{ borderWidth: 0.3 }}
              outlineStyle={{
                borderWidth: responsiveWidth(0.2),
                borderColor: "#C8C8C8"
              }}
              theme={{
                roundness: 15,
                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
              }}
              // value={email}
              // onChangeText={(text) => setEmail(text)}

              // onChangeText={(email) =>setEmail(email)}
              // onBlur={()=>emailValidator()}
              // onChange={()=>{
              //   blurEmail(),
              //   emailValidator()
              // }}

              style={styles.email}
            />
            <TextInput
              label="Address"
              mode="outlined"
              multiline
              numberOfLines={6}
              // outlineStyle={{ borderWidth: 0.3 }}
              outlineStyle={{
                borderWidth: responsiveWidth(0.2),
                borderColor: "#C8C8C8"
              }}
              theme={{
                roundness: 15,
                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
              }}
              // value={email}
              // onChangeText={(text) => setEmail(text)}

              // onChangeText={(email) =>setEmail(email)}
              // onBlur={()=>emailValidator()}
              // onChange={()=>{
              //   blurEmail(),
              //   emailValidator()
              // }}

              style={styles.lasttextinput}
            />
            <Text style={styles.buttonText}>Save</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: responsiveWidth(5),
    height: responsiveHeight(100)
  },
  email: {
    marginTop: responsiveHeight(1),
    height: responsiveHeight(6.8),
    fontSize: responsiveFontSize(2),
    fontFamily: 'Regular',
    marginHorizontal: responsiveWidth(5),
    backgroundColor:"#ffffff"
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#27AE60',
    justifyContent: 'center',
    marginHorizontal: responsiveWidth(7),
    padding: responsiveHeight(2),
    marginTop: responsiveHeight(8),
    borderRadius: responsiveWidth(4),
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    elevation: 4
  },
  lasttextinput: {
    width: responsiveWidth(90),
    height: responsiveHeight(13),
    alignSelf: 'center',
    // backgroundColor: '#E8E8E8',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
    backgroundColor:"#ffffff"
    // marginHorizontal:responsiveWidth(5)
  },
})