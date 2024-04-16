import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    TouchableWithoutFeedback
} from 'react-native';
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import LogoScreen from '../outerScreen/LogoScreen';
import sstyles from '../../sstyle';
export default function ClickMover({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "black" }}>
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
                        }}>Pay</Text>
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
                <View
                    style={styles.containerimageview}>

                   <LogoScreen/>
                    <View style={styles.Payview}>
                        <Text style={styles.textpay}>You are paying to</Text>
                        <Text style={styles.textpay2}>clickMOVERS</Text>
                    </View>
                    <View style={styles.lastview}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: responsiveFontSize(1.8), marginLeft: responsiveWidth(5), color: "#0A0B1E" }}>Billing Amount</Text>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: responsiveFontSize(1.8), marginRight: responsiveWidth(5), color: "#0A0B1E" }}>$300</Text>

                    </View>
                    <View>
                        <TouchableOpacity
                            // onPress={()=>{navigation.navigate("Register")}}
                            onPress={toggleModal}
                            style={[sstyles.buttonText,{marginTop:responsiveHeight(35)}]}
                        >
                            <Text 
                            style={{
                                fontFamily: "Poppins-Medium",
                                fontSize: responsiveFontSize(2),
                                color: '#fff',
                                textAlign: 'center',
                            }}
                            >Pay Now
                            </Text>
                        </TouchableOpacity>
                     
                            <Modal isVisible={isModalVisible} style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <Text style={styles.title}>Please Register</Text>
                                    <Text style={styles.subtitle}>so we can keep you updated</Text>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity   onPress={toggleModal}>
                                            <View style={styles.cancelButton}>
                                                <Text style={styles.buttonText1}>Cancel</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity  onPress={()=>{navigation.navigate("Register")}}>
                                            <View style={styles.signUpButton}>
                                                <Text style={[styles.buttonText1, { color: '#fff' }]}>
                                                    Sign Up
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                      
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainer1: {
        backgroundColor: '#E8E8E8',
        height: responsiveHeight(19.8),
        width: responsiveWidth(93),
        marginTop: responsiveHeight(2),
        borderRadius: responsiveWidth(5),
        alignSelf: "center",

        flexDirection: 'row',
    },
    logo: {
        height: responsiveHeight(5),
        width: responsiveWidth(7),
        marginHorizontal: responsiveWidth(5),
    },
    logoText: {
        color: '#fff',
        fontSize: responsiveFontSize(2.6),
    },
    image: {
        height: responsiveHeight(20),
        width: responsiveWidth(42),
        marginLeft: responsiveHeight(2),
    },
    text: {
        color: 'black',
        fontSize: responsiveFontSize(1.6),
        fontFamily: 'Black',
        marginTop: responsiveHeight(2),
    },
    text1: {
        color: 'black',
        fontSize: responsiveFontSize(1.7),
        fontFamily: 'Black',
    },
    text2: {
        color: '#6369F3',
        fontSize: responsiveFontSize(1.6),
    },
    text3: {
        color: 'black',
        fontSize: responsiveFontSize(1.7),
        fontFamily: 'Black',
    },
    speakerimage: {
        height: responsiveHeight(9),
        width: responsiveWidth(38),
        marginLeft: responsiveHeight(6),
    },
    containerimageview: {
        height: responsiveHeight(100),
        backgroundColor: '#fff',
        marginTop: responsiveHeight(0.5),
        borderRadius: responsiveWidth(4),
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
    Payview: {
        height: responsiveHeight(13),
        width: responsiveWidth(93),
        backgroundColor: '#F6F6FE',
        alignSelf: "center",
        marginTop: responsiveHeight(2.8),
        // marginVertical: responsiveHeight(8),
        borderRadius: responsiveWidth(5),
        elevation: 2
        // borderWidth: responsiveWidth(.5),
        // borderColor: "#EAF8F1"
    },
    textpay: {
        textAlign: "center",
        marginTop: responsiveHeight(2),
        fontSize: responsiveFontSize(2.3),
        fontFamily: 'Poppins-Regular',
        color: "#0A0B1E"
    },
    textpay2: {
        textAlign: "center",
        fontSize: responsiveFontSize(2.3),
        color: "#6369F3",
        fontFamily: 'Poppins-Bold',
        // fontWeight:"bold"
    },
    lastview: {
        flexDirection: "row",
        height: responsiveHeight(6.5),
        width: responsiveWidth(93),
        backgroundColor: '#F6F6FE',
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: responsiveWidth(3),
        elevation: 2,
        marginTop: responsiveHeight(5)
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: 'white',
        height: responsiveHeight(33),
        width: responsiveWidth(90),
        borderRadius: responsiveWidth(5),
      },
      title: {
        textAlign: 'center',
        fontSize: responsiveFontSize(3.3),
        fontFamily: 'Poppins-Medium',
        color: '#0A0B1E',
        marginTop: responsiveHeight(5),
      },
      subtitle: {
        textAlign: 'center',
        fontSize: responsiveFontSize(2.3),
        fontFamily: 'Poppins-Medium',
        color: '#0A0B1E',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(5.5),
      },
      cancelButton: {
        height: responsiveHeight(7),
        width: responsiveWidth(35),
        borderWidth: responsiveHeight(0.2),
        borderColor: '#6369F3',
        borderRadius: responsiveWidth(4),
        textAlign: 'center',
        alignSelf: 'center',
      },
      signUpButton: {
        height: responsiveHeight(7),
        width: responsiveWidth(35),
        backgroundColor: '#27AE60',
        borderRadius: responsiveWidth(4),
        textAlign: 'center',
      },
      buttonText1: {
        textAlign: 'center',
        marginTop: responsiveHeight(1.7),
        fontFamily: 'Poppins-Medium',
        fontSize: responsiveFontSize(2),
      },
});