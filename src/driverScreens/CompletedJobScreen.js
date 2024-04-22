import React, { useCallback, useRef, useMemo, useState } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import StarRating from 'react-native-star-rating-widget';
import LogoScreen from '../outerScreen/LogoScreen';
import SwipeButton from 'rn-swipe-button';
import { Rating } from "react-native-ratings";
import { useNavigation } from '@react-navigation/native';
const StartJobScreen = ({ setStatus }) => {

  const [disableCBButton, setDisableCBButton] = useState(false)
  const defaultStatusMessage = 'swipe status appears here';
  const [swipeStatusMessage, setSwipeStatusMessage] = useState(
    defaultStatusMessage,
  );
  setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);
  const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);
  const renderSubHeading = (heading) => (
    <Text style={styles.subHeading}>{heading}</Text>
  );
  let forceResetLastButton = null;

  const CheckoutButton = () => {
    return (
      <View style={{ width: 100, height: 30, backgroundColor: '#C70039', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#ffffff' }}>Checkout</Text>
      </View>
    );
  }
  // hooks
  const navigation = useNavigation();
  // const sheetRef = useRef<BottomSheet>(null);
  const sheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const snapPoints = useMemo(() => ['65%', '85%',], []);

  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const renderItem = useCallback(
    item => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );
  const [rating, setRating] = useState(0);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Image
          source={require("../../assets/Images/line.png")}
          style={{ width: responsiveWidth(2), height: "100%", position: "absolute", marginTop: responsiveHeight(9) }}
        />
        <Image
          source={require("../../assets/Images/line.png")}
          style={{ width: responsiveWidth(2), height: "100%", alignSelf: "flex-end", position: "absolute", marginTop: responsiveHeight(9) }}
        />
       <View style={{ flexDirection: "row",}}>
                    
                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            width:'100%',
                            marginVertical:responsiveHeight(2),
                            fontSize: responsiveFontSize(2.2),
                            fontFamily: "Poppins-Medium",
                            // alignSelf:"center",
                            alignSelf:"center",
                            // marginLeft: responsiveWidth(-8.5),
                            // fontWeight:"bold"
                        }}>Complete Job</Text>
                        <TouchableOpacity style={{ height:"100%",justifyContent:'center',position:"absolute"}} 
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
        <View style={{
          flex: 1,
          backgroundColor: "white",
          // marginHorizontal:responsiveWidth(2),
          marginHorizontal: responsiveWidth(2),
          borderRadius: responsiveWidth(4),
          marginTop:responsiveHeight(0.1)
          // marginHorizontal:responsiveWidth(2)
        }}>
          <Image
            style={styles.imageview}
            source={require('../../assets/Images/greenBack.png')}
          />
          <View style={styles.contentContainer1}>
            <Image
              style={{
                height: responsiveHeight(15),
                width: responsiveWidth(35),
                alignSelf: "center",
                marginTop: responsiveHeight(3),
                // marginLeft: responsiveWidth(2.5),

              }}
              source={require('../../assets/Icons/green.png')}
              resizeMode="contain"
            />
            <Text style={{
              textAlign: "center",
              color: "white",
              fontFamily: "Poppins-Medium",
              fontSize: responsiveFontSize(2.9),
              position: "relative",
              bottom: responsiveHeight(2)
            }}>Great Job Done!</Text>

          </View>
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}

        onChange={handleSheetChange}>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>


          <View style={styles.ownerview}>
            <Image
              style={styles.ownerimage}
              source={require('../../assets/Images/owner.png')}
              resizeMode='contain'
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.ownwertext}> Robert C.Stone</Text>

              <Rating
                // type='custom'
                //   ratingImage={WATER_IMAGE}
                ratingColor='#3498db'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={14}
                onFinishRating={this.ratingCompleted}
                style={{
                  marginLeft: responsiveWidth(1.5),
                  alignSelf: "flex-start",

                }}
              />
            </View>
            <Image
              style={styles.blueMessage}
              source={require('../../assets/Images/blueMessage.png')}
              resizeMode='contain'
            />
            <Image
              style={styles.phone}
              source={require('../../assets/Images/phone.png')}
              resizeMode='contain'
            />
          </View>
          <View
            style={styles.jobview}>
            <Text style={styles.jobtext}>Job Id</Text>
            <Text style={styles.jobtext2}>183</Text>
          </View>
          <View
            style={styles.jobview2}>
            <Text style={styles.jobtext}>Date & Time</Text>
            <Text style={styles.jobtext2}>March 20, 2024 11:15 AM</Text>
          </View>
          <View
            style={styles.jobview2}>
            <Text style={styles.jobtext}>Distance</Text>
            <Text style={styles.jobtext2}>3.2 km</Text>
          </View>
          <View
            style={styles.jobview2}>
            <Text style={styles.jobtext}>Weight</Text>
            <Text style={styles.jobtext2}>40-80 kg</Text>
          </View>
          <View
            style={styles.jobview2}>
            <Text style={styles.jobtext}>Time</Text>
            <Text style={styles.jobtext2}>30 minutes</Text>
          </View>
          <View
            style={styles.jobview2}>
            <Text style={styles.jobtext}>Payment Method</Text>
            <Image
              style={styles.cashview}
              source={require('../../assets/Images/cash.png')} resizeMode='contain' />
            <Text style={styles.jobtext2}>Cash</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: responsiveHeight(.1), borderTopColor: "#F0F0F3" }}>
            <Text style={styles.jobtext}>Total</Text>
            <Text style={styles.jobtext3}>$870</Text>
          </View>

          <View style={styles.secandlastimage}>
            <Text style={{ paddingHorizontal: responsiveWidth(4) }}>Change job pickup image</Text>
            <Image
              style={styles.meterialimageview}
              source={require('../../assets/Images/material.png')}
              resizeMode='contain'
            />
          </View>



          <View style={styles.secandlastimage1}>
            <Text>Upload your Drop off image</Text>
            <Image
              style={styles.cemeraview}
              source={require('../../assets/Images/camera.png')}
              resizeMode='contain'
            />
          </View>


      
          <View style={styles.container1}>
            <SwipeButton
              // thumbIconImageSource={thumbIcon}
              thumbIconStyles={{ height:responsiveHeight(5), width:responsiveWidth(5) }}
              railBackgroundColor="#D9D9D9"
              title="Slide to confirm"
              // titleColor='white'
              thumbIconBackgroundColor="#FFFFFF"
              railFillBackgroundColor='#27AE60'
              railBorderColor='#D9D9D9'
              onSwipeSuccess={() => navigation.navigate('rate')}
              resizeMode="contain"
                    />
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  mainview1: {
    marginTop: responsiveHeight(3),
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
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
  },
  contentContainer1: {
    height: responsiveHeight(19),
    width: responsiveWidth(93),

    position: 'absolute',

    alignSelf: "center"
  },
  imageview: {
    height: responsiveHeight(80),
    width: responsiveWidth(96),
    borderTopLeftRadius: responsiveWidth(4),
    borderTopRightRadius: responsiveWidth(4),
    position: "relative",
    bottom: responsiveHeight(0.2)
  },
  howstyle: {
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    fontFamily: "Poppins-Medium",
    color: "#0A0B1E"
  },
  yourstyle: {
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    fontFamily: "Poppins-Medium",
    color: "#0A0B1E"
  },
  touchview: {
    marginTop: responsiveHeight(25),
    alignSelf: 'center',
  },
  ownerview: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: responsiveHeight(2),
    marginHorizontal:responsiveWidth(3)
  },
  ownerimage: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveWidth(8)
  },
  ownwertext: {
    marginRight: responsiveHeight(16),
    fontSize: responsiveFontSize(2),
    fontFamily: "Poppins-Medium",
    fontSize: responsiveFontSize(1.8),
    color: "#0A0B1E"
  },
  blueMessage: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    marginRight: responsiveWidth(5)
  },
  phone: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    marginRight: responsiveWidth(7)
  },
  jobview: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    height: responsiveHeight(5),
    borderBottomColor: "#F0F0F3",
    borderBottomWidth: responsiveHeight(.2)
  },
  jobtext: {
    fontSize: responsiveFontSize(1.8),
    marginLeft: responsiveHeight(2),
    fontFamily: "Poppins-Regular"
  },
  jobtext2: {
    marginRight: responsiveHeight(2),
    fontFamily: "Poppins-Bold",
    color: "#000000",
    fontSize: responsiveFontSize(1.8),
  },
  jobtext3: {
    marginRight: responsiveHeight(2),
    fontFamily: "Poppins-Bold",
    color: "#27AE60",
    fontSize: responsiveFontSize(2.2)
  },
  jobview2: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    height: responsiveHeight(5),
    borderBottomColor: "#F0F0F3",
    borderBottomWidth: responsiveHeight(.1)
  },
  cashview: {
    height: responsiveHeight(5),
    width: responsiveWidth(7),
    marginLeft: responsiveHeight(15),
  },
  secandlastimage: {
    backgroundColor: "#F6F6FF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: responsiveWidth(2),
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(5),
    marginHorizontal: responsiveWidth(6),
    borderColor: "#C8C8C8",
    marginTop: responsiveHeight(4)
  },
  meterialimageview: {
    height: responsiveHeight(7),
    width: responsiveWidth(23),
    // marginTop: responsiveHeight(1)
    marginLeft: responsiveWidth(6)
  },
  secandlastimage1: {
    backgroundColor: "#F6F6FF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: responsiveWidth(3.5),
    marginTop: responsiveHeight(2),
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(5),
    borderColor: "#C8C8C8",
    marginHorizontal: responsiveWidth(6),
  },
  cemeraview: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    // marginTop: responsiveHeight(2.7),
    marginLeft: responsiveWidth(12),
    alignSelf: "flex-end"
  },
  container1: {
    marginTop: responsiveHeight(3),
    marginHorizontal:responsiveWidth(2)
  },
});

export default StartJobScreen;