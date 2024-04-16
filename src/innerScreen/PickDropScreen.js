import React, { useCallback, useRef, useMemo, useState } from 'react';
import { TouchableWithoutFeedback,StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import BottomSheet, { BottomSheetScrollView, } from '@gorhom/bottom-sheet';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TextInput } from 'react-native-paper';
import LogoScreen from '../outerScreen/LogoScreen';
import sstyles from '../../sstyle';
const PickDropScreen = ({ navigation }) => {
  const [termsChecked, setTermsChecked] = useState(false);
  const [termsChecked2, setTermsChecked2] = useState(false);

  console.log(termsChecked,"termsChecked")
  console.log(termsChecked2,"termsChecked2")
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // hooks
  //   const sheetRef = useRef<BottomSheet>(null);
  const sheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const snapPoints = useMemo(() => ['55%', '55%',], []);

  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const hideBottomSheet = () => {
    sheetRef.current?.collapse();
  };
  const renderItem = useCallback(
    item => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    console.log(option, "ghjh")
    setSelectedOption(option === selectedOption ? null : option);
  };
  return (

    <TouchableWithoutFeedback onPress={hideBottomSheet}>
    <View style={styles.container}>

      <View style={{ flex: 1, backgroundColor: "black" }}>
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
                        }}>Pick & Drop</Text>
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
          height: "100%",
          // marginHorizontal:responsiveWidth(2),
          borderRadius: responsiveWidth(4),
          // marginHorizontal:responsiveWidth(2)
        }}>
          <Image
            style={styles.imageview}
            source={require('../../assets/Images/Map.png')}
          />
          <View style={styles.contentContainer1}>
           <LogoScreen/>
          </View>
        </View>
      </View>

      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}

        onChange={handleSheetChange}>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <View
            style={styles.textinputmainview}>
            <View style={{
              flexDirection: "row",
              marginHorizontal: responsiveWidth(4),
              marginTop: responsiveHeight(2),
          
            }}>
              <Switch
                trackColor={{ false: '#767577', true: '#27AE60' }}
                thumbColor={isEnabled ? '#27AE60' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text
                style={{ 
                  fontFamily: "Poppins-Regular",
                   color: "#000000", 
                   fontSize: responsiveFontSize(1.9),
                    marginTop:responsiveHeight(0.5)
                   }}
              >Use Current Location</Text>
            </View>
            <TextInput
              label="Pickup"
              mode="outlined"
              outlineStyle={{
                borderWidth: responsiveWidth(0.2),
                borderColor: "#C8C8C8"
              }}
              placeholder="Enter Pick up Location"
              theme={{
                roundness: 15,
                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
            }}
              style={styles.textinputstyle}
            />
            <TextInput
              label="Drop"
              mode="outlined"
              outlineStyle={{
                borderWidth: responsiveWidth(0.2),
                borderColor: "#C8C8C8"
              }}
              placeholder="Enter Drop Location"
              theme={{
                roundness: 15,
                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
            }}
              style={styles.textinputstyle}
            />
            <View style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: responsiveHeight(4),
              marginHorizontal: responsiveWidth(2),
              backgroundColor: '#FFFFFF',
            }}>
              <View style={{
                width: responsiveWidth(40),
                height: responsiveHeight(6.5),
                alignSelf: 'center',
                borderWidth: responsiveWidth(.2),
                borderColor: "#C8C8C8",
                borderRadius: responsiveWidth(3),

              }}>

                <Text
                  style={{
                    position: 'absolute',
                    bottom: responsiveHeight(5.4),
                    backgroundColor: '#FFFFFF',
                    marginHorizontal: responsiveWidth(3),
                    zIndex: 1,
                  }}>
                  Man Job
                </Text>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: responsiveHeight(1.3),
                  marginLeft: responsiveHeight(2)
                }}>

                  <Image
                    style={{
                      height: responsiveHeight(3),
                      width: responsiveWidth(2.5),

                    }}
                    source={require('../../assets/Icons/men.png')}
                  />
                <TouchableOpacity onPress={() => handleOptionSelect("men")}>
                  <Image
                    style={{
                      height: selectedOption === "men" ? responsiveHeight(2.7) : responsiveHeight(2.7),
                      width: selectedOption === "men" ? responsiveWidth(15) : responsiveWidth(14),
                      marginTop: selectedOption === "men" ? responsiveHeight(0.5) : responsiveHeight(0.5),
                      marginLeft: responsiveWidth(2)
                    }}
                    source={selectedOption === "men" ? require('../../assets/Icons/blueTick.png') : require('../../assets/Icons/whiteC.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                </View>
              </View>
              <View style={{
                width: responsiveWidth(40),
                height: responsiveHeight(6.5), alignSelf: 'center', borderWidth: responsiveWidth(.2), borderColor: "#C8C8C8", borderRadius: responsiveWidth(3)
              }}>

                <Text
                  style={{
                    position: 'absolute',
                    bottom: responsiveHeight(5.4),
                    backgroundColor: '#FFFFFF',
                    marginHorizontal: responsiveWidth(3),

                    zIndex: 1,
                  }}>
                  Man Job
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: responsiveHeight(1.3), marginLeft: responsiveHeight(2) }}>

                  <Image
                    style={{
                      height: responsiveHeight(3.5),
                      width: responsiveWidth(6.5),

                    }}
                    source={require('../../assets/Icons/men3.png')}
                  />
                    <TouchableOpacity onPress={() => handleOptionSelect("Next")}>
                  <Image
                    style={{
                      height: selectedOption === "Next" ? responsiveHeight(2.7) : responsiveHeight(2.7),
                      width: selectedOption === "Next" ? responsiveWidth(14) : responsiveWidth(14),
                      marginTop: selectedOption === "Next" ? responsiveHeight(0.5) : responsiveHeight(0.5),
                      marginLeft: responsiveWidth(2)
                    }}
                    source={selectedOption === "Next" ? require('../../assets/Icons/blueTick.png') : require('../../assets/Icons/whiteC.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{ }}>
              <TouchableOpacity
                style={[sstyles.buttonText,{marginTop:responsiveHeight(5)}]}
                title="Go to Details"
                onPress={() => navigation.navigate('DeliveryType')}
              >
                <Text style={{ color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Medium',}}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  linear: {
    flex: 1,
    marginHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(3),
    height: responsiveHeight(13)
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  ownerview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: responsiveHeight(2),
    // marginHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(3)
  },
  ownerimage: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveWidth(8)
  },
  blueMessage: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    marginRight: responsiveWidth(7)
  },
  phone: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    marginRight: responsiveWidth(5.5)
  },
  ownwertext: {
    marginRight: responsiveHeight(16),
    fontSize: responsiveFontSize(2),
    fontFamily: "Poppins-Medium",
    fontSize: responsiveFontSize(1.8),
    color: "#0A0B1E"
  },
  jobview: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    height: responsiveHeight(5),
    borderBottomColor: "#F0F0F3",
    borderBottomWidth: responsiveHeight(.2),
    marginTop: responsiveHeight(2),

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
  jobview2: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    height: responsiveHeight(5),
    borderBottomColor: "#F0F0F3",
    borderBottomWidth: responsiveHeight(.1),
    paddingTop: responsiveHeight(2),
    height: responsiveHeight(6)
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
    fontSize: responsiveFontSize(2.4),
    // marginTop: responsiveHeight(2),
  },
  textinputmainview: {
    height: responsiveHeight(70),
    width: responsiveWidth(93),
    backgroundColor: '#fff',
    position: 'relative',
    left: responsiveHeight(2),
    // bottom: responsiveHeight(9),
    borderRadius: responsiveWidth(5),

  },
  textinputstyle: {
    width: responsiveWidth(85),
    height: responsiveHeight(6.5),
    alignSelf: 'center',

    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
    backgroundColor: "#FFFFFF"
  },
  button: {
    height: responsiveHeight(7.5),
    width: responsiveWidth(88),
    backgroundColor: '#27AE60',
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveWidth(4),

    elevation: 4
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
    elevation: 4,
    fontFamily: "Poppins-Medium"

  },
  imageview: {
    height: responsiveHeight(80),
    width: responsiveWidth(100),
    borderTopLeftRadius: responsiveWidth(4),
    borderTopRightRadius: responsiveWidth(4),
  },
  contentContainer1: {
    height: responsiveHeight(19),
    width: responsiveWidth(93),
    marginTop: responsiveHeight(-1.9),
    borderRadius: responsiveWidth(5),
    position: 'absolute',
    left: responsiveHeight(2),
    flexDirection: 'row',
  },
});

export default PickDropScreen;