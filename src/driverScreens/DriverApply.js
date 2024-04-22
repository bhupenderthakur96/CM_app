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
import Modal from 'react-native-modal';
import sstyles from '../../sstyle';
export default function DriverApply({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [termsChecked, setTermsChecked] = useState(false); // State for checkbox
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [date1, setDate1] = useState(null)
    const [date2, setDate2] = useState(null)

    //start input fields states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hidePassword1, setHidePassword1] = useState(true);
    const [hidePassword2, setHidePassword2] = useState(true);
    const [phoneNO, setphoneNO] = useState('');
    const [isTrue, SetIsTrue] = useState(false);


    //end input fields states

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

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={{
                            height: responsiveHeight(5),
                            width: responsiveWidth(6),
                            marginTop: responsiveHeight(1),
                            marginLeft: responsiveWidth(2.5),

                        }}
                        source={require('../../assets/Icons/back.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        color: "white",
                        textAlign: "center",
                        marginVertical: responsiveHeight(2),
                        fontSize: responsiveFontSize(2),
                        fontFamily: "Poppins-Medium",
                        // alignSelf:"center"
                        marginHorizontal: responsiveWidth(30),
                        // fontWeight:"bold"
                    }}>Driver Apply</Text>

            </View>
            <ScrollView>

                <Image
                    source={require("../../assets/Images/line.png")}
                    style={{
                        width: responsiveWidth(2),
                        height: "100%",
                        position: "absolute",
                        marginTop: responsiveHeight(2)
                    }}
                // resizeMode="contain"
                />


                <View style={styles.containerimageview}>
                    <View style={styles.emailContainer}>
                        <TextInput
                            label="Enter Name"
                            mode="outlined"
                            outlineStyle={{ borderWidth: responsiveWidth(.2) }}
                            theme={{
                                roundness: 18,
                                colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                            }}
                            value={firstName}
                            onChangeText={text => setFirstName(text)}

                            style={styles.email}
                        />

                    </View>
                    <View style={styles.emailContainer}>
                        <TextInput
                            label="Enter Email"
                            mode="outlined"
                            outlineStyle={{ borderWidth: responsiveWidth(.2) }}
                            theme={{
                                roundness: 18,
                                colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                            }}

                            onChangeText={text => setEmail(text)}

                            style={styles.email}
                        />

                    </View>
                    <View style={styles.emailContainer}>
                        <TextInput
                            label="Enter Phone"
                            mode="outlined"
                            outlineStyle={{ borderWidth: responsiveWidth(.2) }}
                            theme={{
                                roundness: 18,
                                colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                            }}



                            style={styles.email}
                        />

                    </View>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            label="Enter password"
                            mode="outlined"
                            outlineStyle={{ borderWidth: responsiveWidth(.2) }}
                            theme={{
                                roundness: 18,
                                colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                            }}

                            onChangeText={text => setPassword(text)}
                            error={!!passwordError}
                            secureTextEntry={hidePassword1} // Toggle secure text entry based on hidePassword state
                            style={styles.password}
                        />

                        <TouchableOpacity
                            style={styles.eyeContainer}
                            onPress={() => setHidePassword1(!hidePassword1)}>
                            <Image
                                style={styles.eyeimage}
                                source={
                                    hidePassword1
                                        ? require('../../assets/Icons/eye.png')
                                        : require('../../assets/Icons/eye.png')
                                }
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            label="Confirm password"
                            mode="outlined"
                            outlineStyle={{ borderWidth: responsiveWidth(.2) }}
                            theme={{
                                roundness: 18,
                                colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                            }}
                            value={confirmPassword}
                            onChangeText={text => setConfirmPassword(text)}
                            error={!!passwordError}
                            secureTextEntry={hidePassword2}
                            style={styles.password}
                        />
                        {passwordError ? (
                            <Text style={styles.error}>{passwordError}</Text>
                        ) : null}
                        <TouchableOpacity
                            style={styles.eyeContainer}
                            onPress={() => setHidePassword2(!hidePassword2)}>
                            <Image
                                style={styles.eyeimage}
                                source={
                                    hidePassword2
                                        ? require('../../assets/Icons/eye.png')
                                        : require('../../assets/Icons/eye.png')
                                }
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
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
                            style={{ height: responsiveHeight(4), width: responsiveWidth(9) }}
                            source={require('../../assets/Icons/cloud.png')}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: responsiveHeight(4),
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

                    <View >
                        <View style={styles.Payview1}>
                            <Text
                                style={{
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: responsiveFontSize(1.8),
                                    color: '#0A0B1E',
                                }}>
                                Upload vehicle image
                            </Text>
                            <Image
                                style={{ height: responsiveHeight(4), width: responsiveWidth(9) }}
                                source={require('../../assets/Icons/cloud.png')}
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
                                style={{ height: responsiveHeight(4), width: responsiveWidth(9) }}
                                source={require('../../assets/Icons/cloud.png')}
                            />
                        </View>

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
                                    roundness: 10,

                                    colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                                }}
                                style={styles.textinputstyle}
                            />


                            <TextInput
                                label="Plate number"
                                mode="outlined"
                                outlineStyle={{ borderWidth: responsiveHeight(.2), borderColor: '#C8C8C8', backgroundColor: "#FFFFFF" }}
                                theme={{
                                    roundness: 10,

                                    colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
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
                                    roundness: 10,

                                    colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                                }}
                                style={styles.textinputstyle}
                            />
                        </View>
                    </View>


                    <View style={{ marginTop: responsiveHeight(6), 
                        
                        marginLeft: responsiveWidth(2) }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#6369F3',
                                padding: responsiveHeight(1.5),
                                borderRadius: responsiveWidth(3),
                                bottom: responsiveHeight(4),
                                elevation: 4,
                                width: responsiveWidth(40),
                              
                            }}
                            onPress={toggleModal}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    textAlign: 'center',

                                    // justifyContent: 'center',
                                    // marginHorizontal: responsiveWidth(7),

                                    fontFamily: 'Poppins-Medium',

                                    fontSize: responsiveFontSize(1.5),


                                }}>
                                Add More Vehicle
                            </Text>
                        </TouchableOpacity>

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
                            I have read the Terms and Conditions{'\n'} guidelines.{' '}
                        </Text>
                    </View>
                    <View style={{ marginTop: responsiveHeight(2), }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate("drawer") }}
                        >
                            <View style={[sstyles.buttonText]}>
                                <Text
                                    style={{
                                        fontFamily: "Poppins-Medium",
                                        fontSize: responsiveFontSize(2),
                                        color: '#fff',
                                        textAlign: 'center',

                                    }}
                                >Apply Now</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{
                            fontFamily: "Poppins-Regular",
                            fontSize: responsiveFontSize(1.7),
                            color: "#757680",
                            alignSelf: "center",
                            marginTop: responsiveHeight(1),
                            marginBottom: responsiveHeight(2)
                        }}>Already registered? <Text style={{
                            fontFamily: "Poppins-Regular",
                            fontSize: responsiveFontSize(1.7),
                            color: "#6369F3",
                        }}
                            onPress={() => { navigation.navigate('loginD') }}
                        >Login</Text></Text>
                        {/* dfghfrgthrehy */}

                        <Modal isVisible={isModalVisible} style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.title}></Text>
                                <Text style={styles.subtitle}>Vehicle Detail</Text>

                                <View >
                                    <View style={styles.Payview1}>
                                        <Text
                                            style={{
                                                fontFamily: 'Poppins-Medium',
                                                fontSize: responsiveFontSize(1.8),
                                                color: '#0A0B1E',
                                            }}>
                                            Upload vehicle image
                                        </Text>
                                        <Image
                                            style={{ height: responsiveHeight(4), width: responsiveWidth(9) }}
                                            source={require('../../assets/Icons/cloud.png')}
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
                                            style={{ height: responsiveHeight(4), width: responsiveWidth(9) }}
                                            source={require('../../assets/Icons/cloud.png')}
                                        />
                                    </View>

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
                                                roundness: 10,

                                                colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                                            }}
                                            style={styles.textinputstyle}
                                        />


                                        <TextInput
                                            label="Plate number"
                                            mode="outlined"
                                            outlineStyle={{ borderWidth: responsiveHeight(.2), borderColor: '#C8C8C8', backgroundColor: "#FFFFFF" }}
                                            theme={{
                                                roundness: 10,

                                                colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
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
                                                roundness: 10,

                                                colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                                            }}
                                            style={styles.textinputstyle}
                                        />
                                    </View>
                                </View>


                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity onPress={toggleModal}>
                                        <View style={styles.cancelButton}>
                                            <Text style={styles.buttonText1}>Add</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity  onPress={()=>{navigation.navigate("Register")}}>
                                            <View style={styles.signUpButton}>
                                                <Text style={[styles.buttonText1, { color: '#fff' }]}>
                                                    Sign Up
                                                </Text>
                                            </View>
                                        </TouchableOpacity> */}
                                </View>
                            </View>

                        </Modal>


                        {/* /////rt */}
                    </View>
                </View>

                <Image
                    source={require("../../assets/Images/line.png")}
                    style={{ width: responsiveWidth(2), height: "100%", alignSelf: "flex-end", position: "absolute", marginTop: responsiveHeight(2) }}
                />
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

        borderRadius: responsiveWidth(4),
        marginHorizontal: responsiveWidth(2)
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
    Payview1: {
        height: responsiveHeight(14),
        width: responsiveWidth(93),
        backgroundColor: '#F6F6FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: responsiveHeight(1),
        borderRadius: responsiveWidth(5),
        borderWidth: responsiveWidth(.3),
        borderColor: '#C8C8C8',
        paddingHorizontal: responsiveWidth(5),
    },
    textinputmainview: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        // bottom: responsiveHeight(3),
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
        borderRadius: responsiveWidth(3),
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
    emailContainer: {
        alignSelf: 'center',
    },
    email: {
        marginTop: responsiveHeight(2),
        width: responsiveWidth(90),
        height: responsiveHeight(6.8),
        fontSize: responsiveFontSize(2),
        fontFamily: 'Regular',
    },
    passwordContainer: {
        alignSelf: 'center',
    },
    password: {
        height: responsiveHeight(6.8),
        width: responsiveWidth(90),
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(2),
        fontFamily: 'Regular',
    },
    eyeContainer: {
        position: 'absolute',
        top: '33%',
        right: '4%',
        height: responsiveHeight(8),
        width: responsiveWidth(8),
        alignContent: 'center',
        justifyContent: 'center',
    },
    eyeimage: {
        height: responsiveHeight(9),
        width: responsiveWidth(8),
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContent: {
        backgroundColor: 'white',
        height: responsiveHeight(100),
        width: responsiveWidth(100),
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
        fontSize: responsiveFontSize(2.8),
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