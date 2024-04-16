import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Pressable, Image, ScrollView } from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';

const BottomSheet5 = ({ setStatus }) => {
    const [rating, setRating] = useState(0);
    const slide = React.useRef(new Animated.Value(300)).current;
    const navigation = useNavigation();

    const [isLove2Visible, setLove2Visible] = useState(true);
    const toggleImage = () => {
        setLove2Visible(!isLove2Visible);
    };
    const [isLove2Visible1, setLove2Visible1] = useState(true);
    const toggleImage1 = () => {
        setLove2Visible1(!isLove2Visible1);
    };
    const [isLove2Visible2, setLove2Visible2] = useState(true);
    const toggleImage2 = () => {
        setLove2Visible2(!isLove2Visible2);
    };
    const [isLove2Visible3, setLove2Visible3] = useState(true);
    const toggleImage3 = () => {
        setLove2Visible3(!isLove2Visible3);
    };
    const [isLove2Visible4, setLove2Visible4] = useState(true);
    const toggleImage4 = () => {
        setLove2Visible4(!isLove2Visible4);
    };

    const slideUp = () => {
        // Will change slide up the bottom sheet
        Animated.timing(slide, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
        }).start();
    };

    const slideDown = () => {
        // Will slide down the bottom sheet
        Animated.timing(slide, {
            toValue: 300,
            duration: 800,
            useNativeDriver: true,
        }).start();
    };
    const slideDown1 = () => {
        // Will slide down the bottom sheet
        Animated.timing(slide, {
            toValue: 10,
            duration: 800,
            useNativeDriver: true,
        }).start();
    };

    React.useEffect(() => {
        slideUp()
    })


    const closeModal = () => {
        slideDown();

        // setTimeout(() => {
        //     setStatus(false);
        // }, 800)

    }

    return (
        <Pressable onPress={closeModal} style={styles.backdrop}>
            <Pressable style={{ width: '100%', height: '70%', paddingHorizontal: responsiveWidth(2) }}>
                <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slide }] }]}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity
                            onPress={slideDown1}
                        >
                            {/* <View style={styles.mainview}> */}
                            <View style={styles.mainview1}>
                                <Text style={styles.howstyle}>How was</Text>
                                <Text style={styles.yourstyle}>Your Experence</Text>
                            </View>
                            <View style={{ alignSelf: "center", marginTop: responsiveHeight(4) }}>
                                <StarRating
                                    rating={rating}
                                    onChange={setRating}
                                    starSize={50}
                                />
                            </View>
                            <View style={styles.touchview}>
                                <TouchableOpacity
                                    style={styles.button}
                                    title="Go to Details"
                                    onPress={() => navigation.navigate('Login')}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                            {/* </View> */}
                        </TouchableOpacity>
                    </ScrollView>
                </Animated.View>
            </Pressable>

        </Pressable>
    )
}


export default BottomSheet5;


const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    bottomSheet: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    input: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    
    textinputmainview: {
        height: responsiveHeight(20),
        width: responsiveWidth(93),
        backgroundColor: '#fff',
        position: 'relative',
        left: responsiveHeight(2),
        bottom: responsiveHeight(9),
        borderRadius: responsiveWidth(5),
    },
    mechview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: responsiveHeight(1.5),
    },
    mechtext1: {
        fontSize: responsiveFontSize(2.9),
        color: 'black',
        marginLeft: responsiveHeight(1),
    },
    mechttext2: {
        fontSize: responsiveFontSize(2.9),
        color: '#6369F3',
        marginRight: responsiveFontSize(2.2),
    },
    mechtext3: {
        marginLeft: responsiveHeight(2.7),
    },
    Locationimage: {
        height: responsiveHeight(12),
        width: responsiveWidth(50),
        marginHorizontal: responsiveHeight(2.3),
    },
    idview: {
        flexDirection: 'row',
        height: responsiveHeight(3.7),
        borderBottomWidth: responsiveHeight(0.1),
        borderBottomColor: '#F0F0F3',
        justifyContent: 'space-between',
    },
    idtext: {
        marginLeft: responsiveHeight(3),
    },
    ownerview: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(2)
    },
    ownerimage: {
        height: responsiveHeight(6),
        width: responsiveWidth(12),
        borderRadius: responsiveWidth(2)
    },
    ownwertext: {
        marginRight: responsiveHeight(21),
        fontSize: responsiveFontSize(2)
    },
    button: {
        height: responsiveHeight(7.5),
        width: responsiveWidth(88),
        backgroundColor: '#27AE60',
        marginBottom: responsiveHeight(4),
        borderRadius: responsiveWidth(4),
        elevation:4
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: responsiveFontSize(2.4),
        marginTop: responsiveHeight(2),
    },
    mainview: {
        width: responsiveWidth(93),
        backgroundColor: '#fff',
        position: 'relative',
        left: responsiveHeight(2),
        bottom: responsiveHeight(31),
        borderRadius: responsiveWidth(6),
    },
    mainview1: {
        marginTop: responsiveHeight(3),
    },
    howstyle: {
        textAlign: 'center',
        fontSize: responsiveFontSize(3),
        fontFamily:"Poppins-Medium",
        color:"#0A0B1E"
    },
    yourstyle: {
        textAlign: 'center',
        fontSize: responsiveFontSize(3),
        fontFamily:"Poppins-Medium",
        color:"#0A0B1E"
    },
    imagemainview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: responsiveHeight(2),
    },
    loveimage1: {
        height: responsiveHeight(12),
        width: responsiveWidth(20),
        borderWidth: responsiveWidth(0.1),
        borderColor: 'pink',
        borderRadius: responsiveWidth(2),
    },
    loveimage2: {
        height: responsiveHeight(12),
        width: responsiveWidth(20),

    },
    loveimage3: {
        height: responsiveHeight(12),
        width: responsiveWidth(20),
    },
    ratingview: {
        position: 'absolute',
        left: responsiveHeight(22),
        top: responsiveHeight(20),
    },

    touchview: {
        marginTop: responsiveHeight(30),
        alignSelf: 'center',
    },
    // button: {
    //     height: responsiveHeight(7.5),
    //     width: responsiveWidth(93),
    //     backgroundColor: '#27AE60',
    //     // marginBottom: responsiveHeight(2),
    //     borderRadius: responsiveWidth(4),
    // },
    // buttonText: {
    //     color: '#fff',
    //     textAlign: 'center',
    //     fontSize: responsiveFontSize(2.4),
    //     marginTop: responsiveHeight(2),
        
    // },
})