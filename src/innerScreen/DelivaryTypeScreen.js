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

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },

];

const data1 = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },

];
export default function Item({ navigation }) {
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
                <Text style={{color:"white", textAlign:"center",marginVertical:10,fontSize:20}}>Delivery Type</Text>
                <View style={styles.contentContainer}>


                    <Image
                        style={{ height: 150, width: 400,marginTop:10 }}
                        source={require('../Assets/Images/full.png')}
                        resizeMode="contain"
                    />
                    <Text style={{fontWeight:"bold",marginHorizontal:responsiveWidth(5)}}>Choose your Delivery Type</Text>
                    <View
                        style={{
                            flexDirection: "row",

                        }}>
                        <View>

                            <Image
                                style={{ height: 150, width: 150, }}
                                source={require('../Assets/Images/Sameday.png')}
                                resizeMode="contain"
                            />
                        </View>
                        <View>
                            <Image
                                style={{ height: 120, width: 120, marginTop: 10, marginRight: 10 }}
                                source={require('../Assets/Images/Economy.png')}
                                resizeMode="contain"
                            />
                        </View>
                        <View>
                            <Image
                                style={{ height: 120, width: 120, marginTop: 10, marginRight: 15 }}
                                source={require('../Assets/Images/Express.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View style={{marginHorizontal:responsiveWidth(5)}}>
                    <Text style={{fontWeight:"bold"}}>Schedule a pick Up{"\n"}</Text>
                    <Text>NOTE: Schedule Job Cost More & May Take Longer To Find a Driver{"\n"}</Text>
                    </View>
                    <TextInput
                        style={{marginHorizontal:responsiveWidth(4)}}
                        label="Select Date"
                        mode="outlined"
                        outlineStyle={{ borderWidth: 0.3 }}
                        theme={{
                            roundness: 15,
                            color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                          }}
                          placeholder="00-00-0000"
                    />
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
        height: responsiveHeight(13),
        alignSelf: 'center',
        backgroundColor: '#E8E8E8',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(5),

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
        marginHorizontal:responsiveWidth(7),
        padding:responsiveHeight(2),
        marginTop:responsiveHeight(5),
        borderRadius:responsiveWidth(4)
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
});