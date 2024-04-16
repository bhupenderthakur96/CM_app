import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Pressable, Image, ScrollView } from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { Rating } from "react-native-ratings";

const BottomSheet2 = ({ setStatus }) => {
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
            <Pressable style={{ width: '100%', height: '60%',paddingHorizontal:responsiveWidth(2) }}>
                <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slide }] }]}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity
  onPress={slideDown1}
  >
                    <View style={{flex: 1, height:responsiveHeight(0.3), backgroundColor: 'black',marginHorizontal:responsiveWidth(40)}} />
                        <View style={styles.mechview}>
                            <Text style={styles.mechtext1}> Washing Machine</Text>
                            <Text style={styles.mechttext2}>ID: <Text style={{ fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8), color: "#0A0B1E" }}>964</Text></Text>
                        </View>

                        <Text style={styles.mechtext3}>March 26,2024 1:24pm</Text>
                        <View
                            style={{ marginTop: responsiveHeight(1.5) }}
                        >
                            <Image
                                style={{ height: responsiveHeight(10), width: responsiveWidth(13) }}
                                source={require('../../assets/Icons/location.png')}
                                resizeMode="contain"
                            />
                            <View style={{ position: "absolute", marginLeft: responsiveWidth(10), }}>
                                <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#c0c0c5" }}>PickUp</Text>
                                <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), color: "#0A0B1E" }}>Westhiemer RD Santa Ana</Text>
                                <Text style={{ marginTop: responsiveHeight(0.6), fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#c0c0c5" }}>Drop Off</Text>
                                <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), color: "#0A0B1E" }}>Preston Rd. Inglewood, Maine</Text>
                            </View>
                        </View>
                        <View style={styles.idview}>
                            <Text style={styles.idtext}>40KM  <Text>1.10-1.5CM</Text></Text>
                            <Text style={{ fontFamily: "Poppins-Bold", color: "#6369F3" }}>$870</Text>
                        </View>
                        <View style={styles.ownerview}>
                            <Image
                                style={styles.ownerimage}
                                source={require('../../assets/Images/owner.png')} />
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
                                       marginLeft:responsiveWidth(1.5),
                                        alignSelf:"flex-start",

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
                        style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            // marginHorizontal:responsiveWidth(3),
                            borderWidth:responsiveWidth(0.2),
                            borderRadius:responsiveWidth(3.5),
                            height:responsiveHeight(7),
                            marginLeft:responsiveWidth(2),
                            marginRight:responsiveWidth(1),
                            borderColor:"#C8C8C8",
                            backgroundColor:"#F6F6FF",
                            marginTop:responsiveHeight(1.3)
                            }}>
                            <Text style={{alignSelf:"center",paddingHorizontal:responsiveWidth(5)}}>Upload job pickup image</Text>
                            <Image
                               style={{
                                height:responsiveHeight(5),
                                width:responsiveWidth(10),
                                marginRight:responsiveWidth(4),
                                alignSelf:"center"
                            }}
                                source={require('../../assets/Images/camera.png')} 
                                resizeMode='contain'
                                />
                        </View>
                        <View
                            style={{ marginTop: responsiveHeight(3), alignItems: "center" }}>
                            <TouchableOpacity
                                style={styles.button}
                                title="Go to Details"
                                onPress={() => {navigation.navigate('way')}}>
                                <Text style={styles.buttonText}>Start Job</Text>
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    </ScrollView>
                </Animated.View>
            </Pressable>

        </Pressable>
    )
}


export default BottomSheet2;


const styles = StyleSheet.create({
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
        marginTop:responsiveHeight(2)
    },
    mechtext1: {
        fontSize: responsiveFontSize(2),
        color: '#0A0B1E',
        marginLeft: responsiveHeight(1),
        fontFamily: "Poppins-Medium",
        
    },
    mechttext2: {

        color: '#85858F',
        marginRight: responsiveFontSize(2.2),
        fontFamily: "Poppins-Medium", fontSize: responsiveFontSize(1.8)
    },
    mechtext3: {
        marginLeft: responsiveHeight(2.7),
        fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3),
        color: '#A2A3A9',
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
        marginTop: responsiveHeight(1)
    },
    idtext: {
        marginLeft: responsiveHeight(3),
        fontFamily: "Poppins-Medium",
        fontSize: responsiveFontSize(1.4),
        color: '#A2A3A9',

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
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(2),
    },
})