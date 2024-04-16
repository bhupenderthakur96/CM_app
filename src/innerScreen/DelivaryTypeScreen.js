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
import LogoScreen from '../outerScreen/LogoScreen';
import sstyles from '../../sstyle';

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
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [dd, setDd] = useState(false);
    const [date1, setDate1] = useState(null)
    const [date2, setDate2] = useState(null)
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
        const a = moment(b).format('MMMM Do YYYY');
        console.log("A date has been picked: ", a);
        setDate1(a);
        hideDatePicker();
    };

    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };

    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };
    const handleConfirm2 = (datee) => {
        // console.warn("A date has been picked2: ", datee);
        console.log("hjgg")
        const b = datee;
        const a = moment(b).format("h:mm:ss a");
        console.log("A date has been picked2: ", a);
        setDate2(a);
        hideDatePicker2();
    };
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        console.log(option,"ghjh")
        setSelectedOption(option === selectedOption ? null : option);
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: "row", }}>

                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            width: '100%',
                            marginVertical: responsiveHeight(2),
                            fontSize: responsiveFontSize(2.2),
                            fontFamily: "Poppins-Medium",
                            alignSelf: "center",
                        }}>Delivery Type</Text>
                    <TouchableOpacity style={{ height: "100%", justifyContent: 'center', position: "absolute" }}
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

                <View style={styles.contentContainer}>
                    <LogoScreen />
                    <Text
                        style={{
                            marginHorizontal: responsiveWidth(5),
                            fontFamily: "Poppins-Medium",
                            fontSize: responsiveFontSize(1.7),
                            color: "#0A0B1E",
                            marginTop: responsiveHeight(1)
                        }}>Choose your Delivery Type</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            marginTop: responsiveHeight(1),
                            width: "100%",
                            height: "20%"
                        }}>
                        <View>
                            <TouchableOpacity onPress={() => handleOptionSelect("sameday")}>
                                <Image
                                    style={{
                                        height: selectedOption === "sameday" ? responsiveHeight(16) : responsiveHeight(16),
                                        width: selectedOption === "sameday" ? responsiveWidth(30) : responsiveWidth(30),
                                        marginTop: selectedOption === "sameday" ? responsiveHeight(1) : responsiveHeight(1),
                                        marginLeft: responsiveWidth(2)
                                    }}
                                    source={selectedOption === "sameday" ? require('../../assets/Images/SamedayBlue.png') : require('../../assets/Images/SamedayW.png')}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => handleOptionSelect("economy")}>
                                <Image
                                    style={{
                                        height: selectedOption === "economy" ? responsiveHeight(16) : responsiveHeight(16),
                                        width: selectedOption === "economy" ? responsiveWidth(32) : responsiveWidth(32),
                                        marginTop: selectedOption === "economy" ? responsiveHeight(1) : responsiveHeight(1),
                                        marginLeft: responsiveWidth(2)
                                    }}
                                    source={selectedOption === "economy" ? require('../../assets/Images/EconomyB.png') : require('../../assets/Images/EconomyW.png')}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => handleOptionSelect("express")}>
                                <Image
                                    style={{
                                        height: selectedOption === "express" ? responsiveHeight(16) : responsiveHeight(16),
                                        width: selectedOption === "express" ? responsiveWidth(30) : responsiveWidth(30),
                                        marginTop: selectedOption === "express" ? responsiveHeight(1) : responsiveHeight(1),
                                        marginLeft: responsiveWidth(2)
                                    }}
                                    source={selectedOption === "express" ? require('../../assets/Images/ExpressB.png') : require('../../assets/Images/ExpressW.png')}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: responsiveWidth(5) }}>
                        <Text style={{

                            fontFamily: "Poppins-Medium",
                            // marginHorizontal:responsiveWidth(5),
                            fontSize: responsiveFontSize(1.5),
                            color: "#0A0B1E",
                            marginTop: responsiveHeight(1)
                        }}>Schedule a pickup{"\n"}</Text>
                        <Text style={{
                            fontFamily: "Poppins-Regular",
                            fontSize: responsiveFontSize(1.4),
                            color: "#6C6D78"
                        }}>NOTE: Schedule Job Cost More & May Take Longer{"\n"}To Find a Driver</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: responsiveHeight(1.5) }}>


                        <View>

                            <TextInput
                                style={{ marginHorizontal: responsiveWidth(4), width: responsiveWidth(90), backgroundColor: "#FFFFFF", marginTop: responsiveHeight(3) }}

                                label="Select Date"
                                mode="outlined"
                                outlineStyle={{
                                    borderWidth: responsiveWidth(0.2),
                                    borderColor: "#C8C8C8"
                                }}
                                theme={{
                                    roundness: 15,
                                    colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
                                }}
                                placeholder="00-00-0000"
                                placeholderTextColor={"#C8C8C8"}
                                value={date1}
                                onChangeText={setDate1}

                            />

                            <TouchableOpacity onPress={showDatePicker}>
                                <View>
                                    <Image
                                        style={{
                                            height: responsiveHeight(5),
                                            width: responsiveWidth(5),
                                            // backgroundColor:"blue",
                                            position: "absolute",
                                            right: responsiveWidth(7),
                                            bottom: responsiveHeight(1.2)
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
                            <TextInput
                                style={{ marginHorizontal: responsiveWidth(4), width: responsiveWidth(90), backgroundColor: "#FFFFFF", marginTop: responsiveHeight(3) }}

                                label="Select Time"
                                mode="outlined"
                                outlineStyle={{
                                    borderWidth: responsiveWidth(0.2),
                                    borderColor: "#C8C8C8"
                                }}
                                theme={{
                                    roundness: 15,
                                    colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
                                }}
                                placeholder="00-00-0000"
                                placeholderTextColor={"#C8C8C8"}
                                value={date2}
                                onChangeText={setDate1}

                            />
                            <TouchableOpacity onPress={showDatePicker2}>
                                <View>
                                    <Image
                                        style={{
                                            height: responsiveHeight(5),
                                            width: responsiveWidth(5.5),
                                            // backgroundColor:"blue",
                                            position: "absolute",
                                            right: responsiveWidth(7),
                                            bottom: responsiveHeight(1.2)
                                        }}
                                        source={require('../../assets/Icons/time.png')}
                                        resizeMode="contain"
                                    />
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible2}
                                        mode="time"
                                        onConfirm={handleConfirm2}
                                        onCancel={hideDatePicker2}
                                    />
                                </View>
                            </TouchableOpacity>

                        </View>


                    </View>


                    <TextInput
                        mode="outlined"
                        multiline
                        numberOfLines={6}
                        placeholder="Enter Description"
                        outlineStyle={{
                            borderWidth: responsiveWidth(0.2),
                            borderColor: "#C8C8C8"
                        }}

                        theme={{
                            roundness: 13,

                            colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                        }}
                        style={{
                            ...styles.lasttextinput,
                            placeholderTextColor: '#0A0B1E', // CSS for placeholder color
                        }}
                        placeholderTextColor={"#C8C8C8"}
                    />
                    <TouchableOpacity  style={[sstyles.buttonText, { marginTop: responsiveHeight(5),bottom:responsiveHeight(1) }]}
                        title="Go to Details"
                        onPress={() => navigation.navigate('Click')}>
                        <Text 
                       style={{
                        fontFamily: "Poppins-Medium",
                        fontSize: responsiveFontSize(2),
                        color: '#fff',
                        textAlign: 'center',
                       }}
                        >Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',


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
        fontSize: responsiveFontSize(1.8),
        marginTop: responsiveHeight(3.5),
        fontFamily: "Poppins-Regular",

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
    contentContainer1: {
        backgroundColor: '#fff',
        height: responsiveHeight(100),
        borderRadius: responsiveWidth(5),
        alignItems: 'center',
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
        marginHorizontal: responsiveWidth(4.2),
        padding: responsiveHeight(2),
        marginTop: responsiveHeight(5),
        borderRadius: responsiveWidth(4),
        fontFamily: "Poppins-Medium",
        fontSize: responsiveFontSize(2),
        elevation: 4
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