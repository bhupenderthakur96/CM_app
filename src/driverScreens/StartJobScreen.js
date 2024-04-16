import React, { useCallback, useRef, useMemo } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Rating } from "react-native-ratings";
import LogoScreen from '../outerScreen/LogoScreen';
import sstyles from '../../sstyle';
const StartJobScreen = ({navigation}) => {
  // hooks
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
  const snapPoints = useMemo(() => ['15%','60%',], []);

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
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "black" }}>
      <Image
            source={require("../../assets/Images/line.png")}
            style={{width:responsiveWidth(2),height:"100%",position:"absolute",marginTop:responsiveHeight(9)}}
            />
        <Image
            source={require("../../assets/Images/line.png")}
            style={{width:responsiveWidth(2),height:"100%",alignSelf:"flex-end",position:"absolute",marginTop:responsiveHeight(9)}}
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
                        }}>Start Job</Text>
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
          marginHorizontal:responsiveWidth(2),
          borderRadius: responsiveWidth(4),
          // marginHorizontal:responsiveWidth(2)
        }}>
          <Image
            style={styles.imageview}
            source={require('../../assets/Images/Map.png')}
          />
          <View style={styles.contentContainer1}>
            <LogoScreen />
          </View>
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}

        onChange={handleSheetChange}>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>


          <View style={styles.mechview}>
            <Text style={styles.mechtext1}> Washing Machine</Text>
            <Text style={styles.mechttext2}>ID: <Text style={{ fontFamily: "Poppins-Bold", fontSize: responsiveFontSize(1.8), color: "#0A0B1E" }}>964</Text></Text>
          </View>

          <Text style={styles.mechtext3}>March 26,2024 1:24pm</Text>
          <View
            style={{ marginTop: responsiveHeight(1.5) }}
          >
            <Image
              style={{ height: responsiveHeight(10), width: responsiveWidth(13) }}
              source={require('../../assets/Icons/location.png')}
              resizeMode="contain"
            />
            <View style={{ position: "absolute", marginLeft: responsiveWidth(10), }}>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#c0c0c5" }}>PickUp</Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), color: "#0A0B1E" }}>Westhiemer RD Santa Ana</Text>
              <Text style={{ marginTop: responsiveHeight(0.6), fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3), color: "#c0c0c5" }}>Drop Off</Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.5), color: "#0A0B1E" }}>Preston Rd. Inglewood, Maine</Text>
            </View>
          </View>
          <View style={styles.idview}>
            <Text style={styles.idtext}>40KM  <Text>1.10-1.5CM</Text></Text>
            <Text style={{ fontFamily: "Poppins-Bold", color: "#6369F3",  marginRight:responsiveWidth(6.8) }}>$870</Text>
          </View>
          <View style={styles.ownerview}>
            <Image
              style={styles.ownerimage}
              source={require('../../assets/Images/owner.png')} />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.ownwertext}>Robert C.Stone</Text>

              <Rating
                // type='custom'
                //   ratingImage={WATER_IMAGE}
                ratingColor='#3498db'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={14}
                onFinishRating={this.ratingCompleted}
                style={{
                  // marginLeft: responsiveWidth(1.5),
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
                        style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            // marginHorizontal:responsiveWidth(5),
                            borderWidth:responsiveWidth(0.2),
                            borderRadius:responsiveWidth(3.5),
                            height:responsiveHeight(10),
                            width:responsiveWidth(90),
                            marginLeft:responsiveWidth(2),
                            marginRight:responsiveWidth(3),
                            borderColor:"#C8C8C8",
                            backgroundColor:"#F6F6FF",
                            marginTop:responsiveHeight(1.3),
                            alignSelf:"center"
                            }}>
                            <Text style={{
                              alignSelf:"center",
                              paddingHorizontal:responsiveWidth(5),
                              fontFamily:"Poppins-Medium",
                              fontSize:responsiveFontSize(1.5),
                              color:"#686978"

                              }}>Upload job pickup image</Text>
                            <Image
                               style={{
                                height:responsiveHeight(5),
                                width:responsiveWidth(10),
                                marginRight:responsiveWidth(4),
                                alignSelf:"center"
                            }}
                                source={require('../../assets/Images/camera.png')} 
                                resizeMode='contain'
                                />
                        </View>
          <View
            style={{ marginTop: responsiveHeight(3), alignItems: "center" }}>
            <TouchableOpacity
               style={[sstyles.buttonText,{ marginBottom: responsiveHeight(2),}]}
              title="Go to Details"
              onPress={() => navigation.navigate('way')}>
              <Text style={styles.buttonText}>Job Picked Up</Text>
            </TouchableOpacity>
          </View>

        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  mechview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingTop: responsiveHeight(1.5),
    marginTop: responsiveHeight(2)
  },
  mechtext1: {
    fontSize: responsiveFontSize(2),
    color: '#0A0B1E',
    marginLeft: responsiveHeight(1.5),
    fontFamily: "Poppins-Medium",

  },
  mechttext2: {

    color: '#85858F',
    marginRight: responsiveFontSize(2.7),
    fontFamily: "Poppins-Medium", fontSize: responsiveFontSize(1.8)
  },
  mechtext3: {
    marginLeft: responsiveHeight(2.5),
    fontFamily: "Poppins-Regular", fontSize: responsiveFontSize(1.3),
    color: '#A2A3A9',
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
    marginTop: responsiveHeight(1)
  },
  idtext: {
    marginLeft: responsiveHeight(3),
    fontFamily: "Poppins-Medium",
    fontSize: responsiveFontSize(1.4),
    color: '#A2A3A9',

  },
  ownerview: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: responsiveHeight(2)
  },
  ownerimage: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveWidth(8)
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
  ownwertext: {
    marginRight: responsiveHeight(16),
    fontSize: responsiveFontSize(2),
    fontFamily: "Poppins-Medium",
    fontSize: responsiveFontSize(1.8),
    color: "#0A0B1E"
  },
  button: {
    height: responsiveHeight(7.5),
    width: responsiveWidth(92),
    backgroundColor: '#27AE60',
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveWidth(4),
    elevation:4
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    // marginTop: responsiveHeight(2),
    fontFamily:"Poppins-Medium",
   
  },
  contentContainer1: {
    height: responsiveHeight(19),
    width: responsiveWidth(93),
    
    position: 'absolute',
    
    alignSelf:"center"
  },
  imageview: {
    height: responsiveHeight(80),
    width: responsiveWidth(96),
    borderTopLeftRadius: responsiveWidth(4),
    borderTopRightRadius: responsiveWidth(4),
  },
});

export default StartJobScreen;