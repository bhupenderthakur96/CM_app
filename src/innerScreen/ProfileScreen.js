import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ flex: 1, backgroundColor: "black",}}>

        <View style={styles.container}>
          <Image
            source={require('../../assets/Images/man.png')}
            resizeMode="contain"
            style={{
              height:responsiveHeight(25),
              width:responsiveWidth(30),
              // marginHorizontal:responsiveWidth(35)
              alignSelf:"center",
             
            }}
          />
      
         <TouchableOpacity >

           <Image
            source={require('../../assets/Icons/camera2.png')}
            resizeMode="contain"
            style={{
              // height:responsiveHeight(5),
              // width:responsiveWidth(10),
              // height:1,
              // marginHorizontal:responsiveWidth(28),
              
              position:"absolute",
              left:responsiveWidth(50),
             bottom:0.1
              // top:responsiveHeight(0.1),
              // borderRadius:responsiveWidth(3),
              // marginVertical:responsiveHeight(10)
              // backgroundColor:"red"
            }}
          />
</TouchableOpacity>
        <TextInput
                label="Name"
                mode="outlined"
                // outlineStyle={{ borderWidth: 0.3 }}
                theme={{
                  roundness: 15,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
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
                theme={{
                  roundness: 15,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
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
                theme={{
                  roundness: 15,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
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
                theme={{
                  roundness: 15,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
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
        // height:responsiveHeight(100)
    },
  email: {
    marginTop: responsiveHeight(4),
    height: responsiveHeight(6.8),
    fontSize: responsiveFontSize(2),
    fontFamily: 'Regular',
    marginHorizontal:responsiveWidth(5)
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#27AE60',
    justifyContent: 'center',
    marginHorizontal:responsiveWidth(7),
    padding:responsiveHeight(2),
    marginTop:responsiveHeight(8),
    borderRadius:responsiveWidth(4),
    fontSize:18,
    fontFamily:"Poppins-Regular",
    elevation:4
},
lasttextinput: {
  width: responsiveWidth(90),
  height: responsiveHeight(13),
  alignSelf: 'center',
  // backgroundColor: '#E8E8E8',
  fontSize: responsiveFontSize(2),
  marginTop: responsiveHeight(2),
  // marginHorizontal:responsiveWidth(5)
},
})