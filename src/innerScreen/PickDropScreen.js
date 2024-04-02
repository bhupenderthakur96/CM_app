import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Switch,
} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ToggleSwitch from 'toggle-switch-react-native'

export default function PickDropScreen({ navigation }) {
  const [termsChecked, setTermsChecked] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(5),
                marginTop: responsiveHeight(1),
                marginLeft: responsiveWidth(1)
              }}
              source={require('../../assets/Icons/back.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginVertical: responsiveHeight(0.8),
              fontSize: responsiveFontSize(2),
              fontFamily: "Poppins-Medium",
              // alignSelf:"center"
              marginHorizontal: responsiveWidth(30),
              // fontWeight:"bold"
            }}>Pick & Drop</Text>

        </View>
        <View
          style={styles.containerimageview}>
          <View style={{}}>
            <Image
              style={styles.imageview}
              source={require('../../assets/Images/Map.png')}
            />
            <View style={styles.contentContainer1}>
              <Image
                style={{
                  height: responsiveHeight(20),
                  width: responsiveWidth(93),
                  alignSelf: "center",

                }}
                source={require('../../assets/Images/full.png')}
                resizeMode="contain"
              />
            </View>

            <View
              style={styles.textinputmainview}>
              <View style={{ 
                flexDirection: "row",
                marginHorizontal:responsiveWidth(4),
                marginTop:responsiveHeight(2)
                 }}>
                <Switch
                  trackColor={{ false: '#767577', true: '#27AE60' }}
                  thumbColor={isEnabled ? '#27AE60' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <Text 
                style={{fontFamily:"Poppins-Medium",color:"#000000",fontSize:responsiveFontSize(1.9)}}
                >Use Current Location</Text>
              </View>
              <TextInput
                label="Pickup"
                mode="outlined"
                outlineStyle={{ borderWidth: 1 }}
                placeholder="Enterpick up Location"
                theme={{
                  roundness: 12,

                  colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                style={styles.textinputstyle}
              />
              <TextInput
                label="Drop"
                mode="outlined"
                outlineStyle={{ borderWidth: 1 }}
                placeholder="Enter Drop Location"
                theme={{
                  roundness: 12,

                  colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                style={styles.textinputstyle}
              />
              <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: responsiveHeight(4),
                marginHorizontal: responsiveWidth(2)
              }}>
                <View style={{
                  width: responsiveWidth(40),
                  height: responsiveHeight(6.5),
                  alignSelf: 'center',
                  borderWidth: responsiveWidth(.3),
                  borderColor: "#C8C8C8",
                  borderRadius: responsiveWidth(3)
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


                    <BouncyCheckbox
                      isChecked={termsChecked}
                      onPress={() => setTermsChecked(!termsChecked)}
                      fillColor="#6369F3"
                      unfillColor="#FFFFFF"

                      size={22}
                    />

                  </View>
                </View>
                <View style={{ width: responsiveWidth(40), height: responsiveHeight(6.5), alignSelf: 'center', borderWidth: responsiveWidth(.3), borderColor: "#C8C8C8", borderRadius: responsiveWidth(3) }}>

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


                    <BouncyCheckbox
                      isChecked={termsChecked}
                      onPress={() => setTermsChecked(!termsChecked)}
                      fillColor="#6369F3"
                      unfillColor="#FFFFFF"
                      size={22}
                    />

                  </View>
                </View>
              </View>
              <View
                style={{ marginTop: responsiveHeight(5), alignSelf: 'center' }}>
                <TouchableOpacity
                  style={styles.button}
                  title="Go to Details"
                  onPress={() => navigation.navigate('DeliveryType')}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer1: {
    height: responsiveHeight(19),
    width: responsiveWidth(93),
    marginTop: responsiveHeight(1),
    borderRadius: responsiveWidth(5),
    position: 'absolute',
    left: responsiveHeight(2),
    flexDirection: 'row',
  },
  logo: {
    height: responsiveHeight(5),
    width: responsiveWidth(7),
    marginHorizontal: responsiveWidth(5),
  },
  logoText: {
    color: '#fff',
    fontSize: responsiveFontSize(2.6),
    textAlign: "center",
    marginVertical: 10
  },
  image: {
    height: responsiveHeight(20),
    width: responsiveWidth(42),
    marginLeft: responsiveHeight(2),
  },
  text: {
    color: 'black',
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'Black',
    marginTop: responsiveHeight(2),
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
    height: responsiveHeight(9),
    width: responsiveWidth(38),
    marginLeft: responsiveHeight(6),
  },
  containerimageview: {
    height: responsiveHeight(100),
    backgroundColor: '#fff',

    borderRadius: responsiveWidth(4),
  },
  imageview: {
    height: responsiveHeight(60),
    width: responsiveWidth(100),
    borderTopLeftRadius: responsiveWidth(4),
    borderTopRightRadius: responsiveWidth(4),
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
  textinputstyle: {
    width: responsiveWidth(85),
    height: responsiveHeight(6.5),
    alignSelf: 'center',

    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
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
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(2),
    elevation: 4,
    fontFamily:"Poppins-Bold"

  },
  // textinputstyle11:{
  // width: responsiveWidth(40),
  // height: responsiveHeight(6.5),
  // alignSelf: 'center',
  // }
});