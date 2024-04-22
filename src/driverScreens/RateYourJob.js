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
import sstyles from '../../sstyle';
const StartJobScreen = ({ navigation }) => {
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
  const snapPoints = useMemo(() => ['63%', '65%',], []);

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
                        }}>Rate Your Job</Text>
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
                width: responsiveWidth(25),
                alignSelf: "center",
                marginTop: responsiveHeight(2.5),
               
                // marginLeft: responsiveWidth(2.5),

              }}
              source={require('../../assets/Images/man.png')}
              resizeMode="contain"
            />
            <Text style={{
              textAlign: "center",
              marginTop: responsiveHeight(1.5),
              color: "white",
              fontFamily: "Poppins-Medium",
              fontSize: responsiveFontSize(2.2)
            }}>Robert C. Stone</Text>
            <StarRating
              style={{
                alignSelf: "center",
                marginTop: responsiveHeight(0)
              }}
              starStyle={{ marginHorizontal: responsiveWidth(0.1) }}
              rating={rating}
              onChange={setRating}
              starSize={20}
            />
          </View>
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}

        onChange={handleSheetChange}>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>

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
              style={sstyles.buttonText}
              title="Go to Details"
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: "black"
  },
  contentContainer: {
    backgroundColor: 'white',
    height:"100%"
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
    fontFamily:"Poppins-Medium"
    // marginTop: responsiveHeight(2),
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
});

export default StartJobScreen;