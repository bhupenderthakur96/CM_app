
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const LogoScreen = () => {
    const [ask,setAsk]=useState(false);
    return (
        <View style={{ 
            height: responsiveHeight(13),
          width: responsiveWidth(92),
     alignSelf:"center",
          marginTop: responsiveHeight(2),
          borderRadius: responsiveWidth(6),
          backgroundColor: '#E2F8EE'
            
             }}>
            <View style={{ flex: 10, flexDirection: "row" }}>
                <View style={{  flex: 2 }}>
                    <Image
                        style={{
                            height: responsiveHeight(13),
                            width: responsiveWidth(28),
                            marginTop: responsiveHeight(1.8),
                        }}
                        source={require('../../assets/Images/robo.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={{  flex: 5 }}>
                    <Text style={{ 
                        textAlign: 'center',
                        marginTop: responsiveHeight(3.5),
                        fontSize:responsiveFontSize(1.4),
                        color:"#0A0B1E",
                        fontFamily:"Poppins-Medium"
                 }}>
                        Where do you want DELIVERY?,{'\n'}or just 
                        <Text style={{color:"#6369F3"}}> ASK ClickMOVERS AI</Text>
                        {'\n'}to
                        assist you.

                    </Text>
                </View>

                <View 
                style={{ 
                    
                    flex: 3,
                    flexDirection:"column", 
                    marginTop: responsiveHeight(2),
                    // marginVertical:responsiveHeight(2)
                    }}>
                        <TouchableOpacity onPress={()=>setAsk(!ask)}>
                    <Image
                        style={{ 
                            height: responsiveHeight(5), 
                            width: responsiveWidth(25), 
                           
                        }}
                        source={require('../../assets/Images/speak.png')}
                        
                    />
                    </TouchableOpacity>
                  {ask == true &&
                    <Text style={{ 
                 
                         fontFamily: 'poppins-Regular', 
                         fontSize: responsiveFontSize(1.5),
                        textAlign:"center",
                        marginTop:responsiveHeight(1)
                        }}
                         >L I S T E N I N G...</Text>
                        
                    }
                </View>
            </View>
        </View>
    )
}

export default LogoScreen

const styles = StyleSheet.create({})