import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, } from 'react-native'
import React, { useState } from 'react'
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import LogoScreen from '../outerScreen/LogoScreen';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];


const TodoJobs = ({ navigation }) => {
    // const [termsChecked, setTermsChecked] = useState(false)
    const [selectedJob, setSelectedJob] = useState(null);
    console.log(selectedJob, "hjg")

    const toggleCheckbox = (id) => {
        setSelectedJob(selectedJob === id ? null : id);
    };

    const Item = ({ title }) => (
        <View
            style={{
                backgroundColor: "#F6F6FE",
                padding: responsiveHeight(1),
                marginHorizontal: responsiveWidth(3),
                marginTop: responsiveHeight(1),
                borderRadius: responsiveWidth(3),
                height: responsiveHeight(22)
            }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: responsiveWidth(2.5), marginTop: responsiveHeight(.8) }}>
                <Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Regular", marginHorizontal: responsiveWidth(1.7) }}>Jobs ID:<Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Bold" }}>684</Text></Text>
                <BouncyCheckbox
                    isChecked={selectedJob === title.id}
                    onPress={() => toggleCheckbox(title.id)}
                    fillColor="#27AE60"
                    unfillColor="#FFFFFF"
                    iconStyle={{ borderColor: '#27AE60' }}
                    textStyle={{ color: '#27AE60' }}
                    size={22}
                    style={styles.checkbox}
                />
            </View>
            <View
                style={{ marginTop: responsiveHeight(1.5) }}
            >
                <Image
                    style={{ height: responsiveHeight(10), width: responsiveWidth(13) }}
                    source={require('../../assets/Icons/location.png')}
                    resizeMode="contain"
                />
                <View style={{ position: "absolute", marginLeft: responsiveWidth(10), }}>
                    <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#C8C8C8" }}>PickUp</Text>
                    <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), color: "#0A0B1E" }}>Westhiemer RD Santa Ana</Text>
                    <Text style={{ marginTop: responsiveHeight(0.1), fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#C8C8C8", marginTop: responsiveHeight(0.5) }}>Drop Off</Text>
                    <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), color: "#0A0B1E" }}>Preston Rd. Inglewood, Maine</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: responsiveWidth(2), marginTop: responsiveHeight(1.8) }}>
                <Text style={{ color: "#6369F3", fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8), marginLeft: responsiveFontSize(1.5) }}>$870</Text>
                <Text style={{ color: "#0A0B1E", fontFamily: "Poppins-Bold", marginRight: responsiveFontSize(12) }}>40KM</Text>
                <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.55), color: "#C8C8C8" }}>March15,2023 1:24pm</Text>
            </View>
        </View>
    );

    return (

        <View style={{ flex: 1, backgroundColor: "black" }}>
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
                    }}>Jobs to do</Text>

            </View>
            <Image
                source={require("../../assets/Images/line.png")}
                style={{ width: responsiveWidth(2), height: "100%", position: "absolute", marginTop: responsiveHeight(9) }}
            />
            <Image
                source={require("../../assets/Images/line.png")}
                style={{ width: responsiveWidth(2), height: "100%", alignSelf: "flex-end", position: "absolute", marginTop: responsiveHeight(9) }}
            />
            <View style={styles.container}>
                <LogoScreen />

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item} />}
                    keyExtractor={item => item.id}
                />

                <View style={{ marginTop: 20, alignSelf: 'center' }}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            {
                                backgroundColor:
                                    selectedJob == null
                                        ? '#BEE7CF'
                                        : '#27AE60'
                            }
                        ]}
                        onPress={() => navigation.navigate(selectedJob ? 'search' : 'todo')}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    )
}

export default TodoJobs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: responsiveWidth(5),
        marginHorizontal: responsiveWidth(2)

    },
    button: {
        // height: responsiveHeight(7.5),
        // width: responsiveWidth(88),
        // backgroundColor: '#27AE60',
        marginBottom: responsiveHeight(2),
        // borderRadius: responsiveWidth(4),

        // elevation: 4

        color: '#fff',
        textAlign: 'center',
        // backgroundColor: '#27AE60',
        justifyContent: 'center',
        // marginHorizontal: responsiveWidth(4.2)
        height: responsiveHeight(7),
        width: responsiveWidth(90),
        padding: responsiveHeight(2),
        // marginTop: responsiveHeight(5),
        borderRadius: responsiveWidth(4),
        fontFamily: "Poppins-Medium",
        fontSize: responsiveFontSize(2),
        elevation: 4,
        alignSelf: "center"
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        // marginTop: responsiveHeight(2),
        elevation: 4,
        fontFamily: "Poppins-Medium"

    },
})