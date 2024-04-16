import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import sstyles from '../../sstyle';
export default function Documents({ navigation }) {
    const [termsChecked, setTermsChecked] = useState(false); // State for checkbox
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [date1, setDate1] = useState(null)
    const [date2, setDate2] = useState(null)
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };

    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };
    const data = [
        { label: 'Ford Expedition', value: '1' },
        { label: 'Toyota', value: '2' },

    ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'gray' }]}>
                    Select Vehicle
                </Text>
            );
        }
        return null;
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
    const handleConfirm2 = (datee) => {
        console.warn("A date has been picked2: ", datee);
        console.log("hjgg")
        const b = datee;
        const a = moment(b).format("MMM Do YY");
        console.log("A date has been picked2: ", a);
        setDate2(a);
        hideDatePicker2();
    };
    return (

        <View style={{ flex: 1, backgroundColor: 'black' }}>

            <ScrollView>
                <View style={styles.containerimageview}>
                    <View style={styles.Payview}>
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: responsiveFontSize(1.8),
                                color: '#0A0B1E',
                            }}>
                            Upload vechicle image
                        </Text>
                        <Image
                            style={{ height: responsiveHeight(5), width: responsiveWidth(9) }}
                            source={
                                require('../../assets/Icons/dslr.png')}
                            resizeMode='contain'
                        />
                    </View>

                    <View style={styles.Payview}>


                        <View>
                            <Text style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: responsiveFontSize(1.8), color: '#0A0B1E',
                            }}>Driver's licence</Text>
                            <TextInput
                                style={{
                                    width: responsiveWidth(48),
                                    backgroundColor: '#F6F6FF',
                                    height: responsiveHeight(6),
                                }}
                                label="Expire Date"
                                mode="outlined"
                                outlineStyle={{ borderWidth: responsiveHeight(.2), borderColor: '#C8C8C8' }}
                                theme={{
                                    roundness: 12,
                                    color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                                }}
                                placeholder="00-00-0000"
                                value={date1}
                            />
                        </View>
                        <TouchableOpacity onPress={showDatePicker}>
                            <View>
                                <Image
                                    style={{
                                        height: responsiveHeight(5),
                                        width: responsiveWidth(5),

                                        right: responsiveWidth(18),
                                        top: responsiveHeight(2.1),
                                    }}
                                    source={require('../../assets/Icons/calender.png')}
                                    resizeMode="contain"
                                />
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={(date) => {
                                        console.log("hjgg")
                                        const b = date;
                                        const a = moment(b).format("MMM Do YY");
                                        console.log("A date has been picked: ", a);
                                        setDate1(a);
                                        hideDatePicker();
                                    }}
                                    onCancel={hideDatePicker}
                                />
                            </View>
                        </TouchableOpacity>
                        <Image
                            style={{ height: responsiveHeight(5), width: responsiveWidth(9) }}
                            source={require('../../assets/Icons/dslr.png')}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={styles.Payview}>


                        <View>
                            <Text style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: responsiveFontSize(1.8), color: '#0A0B1E',
                            }}>Vehicle Registration</Text>
                            <TextInput
                                style={{
                                    width: responsiveWidth(48),
                                    backgroundColor: '#F6F6FF',
                                    height: responsiveHeight(6),
                                }}
                                label="Expire Date"
                                mode="outlined"
                                outlineStyle={{ borderWidth: responsiveHeight(.2), borderColor: '#C8C8C8' }}
                                theme={{
                                    roundness: 12,
                                    color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                                }}
                                placeholder="00-00-0000"
                                value={date2}

                            />
                        </View>
                        <TouchableOpacity onPress={showDatePicker2}>
                            <View>
                                <Image
                                    style={{
                                        height: responsiveHeight(5),
                                        width: responsiveWidth(5),

                                        right: responsiveWidth(18),
                                        top: responsiveHeight(2.1),
                                    }}
                                    source={require('../../assets/Icons/calender.png')}
                                    resizeMode="contain"
                                />
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible2}
                                    mode="date"
                                    onConfirm={handleConfirm2}
                                    onCancel={hideDatePicker}
                                />
                            </View>
                        </TouchableOpacity>
                        <Image
                            style={{ height: responsiveHeight(5), width: responsiveWidth(9) }}
                            source={require('../../assets/Icons/dslr.png')}
                            resizeMode='contain'
                        />
                    </View>
                    <View
                        style={{
                            marginVertical: responsiveHeight(2),
                            marginHorizontal: responsiveHeight(2.3),
                        }}>
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: responsiveFontSize(2),
                                color: '#0A0B1E',
                            }}>
                            Vehicle Details
                        </Text>
                    </View>


                    {/* <TextInput
                label="Pickup"
                mode="outlined"
                outlineStyle={{borderWidth:responsiveHeight(.2),borderColor:'#C8C8C8',backgroundColor:"#FFFFFF"}}
                placeholder="Enterpick up Location"
                theme={{
                  roundness: 10,
  
                  colors: {primary: '#C8C8C8', underlineColor: '#C8C8C8'},
                }}
                style={styles.textinputstyle}
              /> */}

                    <View style={styles.textinputmainview}>
                        {renderLabel()}
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: '#C8C8C8' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select Vehicle' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                        />
                        <TextInput
                            label="Vehicle year"
                            mode="outlined"
                            outlineStyle={{ borderWidth: responsiveHeight(.2), borderColor: '#C8C8C8', backgroundColor: "#FFFFFF" }}
                            theme={{
                                roundness: 15,
                                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
                            }}
                            style={styles.textinputstyle}
                        />


                        <TextInput
                            label="Plate number"
                            mode="outlined"
                            outlineStyle={{ borderWidth: responsiveHeight(.2), borderColor: '#C8C8C8', backgroundColor: "#FFFFFF" }}
                            theme={{
                                roundness: 15,
                                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
                            }}
                            style={styles.textinputstyle}
                        />

                        <TextInput
                            label="Chassis Number"
                            placeholder='Chassis Number'
                            placeholderTextColor={"#C8C8C8"}
                            mode="outlined"
                            outlineStyle={{ borderWidth: responsiveHeight(.2), borderColor: '#C8C8C8', backgroundColor: "#FFFFFF" }}
                            theme={{
                                roundness: 15,
                                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
                            }}
                            style={styles.textinputstyle}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            bottom: responsiveHeight(1.5),
                            paddingHorizontal: responsiveWidth(5),
                        }}>
                        <BouncyCheckbox
                            isChecked={termsChecked}
                            onPress={() => setTermsChecked(!termsChecked)}
                            fillColor="#6369F3"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: '#6369F3' }}
                            textStyle={{ color: '#0A0B1E' }}
                            size={22}
                        />
                        <Text
                            style={{
                                color: '#0A0B1E',
                                fontFamily: 'Poppins-Regular',
                                fontSize: responsiveFontSize(1.6),
                                marginTop: responsiveHeight(2.5),
                                position: "relative",
                                right: responsiveHeight(1.5)
                            }}>
                            I have read the Terms and Conditions{'\n'} guidelines{' '}
                        </Text>
                    </View>
                    <View style={{ marginTop: responsiveHeight(5), }}>
                        <TouchableOpacity    style={sstyles.buttonText}onPress={() => { navigation.navigate("Home") }}>
                            <Text
                             
                                      style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: responsiveFontSize(2),
                    color: '#fff',
                    textAlign: 'center',
                }}>
                                Apply Now
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    logo: {
        height: responsiveHeight(5),
        width: responsiveWidth(7),
        marginHorizontal: responsiveWidth(5),
    },
    logoText: {
        color: '#fff',
        fontSize: responsiveFontSize(2.6),
    },

    containerimageview: {

        backgroundColor: '#fff',
        height:responsiveHeight(120),
        borderRadius: responsiveWidth(4),

    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: responsiveFontSize(2.4),
        marginTop: responsiveHeight(2),
    },
    Payview: {
        height: responsiveHeight(14),
        width: responsiveWidth(93),
        backgroundColor: '#F6F6FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: responsiveHeight(2),
        borderRadius: responsiveWidth(5),
        borderWidth: responsiveWidth(.3),
        borderColor: '#C8C8C8',
        paddingHorizontal: responsiveWidth(5),
    },
    textinputmainview: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        bottom: responsiveHeight(3),
        borderRadius: responsiveWidth(5),
    },
    textinputstyle: {
        width: responsiveWidth(93),
        height: responsiveHeight(6.8),
        alignSelf: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: responsiveFontSize(1.6),
        marginTop: responsiveHeight(1.2),
    },
    dropdown: {
        marginTop: responsiveHeight(2.5),
        backgroundColor: '#FFFFFF',
        borderWidth: responsiveWidth(.3),
        borderRadius: responsiveWidth(4),
        height: responsiveHeight(7),
        paddingHorizontal: responsiveWidth(5),
        // backgroundColor: "red",
        borderColor: '#C8C8C8',
        // borderRadius: 100
        // height:100

    },
    placeholderStyle: {
        fontSize: responsiveFontSize(1.8),
        fontFamily: "Poppins-Regular",
    },
    selectedTextStyle: {

        color: "#0A0B1E",
        fontFamily: "Poppins-Regular",
        fontSize: responsiveFontSize(1.8)
    },
    iconStyle: {
        width: responsiveWidth(4),
        height: responsiveHeight(3.5),

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,

    },
    dropdownview: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    label: {
        position: 'absolute',
        backgroundColor: '#f8f8f8',
        left: responsiveWidth(2),
        top: responsiveHeight(1),
        zIndex: 999,
        paddingHorizontal: responsiveWidth(1.5),
        fontSize: responsiveFontSize(1.6)
    },
});