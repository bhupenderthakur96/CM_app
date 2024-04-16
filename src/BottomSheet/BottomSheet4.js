import React, { useEffect, useState } from 'react';
import {
    View,
    Text, StyleSheet, TextInput, TouchableOpacity, Animated, Pressable, Image, ScrollView,
    SafeAreaView, StatusBar, Button
} from 'react-native';
import thumbIcon from '../../assets/thumbIcon.png';
import Styles from '../../Styles';

import SwipeButton from 'rn-swipe-button';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { Rating } from "react-native-ratings";
import SlideButton from 'rn-slide-button';

const BottomSheet4 = ({ setStatus }) => {
    const [disableCBButton, setDisableCBButton] = useState(false)
    const defaultStatusMessage = 'swipe status appears here';
    const [swipeStatusMessage, setSwipeStatusMessage] = useState(
        defaultStatusMessage,
    );
    setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);
    const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);
    const renderSubHeading = (heading) => (
        <Text style={styles.subHeading}>{heading}</Text>
    );
    let forceResetLastButton = null;

    const CheckoutButton = () => {
        return (
            <View style={{ width: 100, height: 30, backgroundColor: '#C70039', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#ffffff' }}>Checkout</Text>
            </View>
        );
    }



    const slide = React.useRef(new Animated.Value(300)).current;
    const navigation = useNavigation();

    const slideUp = () => {
        // Will change slide up the bottom sheet
        Animated.timing(slide, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
        }).start();
    };

    const slideDown = () => {
        // Will slide down the bottom sheet
        Animated.timing(slide, {
            toValue: 300,
            duration: 800,
            useNativeDriver: true,
        }).start();
    };
    const slideDown1 = () => {
        // Will slide down the bottom sheet
        Animated.timing(slide, {
            toValue: 10,
            duration: 800,
            useNativeDriver: true,
        }).start();
    };

    React.useEffect(() => {
        slideUp()
    })


    const closeModal = () => {
        slideDown();

        // setTimeout(() => {
        //     setStatus(false);
        // }, 800)

    }


    return (
        <Pressable onPress={closeModal} style={styles.backdrop}>
            <Pressable style={{ width: '100%', height: '70%',paddingHorizontal:responsiveWidth(2) }}>
                <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slide }] }]}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity
                            onPress={slideDown1}
                        >
                            <View style={{ flex: 1, height: responsiveHeight(0.3), backgroundColor: 'black', marginHorizontal: responsiveWidth(40) }} />
                            <View style={styles.ownerview}>
                                <Image
                                    style={styles.ownerimage}
                                    source={require('../../assets/Images/owner.png')}
                                    resizeMode='contain'
                                    />
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={styles.ownwertext}>  Robert C.Stone</Text>

                                    <Rating
                                        // type='custom'
                                        //   ratingImage={WATER_IMAGE}
                                        ratingColor='#3498db'
                                        ratingBackgroundColor='#c8c7c8'
                                        ratingCount={5}
                                        imageSize={14}
                                        onFinishRating={this.ratingCompleted}
                                        style={{
                                            marginLeft: responsiveWidth(1.5),
                                            alignSelf: "flex-start",

                                        }}
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
                            <View
                                style={styles.jobview}>
                                <Text style={styles.jobtext}>Job Id</Text>
                                <Text style={styles.jobtext2}>183</Text>
                            </View>
                            <View
                                style={styles.jobview2}>
                                <Text style={styles.jobtext}>Date & Time</Text>
                                <Text style={styles.jobtext2}>March 20, 2024 11:15 AM</Text>
                            </View>
                            <View
                                style={styles.jobview2}>
                                <Text style={styles.jobtext}>Distance</Text>
                                <Text style={styles.jobtext2}>3.2 km</Text>
                            </View>
                            <View
                                style={styles.jobview2}>
                                <Text style={styles.jobtext}>Weight</Text>
                                <Text style={styles.jobtext2}>40-80 kg</Text>
                            </View>
                            <View
                                style={styles.jobview2}>
                                <Text style={styles.jobtext}>Time</Text>
                                <Text style={styles.jobtext2}>30 minutes</Text>
                            </View>
                            <View
                                style={styles.jobview2}>
                                <Text style={styles.jobtext}>Payment Method</Text>
                                <Image
                                    style={styles.cashview}
                                    source={require('../../assets/Images/cash.png')} resizeMode='contain' />
                                <Text style={styles.jobtext2}>Cash</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: responsiveHeight(.1), borderTopColor: "#F0F0F3" }}>
                                <Text style={styles.jobtext}>Total</Text>
                                <Text style={styles.jobtext3}>$870</Text>
                            </View>

                            <View style={styles.secandlastimage}>
                                <Text style={{ paddingHorizontal: responsiveWidth(4) }}>Change job pickup image</Text>
                                <Image
                                    style={styles.meterialimageview}
                                    source={require('../../assets/Images/material.png')}
                                    resizeMode='contain'
                                    />
                            </View>



                            <View style={styles.secandlastimage1}>
                                <Text>Upload your Drop off image</Text>
                                <Image
                                    style={styles.cemeraview}
                                    source={require('../../assets/Images/camera.png')}
                                    resizeMode='contain'
                                    />
                            </View>


                            {/* <View
                            style={{ marginTop: responsiveHeight(3), alignItems: "center" }}>
                            <TouchableOpacity
                                style={styles.button}
                                title="Go to Details"
                                onPress={() => navigation.navigate('rate')}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                         
                        </View> */}
                            <View style={styles.container}>
                                <SwipeButton
                                    // thumbIconImageSource={thumbIcon}
                                    thumbIconStyles={{ height: 20, width: 20 }}
                                    railBackgroundColor="#D9D9D9"
                                    title="Slide to confirm"
                                    // titleColor='white'
                                    thumbIconBackgroundColor="#FFFFFF"
                                    railFillBackgroundColor='#27AE60'
                                    railBorderColor='#D9D9D9'
                                    onSwipeSuccess={() => navigation.navigate('rate')}
                                    resizeMode="contain"

                                />
                            </View>
                        </TouchableOpacity
                        >
                    </ScrollView>
                </Animated.View>
            </Pressable>

        </Pressable>
    )
}


