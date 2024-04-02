import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function YourOrderScreen({ navigation }) {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'gray' }]}>
                    Size
                </Text>
            );
        }
        return null;
    };

    const [value1, setValue1] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);

    const renderLabel1 = () => {
        if (value1 || isFocus1) {
            return (
                <Text style={[styles.label1, isFocus1 && { color: 'gray' }]}>
                    Size
                </Text>
            );
        }
        return null;
    };
    return (
        <ScrollView>
            <View style={styles.container}>
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
                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            marginVertical: responsiveHeight(0.8),
                            fontSize: responsiveFontSize(2),
                            fontFamily: "Poppins-Medium",
                            // alignSelf:"center"
                            marginHorizontal: responsiveWidth(30),
                            // fontWeight:"bold"
                        }}>Your Order</Text>

                </View>
                <View style={styles.contentContainer}>
                    <Image
                        style={{ height: responsiveHeight(20), width: responsiveWidth(93) }}
                        source={require('../../assets/Images/full.png')}
                        resizeMode="contain"
                    />
                    <View style={styles.weigthview}>
                        <Text style={{ fontFamily: "Poppins-Regular", fontWeight: "bold" }}>Item</Text>
                        <Text style={styles.wighttext1}>Volumatric Size(3)</Text>
                        <Text style={{ fontFamily: "Poppins-Regular", fontWeight: "bold", marginRight: responsiveWidth(2) }}>Weight(kg)</Text>
                    </View>

                    <View style={styles.weigthview1}>
                        <Text style={{ fontFamily: "Poppins-Regular", fontWeight: "bold" }}>Washing Machine</Text>
                        <Text style={{ fontFamily: "Poppins-Regular", fontWeight: "bold" }}>0.5-0.7</Text>
                        <Text style={styles.wighttext2}>50-80</Text>
                    </View>

                    <View
                        style={{
                            backgroundColor: "#F6F6FE",
                            // padding: responsiveHeight(1),
                            marginHorizontal: responsiveWidth(3),
                            marginTop: responsiveHeight(3),
                            borderRadius: responsiveWidth(3),
                            width: responsiveWidth(93),
                            height:responsiveHeight(18),
                            elevation: 1,
                            paddingVertical:responsiveHeight(2)
                        }}>

                        <View
                        >
                            <Image
                                style={{ height: responsiveHeight(12), width: responsiveWidth(13),marginTop:responsiveHeight(1) }}
                                source={require('../../assets/Images/location2.png')}
                                resizeMode="contain"
                            />
                            <View style={{ position: "absolute", marginLeft: responsiveWidth(10) }}>
                                <Text style={{fontFamily:"Poppins-Regular",fontSize:responsiveFontSize(1.5)}}>From</Text>
                                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <Text style={{fontFamily:"Poppins-Regular",fontSize:responsiveFontSize(1.5)}}>Westhiemer RD. Santa Ana</Text>
                                <Image
                                style={{ height: responsiveHeight(2.5), width: responsiveWidth(10), }}
                                source={require('../../assets/Icons/cross.png')}
                                resizeMode="contain"
                            />
                                </View>
                                <View
                                    style={{
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#CCCCCC',
                                        width:responsiveWidth(75),
                                        marginTop:responsiveHeight(1.3)
                                    }}
                                />
                                <Text style={{ marginTop: responsiveHeight(1.5),fontFamily:"Poppins-Regular",fontSize:responsiveFontSize(1.5) }}>To</Text>
                                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <Text 
                                style={{
                                    fontFamily:"Poppins-Regular",
                                    fontSize:responsiveFontSize(1.5),
                                    
                                    }}>Preston Rd.Inglewood,Maine</Text>
                                <Image
                                style={{ height: responsiveHeight(2.5), width: responsiveWidth(10) }}
                                source={require('../../assets/Icons/cross.png')}
                                resizeMode="contain"
                            />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.lastview}>
                        <Image
                            style={{
                                height: responsiveHeight(5),
                                width: responsiveWidth(9),
                                marginLeft: responsiveWidth(4)
                            }}
                            source={require('../../assets/Icons/toy.png')}
                            resizeMode="contain"
                        />
                        <Text style={{
                            fontFamily: 'Poppins-Bold',
                            fontSize: responsiveFontSize(1.8),
                            marginRight: responsiveWidth(45)
                        }}>Express</Text>
                        <Text style={{
                            fontFamily: 'Poppins-Bold',
                            fontSize: responsiveFontSize(1.8),
                            marginRight: responsiveWidth(5)
                        }}>$300</Text>
                    </View>
                    <Text 
                    style={{
                        borderBottomWidth:1,
                        color:"#6369F3",
                        marginTop:responsiveHeight(3),
                        borderBottomColor:"#6369F3",
                        fontFamily:"Poppins-Medium"
                        }}>CHANGE DELIVERY</Text>
                    <TouchableOpacity
                        style={styles.button}
                        title="Go to Details"
                        onPress={() => navigation.navigate('PickDrop')}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0B1E',
    },
    contentContainer1: {
        backgroundColor: '#E8E8E8',
        height: responsiveHeight(20),
        width: responsiveWidth(93),
        marginTop: responsiveHeight(2),
        borderRadius: responsiveWidth(5),
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        height: responsiveHeight(22),
        width: responsiveWidth(42),
        marginLeft: responsiveHeight(2),
    },
    text: {
        color: 'black',
        fontSize: responsiveFontSize(1.7),
        fontFamily: "Poppins-Regular"
    },
    text1: {
        color: 'black',
        fontSize: responsiveFontSize(1.7),
        fontFamily: "Poppins-Regular"
    },
    text2: {
        color: '#6369F3',
        fontSize: responsiveFontSize(1.6),
        fontFamily: "Poppins-Regular",
    },
    text3: {
        color: 'black',
        fontSize: responsiveFontSize(1.7),
        fontFamily: "Poppins-Regular"
    },
    speakerimage: {
        height: responsiveHeight(8),
        width: responsiveWidth(38),
        marginLeft: responsiveHeight(6),
    },
    wighttext1: {
        marginLeft: responsiveHeight(13.5),
        fontFamily: "Poppins-Regular",
        fontWeight: "bold"
    },
    wighttext2: {
        marginRight: responsiveHeight(4.5),
        fontFamily: "Poppins-Regular",
        fontWeight: "bold"
    },
    wighttext3: {
        marginRight: responsiveHeight(4.3),
        fontFamily: "Poppins-Regular",
        fontWeight: "bold"
    },
    wighttext4: {
        marginRight: responsiveHeight(4.5),
        fontFamily: "Poppins-Regular",
        fontWeight: "bold"
    },
    textinputview: {
        backgroundColor: '#ECF8F2',
        height: responsiveHeight(20),
        width: responsiveWidth(93),
        borderRadius: responsiveWidth(5),
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textinputstyle: {
        width: responsiveWidth(85),
        height: responsiveHeight(5.7),
        alignSelf: 'center',
        backgroundColor: '#F6F6FE',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(3),
    },
    dropdownview: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    dropdown: {
        width: responsiveWidth(33),
        height: responsiveHeight(6),  //
        alignSelf: 'center',
        backgroundColor: '#F6F6FE',
        fontSize: responsiveFontSize(2),
        // bottom: responsiveHeight(1.5),
        borderWidth: responsiveWidth(0.3),//
        borderColor: 'gray',//
        borderRadius: responsiveHeight(1.7),//
        paddingHorizontal: 8,//
    },
    squareimage: {
        height: responsiveHeight(10),
        width: responsiveWidth(14),
        marginTop: responsiveHeight(5),
        bottom: responsiveHeight(1.5),
    },
    // plusimage: {
    //   position: 'absolute',
    //   left: responsiveHeight(41.7),
    //   top: responsiveHeight(3.8),
    //   height: responsiveHeight(3),
    //   width: responsiveWidth(8),
    // },
    lasttextinput: {
        width: responsiveWidth(92.5),
        height: responsiveHeight(10.5),
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(2),
        fontFamily: "Poppins-Regular",
    },
    lasttext: {
        fontFamily: "Poppins-Regular",
        marginLeft: responsiveHeight(2.5),
        fontWeight: "bold"
    },
    lasttext1: {
        fontFamily: "Poppins-Regular",
        marginRight: responsiveHeight(2.5),
        fontWeight: "bold"
    },
    contentContainer: {
        backgroundColor: '#fff',
        height: responsiveHeight(100),
        borderRadius: responsiveWidth(5),
        alignItems: 'center',
    },
    weigthview: {
        flexDirection: 'row',
        fontFamily: "Poppins-Regular",
        justifyContent: 'space-between',
        height: responsiveHeight(7),
        width: responsiveWidth(93),
        paddingTop: responsiveHeight(2.5),
        borderBottomWidth: responsiveHeight(0.1),
        borderBottomColor: '#F0F0F3',

    },
    weigthview1: {
        flexDirection: 'row',
        fontFamily: "Poppins-Regular",
        justifyContent: 'space-between',
        height: responsiveHeight(4),
        width: responsiveWidth(93),
        paddingTop: responsiveHeight(1),
        borderBottomWidth: responsiveHeight(0.1),
        borderBottomColor: '#F0F0F3',
    },
    weigthview2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: responsiveHeight(4),
        width: responsiveWidth(93),
        // paddingTop: responsiveHeight(1),
        marginTop: responsiveHeight(2)
    },

    button: {
        height: responsiveHeight(7.5),
        width: responsiveWidth(90),
        backgroundColor: '#27AE60',
        marginBottom: responsiveHeight(2),
        borderRadius: responsiveWidth(5),
        elevation: 4,
        justifyContent: 'center',
        marginTop: responsiveHeight(16)
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        fontFamily: "Poppins-Bold",
       
        // marginTop:responsiveHeight(10)
    },

    // container: {
    //   backgroundColor: 'white',
    //   padding: 16,
    // },
    // dropdown: {
    //   height: 50,
    //   borderColor: 'gray',
    //   borderWidth: 0.5,
    //   borderRadius: 8,
    //   paddingHorizontal: 8,
    // },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: '#E8E8E8',
        left: responsiveWidth(2),
        top: responsiveHeight(3),
        zIndex: 999,
        paddingHorizontal: responsiveWidth(1.5),
        fontSize: 14,
    },
    label1: {
        position: 'absolute',
        backgroundColor: '#E8E8E8',
        left: responsiveWidth(38),
        top: responsiveHeight(3),
        zIndex: 99,
        paddingHorizontal: responsiveWidth(1.5),
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
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
        // elevation: 1,
        marginTop: responsiveHeight(5),
        borderWidth:responsiveWidth(0.4),
        borderColor:"#C8C8C8"
    },
});