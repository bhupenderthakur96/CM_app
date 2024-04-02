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
                <Image
                    style={styles.image}
                    source={require('../../assets/Images/character.png')}
                    resizeMode="contain"
                />
                <Text style={{textAlign:"center",fontSize:17, fontFamily:"Poppins-Regular"}}>Invite a friend and earn amazing{"\n"}discounts bonuses and free rides!</Text>
                <View 
                style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginTop:30,
                    marginHorizontal:25,
                    borderWidth:2,
                    borderStyle: "dashed",
                    padding:10,
                    borderRadius:16
                }}
                >
                    <Text style={{fontSize:18, fontFamily:"Poppins-Regular"}}>R231228001</Text>
                    <Text 
                    style={{
                        backgroundColor:"#6369F3",
                        padding:8,
                        color:"#ffffff",
                        paddingHorizontal:20,
                        borderRadius:10,
                        fontFamily:"Poppins-Regular"
                    }}
                    >
                        Copy</Text>
                </View>
                <Text style={styles.buttonText}>Share</Text>
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
        fontSize:18,
        fontFamily:"Poppins-Regular",
        elevation:4
    },
})