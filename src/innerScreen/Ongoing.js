import React, { useCallback, useRef, useMemo, useState } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Rating } from "react-native-ratings";
import SwipeButton from 'rn-swipe-button';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating-widget';

const Ongoing = ({navigation}) => {
    const [rating, setRating] = useState(0);
    // hooks
    //   const sheetRef = useRef<BottomSheet>(null);
    const sheetRef = useRef(null);

    // variables
    const data = useMemo(
        () =>
            Array(50)
                .fill(0)
                .map((_, index) => `index-${index}`),
        [],
    );
    const snapPoints = useMemo(() => ['45%', '85%',], []);

    // callbacks
    const handleSheetChange = useCallback(index => {
        console.log('handleSheetChange', index);
    }, []);
    const renderItem = useCallback(
        item => (
            <View key={item} style={styles.itemContainer}>
                <Text>{item}</Text>
            </View>
        ),
        [],
    );
    return (
        <View style={styles.container}>
          
            <View style={{flex:1,backgroundColor:"black"}}>
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
                        }}>Way to drop off</Text>
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
            <View style={{
                flex:1,
                backgroundColor:"white",
                height:"100%",
                // marginHorizontal:responsiveWidth(2),
                borderRadius:responsiveWidth(4),
                // marginHorizontal:responsiveWidth(2)
                }}>
                <Image
                source={require("../../assets/Images/userMap.png")}
                style={{
                    height:responsiveHeight(200),
                    width:responsiveWidth(100),
                    borderTopLeftRadius:responsiveWidth(4),
                    borderTopRightRadius:responsiveWidth(4)
                }}
                />
            </View>
            </View>
           
            <BottomSheet
                ref={sheetRef}
                index={0}
                snapPoints={snapPoints}

                onChange={handleSheetChange}>
                <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                    <LinearGradient colors={['#D7F8EA', '#ECF8F2', '#D7F8EA']} style={styles.linear}  >
                        <View style={styles.linear}>
                            <View style={styles.ownerview}>
                                <Image
                                    style={styles.ownerimage}
                                    source={require('../../assets/Images/owner.png')} />
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={styles.ownwertext}>  Robert C.Stone</Text>


                                 
                                <StarRating
                                    rating={rating}
                                    onChange={setRating}
                                    starSize={15}
                                    starStyle={{marginHorizontal:responsiveWidth(0.1)}}
                                    style={{marginLeft:responsiveWidth(2)}}
                                />
                          

                                </View>
                                <Image
                                    style={styles.blueMessage}
                                    source={require('../../assets/Images/blueMessage.png')}
                                    resizeMode='contain'
                                    />
                                <Image
                                    style={styles.phone}
                                    source={require('../../assets/Images/phone.png')} 
                                    resizeMode='contain'
                                    />

                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between",  marginTop:responsiveHeight(1.6) }}>
                                <Text
                                    style={{
                                        fontFamily: "Poppins-Regular",
                                        fontSize: responsiveFontSize(1.3),
                                        color: "#0A0B1E",
                                      
                                    }}
                                >Accepted on: <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: responsiveFontSize(1.3), color: "#0A0B1E" }}>March 15, 2023 2:06pm</Text></Text>
                                <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#000000" }}>JOB Efficiency : <Text style={{color:"#27AE60",fontFamily:"Poppins-SemiBold",fontSize:responsiveFontSize(1.56)}}>85%</Text></Text>
                            </View>
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
                        <Text style={styles.jobtext2}>March 14, 2023 1:16pm</Text>
                    </View>
                    <View
                    style={styles.jobviewN}>
                    <Text style={styles.jobtext}>Pickup</Text>
                    <Text style={styles.jobtext2}>Westheimer RD. Santa Ana{'\n'}<Text style={{ fontSize: responsiveFontSize(1.5), fontFamily: "Poppins-Regular" ,color:"#6C6D78" }}>                 March 15, 2023 1:24pm</Text></Text>
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
                        <Text style={styles.jobtext}>Time</Text>
                        <Text style={styles.jobtext2}>30 minutes</Text>
                    </View>
                    <View
                        style={{ marginTop: responsiveHeight(3), alignItems: "center" }}>
                        <TouchableOpacity
                            style={styles.button}
                            title="Go to Details"
                            onPress={() => navigation.navigate('rate')}>
                            <Text style={styles.buttonText}>Cancel Job</Text>
                        </TouchableOpacity>

                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    linear: {
        flex: 1,
        marginHorizontal: responsiveWidth(4),
        borderRadius: responsiveWidth(3),
        height: responsiveHeight(13)
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        backgroundColor: 'white',
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: '#eee',
    },
    ownerview: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: responsiveHeight(2),
        // marginHorizontal: responsiveWidth(4),
        borderRadius: responsiveWidth(3)
    },
    ownerimage: {
        height: responsiveHeight(6),
        width: responsiveWidth(12),
        borderRadius: responsiveWidth(2),
        marginHorizontal: responsiveWidth(8)
    },
    blueMessage: {
        height: responsiveHeight(6),
        width: responsiveWidth(12),
        borderRadius: responsiveWidth(2),
        marginRight: responsiveWidth(7)
    },
    phone: {
        height: responsiveHeight(6),
        width: responsiveWidth(12),
        borderRadius: responsiveWidth(2),
        marginRight: responsiveWidth(8)
    },
    ownwertext: {
        marginRight: responsiveHeight(16),
        fontSize: responsiveFontSize(2),
        fontFamily: "Poppins-Medium",
        fontSize: responsiveFontSize(1.8),
        color: "#0A0B1E"
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
    button: {
        height: responsiveHeight(7),
        width: responsiveWidth(40),
        // backgroundColor: '#27AE60',
        marginBottom: responsiveHeight(2),
        borderRadius: responsiveWidth(5),
        borderWidth:responsiveWidth(0.2),
        borderColor:"#DC3545"
        
    },
    buttonText: {
        color: '#DC3545',
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(2),
        fontFamily:"Poppins-Medium"
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
});

export default Ongoing;