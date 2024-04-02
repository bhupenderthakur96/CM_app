import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
export default function ClickMover({navigation}) {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "black" }}>
            <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={{
                                height: responsiveHeight(3),
                                width: responsiveWidth(5),
                                marginTop: responsiveHeight(1),
                                marginLeft: responsiveWidth(1)
                            }}
                            source={require('../../assets/Icons/back.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                   

                </View>
                <View
                    style={styles.containerimageview}>
                        
                         <Image
                        style={{
                            height: responsiveHeight(20),
                            width: responsiveWidth(93),
                            alignSelf: "center",

                        }}
                        source={require('../../assets/Images/full.png')}
                        resizeMode="contain"
                    />
                    <View style={styles.Payview}>
                        <Text style={styles.textpay}>You are paying to</Text>
                        <Text style={styles.textpay2}>clickMOVERS</Text>
                    </View>
                    <View style={styles.lastview}>
                        <Text style={{    fontFamily: 'Poppins-Bold',fontSize:responsiveFontSize(1.8),marginLeft:responsiveWidth(5)}}>Billing Amount</Text>
                        <Text style={{    fontFamily: 'Poppins-Bold',fontSize:responsiveFontSize(1.8),marginRight:responsiveWidth(5)}}>$300</Text>

                    </View>
                    <View>
                        <TouchableOpacity
                        onPress={()=>{navigation.navigate("YourOrder")}}
                        >
                            <Text style={{
                                color: '#fff',
                                textAlign: 'center',
                                backgroundColor: '#27AE60',
                                justifyContent: 'center',
                                marginHorizontal: responsiveWidth(5),
                                padding: responsiveHeight(2.5),
                                marginTop: responsiveHeight(31),
                                borderRadius: responsiveWidth(4),
                                fontFamily: 'Poppins-Bold',
                                elevation:4,
                                fontSize:responsiveFontSize(2)
                            }}>Pay Now
                            </Text>
                        </TouchableOpacity>

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
        marginTop: responsiveHeight(2),
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
        backgroundColor: '#ECF8F2',
        alignSelf: "center",
        marginTop:responsiveHeight(2.8),
        // marginVertical: responsiveHeight(8),
        borderRadius: responsiveWidth(5),
        elevation:2
        // borderWidth: responsiveWidth(.5),
        // borderColor: "#EAF8F1"
    },
    textpay: {
        textAlign: "center",
        marginTop: responsiveHeight(2),
        fontSize: responsiveFontSize(2.6),
        fontFamily: 'Poppins-Medium',
    },
    textpay2: {
        textAlign: "center",
        fontSize: responsiveFontSize(2.7),
        color: "#6369F3",
        fontFamily: 'Poppins-Bold',
        // fontWeight:"bold"
    },
    lastview: {
        flexDirection: "row",
        height: responsiveHeight(6.5),
        width: responsiveWidth(93),
        backgroundColor: '#ECF8F2',
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: responsiveWidth(3),
        elevation:2,
        marginTop:responsiveHeight(5)
    },
});