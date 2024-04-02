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
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },

];

const data1 = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },

];
export default function DelivaryTypeScreen({ navigation }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date1, setDate1] = useState(null)
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
console.log("hjgg")
        const b = date;
        const a = moment(b).format("MMM Do YY"); 
        console.log("A date has been picked: ", a);
        setDate1(a);
        hideDatePicker();
    };

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
                        }}>Delivery Type</Text>

                </View>

                <View style={styles.contentContainer}>


                    <Image
                        style={{
                            height: responsiveHeight(20),
                            width: responsiveWidth(93),
                            alignSelf: "center",

                        }}
                        source={require('../../assets/Images/full.png')}
                        resizeMode="contain"
                    />
                    <Text
                        style={{
                            fontWeight: "bold",
                            marginHorizontal: responsiveWidth(5),
                            fontFamily: "Poppins-Regular",
                            fontSize: responsiveFontSize(2),
                            color: "#0A0B1E"
                        }}>Choose your Delivery Type</Text>
                    <View
                        style={{
                            flexDirection: "row", justifyContent: "space-between"
                        }}>
                        <View>
                            <Image
                                style={{ height: responsiveHeight(18), width: responsiveWidth(35), }}
                                source={require('../../assets/Images/Sameday.png')}
                                resizeMode="contain"
                            />
                        </View>
                        <View>
                            <Image
                                // style={{ height: 120, width: 120, marginTop: 10, marginRight: 10 }}
                                style={{ height: responsiveHeight(15), width: responsiveWidth(30), marginTop: responsiveHeight(1) }}
                                source={require('../../assets/Images/Economy.png')}
                                resizeMode="contain"
                            />
                        </View>
                        <View>
                            <Image
                                style={{ height: responsiveHeight(15), width: responsiveWidth(35), marginTop: responsiveHeight(1) }}
                                source={require('../../assets/Images/Express.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: responsiveWidth(5) }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontFamily: "Poppins-Regular",
                            // marginHorizontal:responsiveWidth(5),
                            fontSize: responsiveFontSize(2),
                            color: "#0A0B1E"
                        }}>Schedule a pickup{"\n"}</Text>
                        <Text style={{
                            fontFamily: "Poppins-Regular",
                            fontSize: responsiveFontSize(1.5),
                            color: "#C4C5C9"
                        }}>NOTE: Schedule Job Cost More & May Take Longer{"\n"}To Find a Driver</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>


                        <View>
                            <TextInput
                                style={{ marginHorizontal: responsiveWidth(4), width: responsiveWidth(90) }}

                                label="Select Date"
                                mode="outlined"
                                outlineStyle={{ borderWidth: 0.3 }}
                                theme={{
                                    roundness: 13,
                                    color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                                }}
                                placeholder="00-00-0000"
                                value={date1}
                                onChangeText={setDate1}

                            />
                        </View>
                        <TouchableOpacity onPress={showDatePicker}>
                            <View>
                                <Image
                                    style={{
                                        height: responsiveHeight(5),
                                        width: responsiveWidth(5),
                                        // backgroundColor:"blue",
                                        position: "absolute",
                                        right: responsiveWidth(7),
                                        top: responsiveHeight(1.1)
                                    }}
                                    source={require('../../assets/Icons/calender.png')}
                                    resizeMode="contain"
                                />
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>


                    <TextInput
                        mode="outlined"
                        multiline
                        numberOfLines={6}
                        placeholder="Enter Description"
                        outlineStyle={{ borderWidth: 1 }}

                        theme={{
                            roundness: 13,

                            colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                        }}
                        style={styles.lasttextinput}
                    />


                    <TouchableOpacity

                        title="Go to Details"
                        onPress={() => navigation.navigate('Click')}>
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
        fontFamily: 'Black',
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
        height: responsiveHeight(8),
        width: responsiveWidth(38),
        marginLeft: responsiveHeight(6),
    },
    wighttext1: {
        marginLeft: responsiveHeight(17),
    },
    wighttext2: {
        marginRight: responsiveHeight(4.5),
    },
    wighttext3: {
        marginRight: responsiveHeight(4.3),
    },
    wighttext4: {
        marginRight: responsiveHeight(4.5),
    },
    textinputview: {
        backgroundColor: '#E8E8E8',
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
        backgroundColor: '#E8E8E8',
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
        backgroundColor: '#E8E8E8',
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
        width: responsiveWidth(91),
        height: responsiveHeight(10),
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(5),
        fontFamily: "Poppins-Regular"
    },
    lasttext: {

        marginLeft: responsiveHeight(2.5)
    },
    lasttext1: {

        marginRight: responsiveHeight(2.5)
    },
    contentContainer: {
        backgroundColor: '#fff',
        height: responsiveHeight(100),
        borderRadius: responsiveWidth(5),
        // alignItems: 'center',
    },
    weigthview: {
        flexDirection: 'row',

        justifyContent: 'space-between',
        height: responsiveHeight(7),
        width: responsiveWidth(93),
        paddingTop: responsiveHeight(2.5),
        borderBottomWidth: responsiveHeight(0.1),
        borderBottomColor: '#F0F0F3',
    },
    weigthview1: {
        flexDirection: 'row',

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
    },


    buttonText: {
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#27AE60',
        justifyContent: 'center',
        marginHorizontal: responsiveWidth(7),
        padding: responsiveHeight(2),
        marginTop: responsiveHeight(5),
        borderRadius: responsiveWidth(4),
        fontFamily: "Poppins-Bold",
        fontSize:responsiveFontSize(2.2),
        elevation:4
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
        fontFamily: "Poppins-Regular"
    },
    label1: {
        position: 'absolute',
        backgroundColor: '#E8E8E8',
        left: responsiveWidth(38),
        top: responsiveHeight(3),
        zIndex: 99,
        paddingHorizontal: responsiveWidth(1.5),
        fontSize: 14,
        fontFamily: "Poppins-Regular"
    },
    placeholderStyle: {
        fontSize: 16,
        fontFamily: "Poppins-Regular"
    },
    selectedTextStyle: {
        fontSize: 16,
        fontFamily: "Poppins-Regular"
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        fontFamily: "Poppins-Regular"
    },
});