export default BottomSheet4;


const styles = StyleSheet.create({
    container: {
        marginTop: responsiveHeight(3),
    },
    backdrop: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    bottomSheet: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    input: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#40A2E3',
        alignItems: 'center',
        marginTop: 15
    },
    textinputmainview: {
        height: responsiveHeight(20),
        width: responsiveWidth(93),
        backgroundColor: '#fff',
        position: 'relative',
        left: responsiveHeight(2),
        bottom: responsiveHeight(9),
        borderRadius: responsiveWidth(5),
    },
    mechview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: responsiveHeight(1.5),
    },
    mechtext1: {
        fontSize: responsiveFontSize(2.9),
        color: 'black',
        marginLeft: responsiveHeight(1),
    },
    mechttext2: {
        fontSize: responsiveFontSize(2.9),
        color: '#6369F3',
        marginRight: responsiveFontSize(2.2),
    },
    mechtext3: {
        marginLeft: responsiveHeight(2.7),
    },
    Locationimage: {
        height: responsiveHeight(12),
        width: responsiveWidth(50),
        marginHorizontal: responsiveHeight(2.3),
    },
    idview: {
        flexDirection: 'row',
        height: responsiveHeight(3.7),
        borderBottomWidth: responsiveHeight(0.1),
        borderBottomColor: '#F0F0F3',
        justifyContent: 'space-between',
    },
    idtext: {
        marginLeft: responsiveHeight(3),
    },
    ownerview: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: responsiveHeight(2)
    },
    ownerimage: {
        height: responsiveHeight(5),
        width: responsiveWidth(10),
        borderRadius: responsiveWidth(2),
        marginHorizontal: responsiveWidth(8)
    },
    ownwertext: {
        marginRight: responsiveHeight(16),
        fontSize: responsiveFontSize(2),
        fontFamily: "Poppins-Medium",
        fontSize: responsiveFontSize(1.8),
        color: "#0A0B1E"
    },
    button: {
        height: responsiveHeight(7.5),
        width: responsiveWidth(88),
        backgroundColor: '#27AE60',
        marginBottom: responsiveHeight(2),
        borderRadius: responsiveWidth(4),
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: responsiveFontSize(2.4),
        marginTop: responsiveHeight(2),
    },
    secandlastview: {
        height: responsiveHeight(12),
        width: responsiveWidth(93),
        backgroundColor: "pink",
        borderRadius: responsiveWidth(4),
        marginTop: responsiveHeight(1)
    },
    secandlastimage: {
        backgroundColor: "#F6F6FF",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: responsiveWidth(2),
        borderWidth: responsiveWidth(0.3),
        borderRadius: responsiveWidth(5),
        marginHorizontal: responsiveWidth(6),
        borderColor: "#C8C8C8",
        marginTop: responsiveHeight(4)
    },
    secandlastimage1: {
        backgroundColor: "#F6F6FF",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: responsiveWidth(3.5),
        marginTop: responsiveHeight(2),
        borderWidth: responsiveWidth(0.3),
        borderRadius: responsiveWidth(5),
        borderColor: "#C8C8C8",
        marginHorizontal: responsiveWidth(6),
    },
    meterialimageview: {
        height: responsiveHeight(7),
        width: responsiveWidth(23),
        // marginTop: responsiveHeight(1)
        marginLeft: responsiveWidth(6)
    },
    cemeraview: {
        height: responsiveHeight(5),
        width: responsiveWidth(10),
        // marginTop: responsiveHeight(2.7),
        marginLeft: responsiveWidth(12),
        alignSelf: "flex-end"
    },
    jobview: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        height: responsiveHeight(5),
        borderBottomColor: "#F0F0F3",
        borderBottomWidth: responsiveHeight(.2)
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
        fontSize: responsiveFontSize(2.2)
    },
    jobview2: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        height: responsiveHeight(5),
        borderBottomColor: "#F0F0F3",
        borderBottomWidth: responsiveHeight(.1)
    },
    cashview: {
        height: responsiveHeight(5),
        width: responsiveWidth(7),
        marginLeft: responsiveHeight(15),
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
        marginRight: responsiveWidth(3)
    },
})