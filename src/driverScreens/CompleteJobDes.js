import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import StarRating from 'react-native-star-rating-widget';
const CompleteJobDes = ({navigation}) => {
    const [rating, setRating] = useState(0)
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row",}}>
                    
                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            width:'100%',
                            marginVertical:responsiveHeight(2),
                            fontSize: responsiveFontSize(2.2),
                            fontFamily: "Poppins-Medium",
                            // alignSelf:"center",
                            alignSelf:"center",
                            // marginLeft: responsiveWidth(-8.5),
                            // fontWeight:"bold"
                        }}>Completed Job Detail</Text>
                        <TouchableOpacity style={{ height:"100%",justifyContent:'center',position:"absolute"}} 
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
            <View style={styles.container1}>
                <LinearGradient colors={['#D7F8EA', '#ECF8F2', '#D7F8EA']} style={styles.linear}  >
                    <View style={styles.image}>
                        <Image
                            style={styles.ownerimage}
                            source={require('../../assets/Images/owner.png')} />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.ownwertext}>  Robert C.Stone</Text>


                            <StarRating
                                rating={rating}
                                onChange={setRating}
                                starSize={15}
                                starStyle={{ marginHorizontal: responsiveWidth(0.1) }}
                                style={{ marginLeft: responsiveWidth(2) }}
                            />


                        </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: responsiveHeight(2) }}>
                        <Text style={{
                            fontFamily: "Poppins-Regular",
                            fontSize: responsiveFontSize(1.3),
                            color: "#0A0B1E"
                        }}
                        >Accepted on: <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: responsiveFontSize(1.3), color: "#0A0B1E" }}>March 15, 2023 2:06pm</Text></Text>
                        <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#000000" }}>JOB Efficiency : <Text style={{ color: "#27AE60", fontFamily: "Poppins-Bold", }}>85%</Text></Text>
                    </View>
                </LinearGradient>
                <View
                    style={styles.jobview}>
                    <Text style={styles.jobtext}>Job Id</Text>
                    <Text style={styles.jobtext2}>183</Text>
                </View>
                <View
                    style={styles.jobview2}>
                    <Text style={styles.jobtext}>Item</Text>
                    <Text style={styles.jobtext2}>Dining Table</Text>
                </View>
                <View
                    style={styles.jobview2}>
                    <Text style={styles.jobtext}>Created on</Text>
                    <Text style={styles.jobtext2}>3.2 km</Text>
                </View>
                <View
                    style={styles.jobviewN}>
                    <Text style={styles.jobtext}>Pickup</Text>
                    <Text style={styles.jobtext2}>Westheimer RD. Santa Ana{'\n'}<Text style={{ fontSize: responsiveFontSize(1.5), fontFamily: "Poppins-Regular" ,color:"#6C6D78" }}>                 March 15, 2023 1:24pm</Text></Text>
                </View>
                <View
                    style={styles.jobview2}>
                    <Text style={styles.jobtext}>Accepted On</Text>
                    <Text style={styles.jobtext2}>30 minutes</Text>
                </View>
                <View
                    style={styles.jobviewN}>
                    <Text style={styles.jobtext}>Drop off</Text>
                    <Text style={styles.jobtext2}>Preston Rd. Inglewood, Maine{'\n'}<Text style={{ fontSize: responsiveFontSize(1.5), fontFamily: "Poppins-Regular",color:"#6C6D78" }}>                      March 15, 2023 1:24pm</Text></Text>
                </View>
                <View
                    style={styles.jobview2}>
                    <Text style={styles.jobtext}>Distance</Text>
                    <Text style={styles.jobtext2}>3.2 Km</Text>
                </View>
                <View
                    style={styles.jobview2}>
                    <Text style={styles.jobtext}>Estimated time</Text>
                    <Text style={styles.jobtext2}>30 minutes</Text>
                </View>
                <View
                    style={styles.jobview2}>
                    <Text style={styles.jobtext}>Weight</Text>
                    <Text style={styles.jobtext2}>40-80Kg</Text>
                </View>
                <View
                    style={styles.jobview2}>
                    <Text style={styles.jobtext}>Payment Method</Text>
                    <Image
                        style={styles.cashview}
                        source={require('../../assets/Images/cash.png')} resizeMode='contain' />
                    <Text style={styles.jobtext2}>Cash</Text>
                </View>
                <View
                    style={styles.jobview2}>
                    <Text style={styles.jobtext}>Total</Text>
                    <Text style={styles.jobtext3}>$870</Text>
                </View>
            </View>
        </View>
    )
}

export default CompleteJobDes

const styles = StyleSheet.create({
    image: {
        flexDirection: "row",
        marginTop: responsiveHeight(2),
        marginHorizontal: responsiveWidth(4)
    },
    linear: {
        marginHorizontal: responsiveWidth(3),
        marginTop: responsiveHeight(2),
        borderRadius: responsiveWidth(2),
        height: responsiveHeight(13)
    },
    container: {
        flex: 1,
        backgroundColor: "#0A0B1E"
    },
    container1: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        // marginTop: responsiveHeight(5),
        borderRadius: responsiveWidth(4)
    },
    ownerimage: {
        height: responsiveHeight(6),
        width: responsiveWidth(12),
        borderRadius: responsiveWidth(2),
        // marginHorizontal: responsiveWidth(8)
    },

    jobview: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        height: responsiveHeight(5),
        borderBottomColor: "#F0F0F3",
        borderBottomWidth: responsiveHeight(.2),
        marginTop: responsiveHeight(2),

    },
    jobtext: {
        fontSize: responsiveFontSize(1.8),
        marginLeft: responsiveHeight(2),
        fontFamily: "Poppins-Regular"
    },
    jobtext2: {
        marginRight: responsiveHeight(2),
        fontFamily: "Poppins-Bold",
        color: "#000000",
        fontSize: responsiveFontSize(1.8),
    },
    jobtext3: {
        marginRight: responsiveHeight(2),
        fontFamily: "Poppins-Bold",
        color: "#27AE60",
        fontSize: responsiveFontSize(1.8),
    },
    jobview2: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        height: responsiveHeight(5),
        borderBottomColor: "#F0F0F3",
        borderBottomWidth: responsiveHeight(.1),
        paddingTop: responsiveHeight(2),
        height: responsiveHeight(6)
    },
    jobviewN: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        // height: responsiveHeight(100),
        borderBottomColor: "#F0F0F3",
        borderBottomWidth: responsiveHeight(.1),
        paddingTop: responsiveHeight(2),
        height: responsiveHeight(10)
    },
    cashview: {
        height: responsiveHeight(5),
        width: responsiveWidth(7),
        marginLeft: responsiveHeight(18),
    },
    ownwertext: {
        marginRight: responsiveHeight(16),
        fontSize: responsiveFontSize(2),
        fontFamily: "Poppins-Medium",
        fontSize: responsiveFontSize(1.8),
        color: "#0A0B1E"
    },
})