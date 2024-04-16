import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import sstyles from '../../sstyle';


const InviteFriendScreen = () => {
    return (
      
        <View style={{ flex: 1, backgroundColor: "black" }}>
              <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../assets/Images/character.png')}
                    resizeMode="contain"
                />
                <Text style={{
                    textAlign:"center",
                    fontSize:responsiveFontSize(1.7),
                     fontFamily:"Poppins-Regular",
                     color:"#0A0B1E"
                     }}>Invite a friend and earn amazing{"\n"}discounts bonuses and free rides!</Text>
                <View 
                style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginTop:responsiveHeight(3),
                    marginHorizontal:responsiveWidth(6),
                    borderWidth:2,
                    borderStyle: "dashed",
                    padding:responsiveWidth(1.8),
                    borderRadius:responsiveWidth(5)
                }}
                >
                    <Text style={{
                        fontSize:responsiveFontSize(2), 
                        fontFamily:"Poppins-Medium",
                        color:"#0A0B1E",
                        marginTop:responsiveHeight(1),
                        marginLeft:responsiveWidth(2)
                        }}>R231228001</Text>
                    <Text 
                    style={{
                        backgroundColor:"#6369F3",
                        padding:8,
                        color:"#ffffff",
                        paddingHorizontal:20,
                        borderRadius:10,
                        fontFamily:"Poppins-Medium"
                    }}
                    >
                        Copy</Text>
                </View>
                <View  style={[sstyles.buttonText,{marginTop:responsiveHeight(25)}]}>
                <Text 
                style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: responsiveFontSize(2),
                    color: '#fff',
                    textAlign: 'center',
                }}
                >Share</Text>
                </View>
            </View>
            </ScrollView>
        </View>
        
    )
}

export default InviteFriendScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: responsiveWidth(5),
        height:responsiveHeight(100)
    },
    image:{
        height:"40%",
        width:"90%",
        // backgroundColor:"red",
        marginTop:10,
        marginHorizontal:20,
        marginVertical:1
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#27AE60',
        justifyContent: 'center',
        marginHorizontal:responsiveWidth(7),
        padding:responsiveHeight(2),
        marginTop:responsiveHeight(27),
        borderRadius:responsiveWidth(4),
        fontFamily:"Poppins-Medium",
        elevation:4,
        fontSize:responsiveFontSize(2)
    },
})