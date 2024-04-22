import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react'
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Dropdown } from 'react-native-element-dropdown';
import sstyles from '../../sstyle';

import Share from 'react-native-share';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
];

const SupportScreen = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const share = () => {

        const options = {
            message: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'"
        }


        Share.open(options)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    }

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Subject
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/Images/char2.png')}
                        resizeMode="contain"
                    />
                    <Text style={{
                        textAlign: "center",
                        fontSize: responsiveFontSize(1.5),
                        fontFamily: "Poppins-Regular",
                        color: "#0A0B1E",
                        backgroundColor: "#FFFFFF"

                    }}>Please feel free to talk to us if{"\n"}you have any questions. We will{"\n"}endeavour to answer within 24 hours</Text>
                    <TextInput
                        label="Subject"
                        mode="outlined"
                        placeholder='Real-time delivery tracking'
                        outlineStyle={{
                            borderWidth: responsiveWidth(0.2),
                            borderColor: "#C8C8C8"
                        }}
                        theme={{
                            roundness: 15,
                            colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
                        }}
                        style={{ marginHorizontal: responsiveWidth(5), marginTop: responsiveHeight(2), backgroundColor: "#FFFFFF" }}
                    // style={styles.email}
                    />
                    <TextInput
                        mode="outlined"
                        multiline
                        numberOfLines={6}
                        placeholder="Enter Description"
                        placeholderTextColor={"#84858F"}
                        outlineStyle={{
                            borderWidth: responsiveWidth(0.2),
                            borderColor: "#C8C8C8"
                        }}

                        theme={{
                            roundness: 15,
                            colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
                        }}
                        style={styles.lasttextinput}
                    />
                    <View style={[sstyles.buttonText, { marginTop: responsiveHeight(5) }]}>
                        <TouchableOpacity onPress={share}>
                            <Text
                                style={{
                                    fontFamily: "Poppins-Medium",
                                    fontSize: responsiveFontSize(2),
                                    color: '#fff',
                                    textAlign: 'center',
                                }}
                            >Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SupportScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: responsiveWidth(5),
        height: responsiveHeight(100)
    },
    image: {
        height: "28%",
        width: "90%",
        // backgroundColor:"red",
        marginTop: responsiveHeight(10),
        alignSelf: "center"
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#27AE60',
        justifyContent: 'center',
        marginHorizontal: responsiveWidth(7),
        padding: responsiveHeight(2),
        marginTop: responsiveHeight(7),
        borderRadius: responsiveWidth(4),
        fontSize: responsiveFontSize(2),
        fontFamily: "Poppins-Regular",
        elevation: 4
    },
    lasttextinput: {
        width: responsiveWidth(91),
        height: responsiveHeight(13),
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(5),

    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginHorizontal: 20,
        marginTop: 20

    },
    icon: {
        marginRight: 5,
    },
    label: {
        // position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
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
})