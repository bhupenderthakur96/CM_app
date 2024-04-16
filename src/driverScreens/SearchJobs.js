import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Switch
} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Slider from '@react-native-community/slider';
// import Slider from 'react-native-slider';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { TextInput } from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import LogoScreen from '../outerScreen/LogoScreen';
import sstyles from '../../sstyle';
export default function SearchJobs({ navigation }) {
  const [termsChecked, setTermsChecked] = useState(false);
  const [value, setValue] = useState(3);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const enableScroll = () => setScrollEnabled(true);
  const disableScroll = () => setScrollEnabled(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    console.log(option, "ghjh")
    setSelectedOption(option === selectedOption ? null : option);
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ flexDirection: "row", }}>

          <Text
            style={{
              color: "white",
              textAlign: "center",
              width: '100%',
              marginVertical: responsiveHeight(2),
              fontSize: responsiveFontSize(2.2),
              fontFamily: "Poppins-Medium",
              // alignSelf:"center",
              alignSelf: "center",
              // marginLeft: responsiveWidth(-8.5),
              // fontWeight:"bold"
            }}>Search Jobs</Text>
          <TouchableOpacity style={{ height: "100%", justifyContent: 'center', position: "absolute" }}
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
        <Image
          source={require("../../assets/Images/line.png")}
          style={{ width: responsiveWidth(2), height: "100%", position: "absolute", marginTop: responsiveHeight(9) }}
        />
        <Image
          source={require("../../assets/Images/line.png")}
          style={{ width: responsiveWidth(2), height: "100%", alignSelf: "flex-end", position: "absolute", marginTop: responsiveHeight(9) }}
        />
        <View style={styles.containerimageview}>
          <LogoScreen />
          <View
            style={styles.selectview}>
            <Text style={styles.selecttext}>
              Select Distance
            </Text>
            <Text style={styles.selecttext1}>
              {value} km
            </Text>
          </View>
          <View style={styles.sliderview}>

            {/* <MultiSlider
        // your MultiSlider props here
        onValuesChangeStart={disableScroll}
        onValuesChangeFinish={enableScroll}
        
          selectedStyle={{
            backgroundColor: 'gold',
          }}
          unselectedStyle={{
            backgroundColor: 'silver',
          }}
          // values={[5]}
          // containerStyle={{
          //   height: 40,
          // }}
          trackStyle={{
            height: 10,
            // backgroundColor: 'red',
          }}
          touchDimensions={{
            height: 40,
            width: 40,
            borderRadius: 20,
            slipDisplacement: 40,
          }}
        
      /> */}

          </View>
          <View style={{ marginVertical: responsiveHeight(2), marginLeft: responsiveWidth(2) }}>
            <Slider
              value={value}
              onValueChange={newValue => setValue(newValue)}
              minimumValue={0}
              maximumValue={1000}
              minimumTrackTintColor="#27AE60"
              maximumTrackTintColor="#C8C8C8"
              thumbTintColor="#6369F3"
              style={{ width: responsiveWidth(97.5) }}
            />
          </View>
          <View style={{ flexDirection: "row", marginHorizontal: responsiveWidth(4) }}>
            <Switch
              trackColor={{ false: '#767577', true: '#27AE60' }}
              thumbColor={isEnabled ? '#27AE60' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.usetext}>
              Use current location
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TextInput
              label="Location"
              placeholder="Enter your Location"
              placeholderTextColor="#84858F"
              mode="outlined"
              outlineStyle={{
                borderWidth: responsiveWidth(0.2),
                borderColor: "#C8C8C8"
              }}
              theme={{
                roundness: 15,
                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
            }}
              style={styles.textinputview}

            />
            {/* <TouchableOpacity
              style={styles.touchstyle}>
              <Image
                style={styles.imagestyle}
                source={require('../../assets/Images/Locationmap.png')}
              />
            </TouchableOpacity> */}
          </View>
          <View style={styles.textinputview1}>
            <TextInput
              mode="outlined"
              multiline
              numberOfLines={8}
              placeholder="Job Item Description"
              placeholderTextColor="#84858F"
              outlineStyle={{
                borderWidth: responsiveWidth(0.2),
                borderColor: "#C8C8C8"
              }}
              theme={{
                roundness: 15,
                colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
            }}
              style={styles.textinputstyle1}
            />
          </View>
          <Text
            style={styles.choosetext}>
            Choose Your Job Type
          </Text>
          <View style={styles.nextview}>
            <View
              style={styles.nexttext}>
              <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <Text style={styles.nexttextstyle}>Next day</Text>

                {/* <BouncyCheckbox
                  style={{ position: "relative", left: responsiveWidth(4) }}
                  isChecked={termsChecked}
                  onPress={() => setTermsChecked(!termsChecked)}
                  fillColor="#27AE60"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: '#27AE60' }}
                  textStyle={{ color: '#27AE60' }}
                  size={22}
                /> */}
                <TouchableOpacity onPress={() => handleOptionSelect("Next")}>
                  <Image
                    style={{
                      height: selectedOption === "Next" ? responsiveHeight(2.7) : responsiveHeight(2.7),
                      width: selectedOption === "Next" ? responsiveWidth(5) : responsiveWidth(5),
                      marginTop: selectedOption === "Next" ? responsiveHeight(0.3) : responsiveHeight(0.3),
                      marginLeft: responsiveWidth(2)
                    }}
                    source={selectedOption === "Next" ? require('../../assets/Icons/greenTick.png') : require('../../assets/Icons/greenC.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={styles.expressview}>
              <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <Text style={styles.expresstext}>Express</Text>

                {/* <BouncyCheckbox
                  style={{ position: "relative", left: responsiveWidth(4) }}
                  isChecked={termsChecked}
                  onPress={() => setTermsChecked(!termsChecked)}
                  fillColor="#FFC107"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: '#FFC107' }}
                  textStyle={{ color: '#FFC107' }}
                  size={22}
                /> */}

                <TouchableOpacity onPress={() => handleOptionSelect("Express")}>
                  <Image
                    style={{
                      height: selectedOption === "Express" ? responsiveHeight(2.7) : responsiveHeight(2.7),
                      width: selectedOption === "Express" ? responsiveWidth(5) : responsiveWidth(5),
                      marginTop: selectedOption === "Express" ? responsiveHeight(0.3) : responsiveHeight(0.3),
                      marginLeft: responsiveWidth(2)
                    }}
                    source={selectedOption === "Express" ? require('../../assets/Icons/yellowTick.png') : require('../../assets/Icons/YellowC.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.economyview}>
            <View
              style={styles.economytext}>
              <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                <Text style={styles.economytextstyle}>Economy</Text>

                <TouchableOpacity onPress={() => handleOptionSelect("economy")}>
                  <Image
                    style={{
                      height: selectedOption === "economy" ? responsiveHeight(2.7) : responsiveHeight(2.7),
                      width: selectedOption === "economy" ? responsiveWidth(5) : responsiveWidth(5),
                      marginTop: selectedOption === "economy" ? responsiveHeight(0.3) : responsiveHeight(0.3),
                      marginLeft: responsiveWidth(2)
                    }}
                    source={selectedOption === "economy" ? require('../../assets/Icons/redTick.png') : require('../../assets/Icons/redCl.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={styles.anytext}>
              <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <Text style={styles.anytextstyle}>Any</Text>

                {/* <BouncyCheckbox
                  style={{ position: "relative", left: responsiveWidth(4) }}
                  isChecked={termsChecked}
                  onPress={() => setTermsChecked(!termsChecked)}
                  fillColor="#0A0B1E"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: '#0A0B1E' }}
                  textStyle={{ color: '#0A0B1E' }}
                  size={22}
                /> */}

                <TouchableOpacity onPress={() => handleOptionSelect("any")}>
                  <Image
                    style={{
                      height: selectedOption === "any" ? responsiveHeight(2.7) : responsiveHeight(2.7),
                      width: selectedOption === "any" ? responsiveWidth(5) : responsiveWidth(5),
                      marginTop: selectedOption === "any" ? responsiveHeight(0.3) : responsiveHeight(0.3),
                      marginLeft: responsiveWidth(2)
                    }}
                    source={selectedOption === "any" ? require('../../assets/Icons/blackTick.png') : require('../../assets/Icons/blackCl.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => { navigation.navigate("openJob") }}
             style={[sstyles.buttonText, { marginTop: responsiveHeight(5) }]}
            >
              <Text
               style={{
                fontFamily: "Poppins-Medium",
                fontSize: responsiveFontSize(2),
                color: '#fff',
                textAlign: 'center',
            }}
                >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer1: {
    backgroundColor: '#E8E8E8',
    height: responsiveHeight(19.8),
    width: responsiveWidth(93),
    marginTop: responsiveHeight(2),
    borderRadius: responsiveWidth(5),
    alignSelf: 'center',

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
  selectview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    marginHorizontal: responsiveWidth(5)
  },
  selecttext: {
    color: '#C0C0C5',
    fontFamily: "Poppins-Regular",
    fontSize: responsiveFontSize(1.5),

  },
  selecttext1: {
    color: '#0A0B1E',
    fontFamily: "Poppins-Regular",
    fontSize: responsiveFontSize(1.8),

  },
  sliderview: {
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  usetext: {
    // marginLeft: responsiveHeight(4)
    color: "#000000",
    fontFamily: "Poppins-Regular",
    fontSize: responsiveFontSize(1.7),
    marginTop: responsiveHeight(0.4)
  },
  textinputview: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',

  },
  touchstyle: {
    position: 'absolute',
    top: responsiveHeight(2.7),
    right: responsiveHeight(5),
    height: responsiveHeight(8),
    width: responsiveWidth(8),
    alignContent: 'center',
    justifyContent: 'center',
  },
  imagestyle: {
    height: responsiveHeight(4),
    width: responsiveWidth(6.9),
  },
  textinputview1: {
    alignItems: 'center',
    marginTop: responsiveHeight(4)
  },
  textinputstyle1: {
    height: responsiveHeight(10),
    width: responsiveWidth(90),
    fontFamily: "Poppins-Regular",
    fontSize: responsiveFontSize(1.5),
    color: "#C8C8C8"
  },
  choosetext: {
    marginTop: responsiveHeight(2),
    marginLeft: responsiveHeight(2),
    fontSize: responsiveFontSize(2),
    fontFamily: "Poppins-Medium",
    color: "#0A0B1E"
  },
  nextview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: responsiveHeight(1),
    marginHorizontal: responsiveWidth(2)
  },
  nexttext: {
    backgroundColor: '#fff',
    padding: responsiveHeight(1.8),
    borderWidth: responsiveWidth(0.3),
    borderColor: '#27AE60',
    borderRadius: responsiveWidth(4),
    width: responsiveWidth(42),
  },
  nexttextstyle: {
    marginTop: responsiveHeight(0.6),
    fontFamily: "Poppins-Medium",
    fontSize: responsiveFontSize(1.5),
    color: "#27AE60"
  },
  expressview: {
    backgroundColor: '#fff',

    padding: responsiveHeight(1.8),
    borderWidth: responsiveWidth(0.3),
    borderColor: '#FFC107',
    borderRadius: responsiveWidth(4),

    width: responsiveWidth(42),
  },
  expresstext: {
    marginTop: responsiveHeight(0.6),
    fontFamily: "Poppins-Medium",
    fontSize: responsiveFontSize(1.5),
    color: "#FFC107"
  },
  economyview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: responsiveHeight(2.5),
    marginHorizontal: responsiveWidth(2)
  },
  economytext: {
    backgroundColor: '#fff',

    padding: responsiveHeight(1.8),
    borderWidth: responsiveWidth(0.3),
    borderColor: '#0A0B1E',
    borderRadius: responsiveWidth(4),

    width: responsiveWidth(42),
  },
  economytextstyle: {
    marginTop: responsiveHeight(0.6),
    fontFamily: "Poppins-Medium",
    fontSize: responsiveFontSize(1.5),
    color: "#DC3545"
  },
  anytext: {
    backgroundColor: '#fff',

    padding: responsiveHeight(1.8),
    borderWidth: responsiveWidth(0.3),
    borderColor: '#0A0B1E',
    borderRadius: responsiveWidth(4),

    width: responsiveWidth(42),
  },
  anytextstyle: {
    marginTop: responsiveHeight(0.6),
    fontFamily: "Poppins-Medium",
    fontSize: responsiveFontSize(1.5),
    color: "#0A0B1E"
  },
  // checkboxview:{
  //   position: 'absolute',
  //   marginLeft: responsiveHeight(17.8),
  // },
  containerimageview: {
    height: responsiveHeight(100),
    backgroundColor: '#fff',

    borderRadius: responsiveWidth(4),
    marginHorizontal: responsiveWidth(2)
  },

  button: {
    height: responsiveHeight(1),
    width: responsiveWidth(88),
    backgroundColor: '#27AE60',
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveWidth(4),
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.4),
    marginTop: responsiveHeight(2),
  },
});