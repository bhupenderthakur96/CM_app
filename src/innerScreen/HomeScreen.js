import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Dropdown} from 'react-native-element-dropdown';
import sstyles from '../../sstyle';
import {useDispatch, useSelector} from 'react-redux';
import {resetColor, customerColor} from '../../redux/colorSlice';
import CountryPicker, {Flag} from 'react-native-country-picker-modal';
// import { getCurrencies, getLocales } from "react-native-localize";
// import * as RNLocalize from 'react-native-localize';
import {getLocales} from 'react-native-localize';
import {countryLanguages} from '../../constants/country';

const data = [
  {label: 'English', value: 'English'},
  {label: 'Spanish', value: 'Spanish'},
  {label: 'French', value: 'French'},
  {label: 'Hindi', value: 'Hindi'},
  {label: 'Spanish', value: 'Spanish'},
];

const data1 = [
  {label: 'Dollar', value: 'Dollar'},
  {label: 'Canadian Dollar', value: 'Canadian Dollar'},
];
export default function HomeScreen({navigation}) {
  const [language, setLanguage] = useState('');
  const locales = getLocales();
  locales.forEach(locale => {
    const {languageTag} = locale;
    console.log(languageTag);
  });

  // locales.forEach(locale => {
  //   console.log(locale,"hggh");
  // });
  // useEffect(() => {
  //   const currentLocale = RNLocalize.getLocales()[0].languageCode;
  //   setLanguage(currentLocale);
  // }, []);
  // console.log(getLocales(),"ppppp");
  // console.log(language,"ppppp");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); // Indicator for loading state
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);

  const [isTrue, setIsTrue] = useState(true);
  const renderLabel = () => {
    if (value1 || isFocus1) {
      return (
        <Text style={[styles.label, isFocus1 && {color: 'gray'}]}>
          Read language
        </Text>
      );
    }
    return null;
  };
  const renderLabe2 = () => {
    if (value2 || isFocus2) {
      return (
        <Text style={[styles.label2, isFocus2 && {color: 'gray'}]}>
          Hear language
        </Text>
      );
    }
    return null;
  };
  const renderLabe3 = () => {
    if (value3 || isFocus3) {
      return (
        <Text style={[styles.label3, isFocus3 && {color: 'gray'}]}>
          Select Currency
        </Text>
      );
    }
    return null;
  };
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [showCountryPicker2, setShowCountryPicker2] = useState(false);
  const [showCountryPicker3, setShowCountryPicker3] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const onSelectCountry = country => {
    console.log(country, '11111');
    const japan = countryLanguages.find(item => item?.code === country?.cca2);

    console.log(japan?.languages, 'japan');
    setValue1(japan?.languages);
    setSelectedCountry(country);
  };

  const [selectedCountry2, setSelectedCountry2] = useState(null);

  const onSelectCountry2 = country => {
    console.log(country, '2222');
    const japan = countryLanguages.find(item => item?.code === country?.cca2);

    console.log(japan?.languages, 'japan');
    setValue2(japan?.languages);
    setSelectedCountry2(country);
  };

  const [selectedCountry3, setSelectedCountry3] = useState(null);

  const onSelectCountry3 = country => {
    console.log(country, '33333');
    const japan = country?.currency

    
    setValue3(japan);
    setSelectedCountry3(country);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/Images/Rectangle1.png')}
                resizeMode="contain"
              />
              <Image
                style={styles.image}
                source={require('../../assets/Images/Rectangle1.png')}
                resizeMode="contain"
              />
            </View>
            <View style={styles.logo}>
              <Image
                style={styles.truckimage}
                source={require('../../assets/Images/trucklogo.png')}
                resizeMode="contain"
              />
            </View>

            <View style={{marginTop: responsiveHeight(6)}}>
              <Text style={styles.title}>
                Need Something Moved?{'\n'}Please choose how you{'\n'}want to
                intract
              </Text>

              <Text style={styles.subtitle}>
                Get the best delivery service volume here!
              </Text>
              <Text style={styles.subtitle}>
                Skilled professional drivers are waiting
              </Text>
            </View>
            {/* <TextInput
              label="Enter password"
              mode="outlined"
              outlineStyle={{
                borderWidth: responsiveWidth(0.2),
                borderColor: '#C8C8C8',
              }}
              theme={{
                roundness: 15,
                colors: {
                  primary: '#C8C8C8',
                  placeholder: '#C8C8C8',
                  text: '#C8C8C8',
                  underlineColor: '#C8C8C8',
                },
              }}
              left={
                <TouchableOpacity
                onPress={() => setShowCountryPicker(true)}>
                <Flag
                  countryCode={
                    selectedCountry ? selectedCountry.cca2 : 'US'
                  }
                  flagSize={20}
                />
              </TouchableOpacity>
              }
              // value={password}
            /> */}
            {/* first selection */}
            <TouchableOpacity
              style={styles.container1}
              onPress={() => setShowCountryPicker(true)}>
                <View style={styles.absoluteBox}>
                  <Text style={styles.text}>Select text language</Text>
                </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Flag
                  countryCode={selectedCountry ? selectedCountry.cca2 : 'US'}
                  flagSize={20}
                />
                <Text style={{
                  fontFamily:"Poppins-Regular",
                  fontWeight:"400",
                  fontSize:responsiveFontSize(1.8),
                  marginTop:responsiveHeight(0.5),
                  color:"#0A0B1E"
                  }}> {value1 ? value1 : 'Select text language'}</Text>
              </View>

              <Image
                source={require('../../assets/Icons/downArrow.png')}
                style={{height: responsiveHeight(4), width: responsiveWidth(5),marginRight:responsiveWidth(2)}}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {showCountryPicker && (
              <CountryPicker
                visible={showCountryPicker}
                onClose={() => setShowCountryPicker(false)}
                onSelect={onSelectCountry}
              />
            )}
            {/* end first selection */}

            <TouchableOpacity
              style={[styles.container1,{marginTop:responsiveHeight(3.6)}]}
              onPress={() => setShowCountryPicker2(true)}>
                   <View style={styles.absoluteBox}>
                  <Text style={styles.text}>Select audio language</Text>
                </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Flag
                  countryCode={selectedCountry2 ? selectedCountry2.cca2 : 'US'}
                  flagSize={20}
                />
                <Text
                 style={{
                  fontFamily:"Poppins-Regular",
                  fontWeight:"400",
                  fontSize:responsiveFontSize(1.8),
                  marginTop:responsiveHeight(0.5),
                  color:"#0A0B1E"
                  }}
                
                > {value2 ? value2 : 'Select audio language'}</Text>
              </View>

              <Image
                source={require('../../assets/Icons/downArrow.png')}
                style={{
                  height: responsiveHeight(4),
                   width: responsiveWidth(5),
                   marginRight:responsiveWidth(2),

                  }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {showCountryPicker2 && (
              <CountryPicker
                visible={showCountryPicker2}
                onClose={() => setShowCountryPicker2(false)}
                onSelect={onSelectCountry2}
              />
            )}

            {/* selecond selection */}
            <TouchableOpacity
               style={[styles.container1,{marginTop:responsiveHeight(3.6)}]}
              onPress={() => setShowCountryPicker3(true)}>
                   <View style={styles.absoluteBox}>
                  <Text style={styles.text}>Select Currency</Text>
                </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Flag
                  countryCode={selectedCountry3 ? selectedCountry3.cca2 : 'US'}
                  flagSize={20}
                />
                <Text
                 style={{
                  fontFamily:"Poppins-Regular",
                  fontWeight:"400",
                  fontSize:responsiveFontSize(1.8),
                  marginTop:responsiveHeight(0.5),
                  color:"#0A0B1E"
                  }}
                > {value3 ? value3 : 'Select Currency'}</Text>
              </View>

              <Image
                source={require('../../assets/Icons/downArrow.png')}
                style={{
                  height: responsiveHeight(4), 
                  width: responsiveWidth(5),
                  marginRight:responsiveWidth(2)
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {showCountryPicker3 && (
              <CountryPicker
                visible={showCountryPicker3}
                onClose={() => setShowCountryPicker3(false)}
                onSelect={onSelectCountry3}
              />
            )}

            {/* end second selection */}

            {/* <View style={{alignSelf: 'center', marginTop: responsiveHeight(1)}}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus1 && {borderColor: '#C8C8C8'}]}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus1 ? 'Select text language' : 'English US'}
                placeholderStyle={{
                  color: '#6C6D78',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Poppins-Regular',
                }}
                selectedTextStyle={{
                  color: '#0A0B1E',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Poppins-Regular',
                }}
                searchPlaceholder="Search..."
                value={value1}
                onFocus={() => setIsFocus1(true)}
                onBlur={() => setIsFocus1(false)}
                onChange={item => {
                  console.log(item.value, 'item.value');
                  setValue1(item.value);
                  setIsFocus1(false);
                }}
                renderLeftIcon={() => (
                  <TouchableOpacity onPress={() => setShowCountryPicker(true)}>
                    <Flag
                      countryCode={
                        selectedCountry ? selectedCountry.cca2 : 'US'
                      }
                      flagSize={20}
                    />
                  </TouchableOpacity>
                )}
              />
              {showCountryPicker && (
                <CountryPicker
                  visible={showCountryPicker}
                  onClose={() => setShowCountryPicker(false)}
                  onSelect={onSelectCountry}
                />
              )}
            </View> */}
            {/* <View style={{alignSelf: 'center'}}>
              {renderLabe2()}
              <Dropdown
                style={[styles.dropdown, isFocus2 && {borderColor: '#C8C8C8'}]}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus2 ? 'Select audio' : 'English US'}
                placeholderStyle={{
                  color: '#6C6D78',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Poppins-Regular',
                }}
                selectedTextStyle={{
                  color: '#0A0B1E',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Poppins-Regular',
                }}
                searchPlaceholder="Search..."
                value={value2}
                onFocus={() => setIsFocus2(true)}
                onBlur={() => setIsFocus2(false)}
                onChange={item => {
                  setValue2(item.value);
                  setIsFocus2(false);
                }}
                renderLeftIcon={() => (
                  <TouchableOpacity onPress={() => setShowCountryPicker2(true)}>
                    <Flag
                      countryCode={
                        selectedCountry2 ? selectedCountry2.cca2 : 'US'
                      }
                      flagSize={20}
                    />
                  </TouchableOpacity>
                )}
              />
              {showCountryPicker2 && (
                <CountryPicker
                  visible={showCountryPicker2}
                  onClose={() => setShowCountryPicker2(false)}
                  onSelect={onSelectCountry2}
                />
              )}
            </View> */}
            {/* <View style={{alignSelf: 'center'}}>
              {renderLabe3()}
              <Dropdown
                style={[styles.dropdown, isFocus3 && {borderColor: '#C8C8C8'}]}
                data={data1}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={
                  !isFocus3 ? 'Select Currency' : 'United States Dollar'
                }
                placeholderStyle={{
                  color: '#6C6D78',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Poppins-Regular',
                }}
                selectedTextStyle={{
                  color: '#0A0B1E',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Poppins-Regular',
                }}
                searchPlaceholder="Search..."
                value={selectedCountry3}
                onFocus={() => setIsFocus3(true)}
                onBlur={() => setIsFocus3(false)}
                onChange={item => {
                  setValue3(item.value);
                  setIsFocus3(false);
                }}
                renderLeftIcon={() => (
                  <TouchableOpacity
                    onPress={() => {
                      setShowCountryPicker3(true);
                      setSelectedCountry3({
                        label: selectedCountry3.label,
                        value: selectedCountry3.value,
                        currency: selectedCountry3.currency,
                      });
                    }}>
                    <Flag
                      countryCode={
                        selectedCountry3 ? selectedCountry3.cca2 : 'US'
                      }
                      flagSize={20}
                    />
                  </TouchableOpacity>
                )}
              />
              {showCountryPicker3 && (
                <CountryPicker
                  visible={showCountryPicker3}
                  onClose={() => setShowCountryPicker3(false)}
                  onSelect={onSelectCountry3}
                />
              )}
            </View> */}
            <TouchableOpacity
              style={[sstyles.buttonText, {marginTop: responsiveHeight(5)}]}
              onPress={() => {
                navigation.navigate('drawer');
                dispatch(resetColor());
                dispatch(customerColor());
              }}>
              {isLoading ? (
                <ActivityIndicator
                  size="small"
                  color="#ffffff"
                  style={styles.activityIndicator}
                />
              ) : (
                <Text style={styles.loginText}>Let's Get Moving</Text>
              )}
            </TouchableOpacity>

            <View>
              <TouchableOpacity
                style={styles.touch2}
                onPress={() => {
                  navigation.navigate('loginD', {isTrue: isTrue});
                }}>
                <Text style={styles.touchtext}>Driver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B1E',
  },
  innerContainer: {
    backgroundColor: '#fff',
    marginTop: responsiveHeight(21),
    borderTopLeftRadius: responsiveWidth(8),
    borderTopRightRadius: responsiveWidth(8),
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: responsiveHeight(10.9),
    width: responsiveWidth(19),
    marginTop: responsiveHeight(-3),
    borderRadius: responsiveWidth(20),
  },
  logo: {
    backgroundColor: '#0A0B1E',
    height: responsiveHeight(18),
    width: responsiveWidth(64.9),
    justifyContent: 'space-around',
    borderRadius: responsiveWidth(9.1),
    alignSelf: 'center',
    marginTop: responsiveHeight(-22.4),
  },
  truckimage: {
    height: responsiveHeight(18),
    width: responsiveWidth(42),
    alignSelf: 'center',
  },
  textContainer: {
    color: '#0A0B1E',
    textAlign: 'center',
    fontSize: responsiveFontSize(3.1),
    fontFamily: 'poppins-Black',
  },

  touch: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    backgroundColor: '#27AE60',
    borderRadius: responsiveWidth(5),
    marginTop: responsiveHeight(4.5),
    alignSelf: 'center',
    elevation: 4,
    justifyContent: 'center',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Medium',
  },
  touch2: {
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    backgroundColor: '#6369F3',
    borderRadius: responsiveWidth(5),
    marginTop: responsiveHeight(3),
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginBottom: responsiveHeight(7),
  },
  touchtext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Medium',
  },

  label: {
    position: 'absolute',
    backgroundColor: '#FFF',
    left: responsiveWidth(4),
    top: responsiveHeight(2.5),
    zIndex: 999,
    paddingHorizontal: responsiveWidth(1),
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'Poppins-Regular',
  },
  label2: {
    position: 'absolute',
    backgroundColor: '#FFF',
    left: responsiveWidth(4),
    top: responsiveHeight(2.5),
    zIndex: 999,
    paddingHorizontal: responsiveWidth(1),
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'Poppins-Regular',
  },
  label3: {
    position: 'absolute',
    backgroundColor: '#FFF',
    left: responsiveWidth(4),
    top: responsiveHeight(2.5),
    zIndex: 999,
    paddingHorizontal: responsiveWidth(1),
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'Poppins-Regular',
  },
  dropdown: {
    marginTop: responsiveHeight(4),
    backgroundColor: '#FFFFFF',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(3),
    height: responsiveHeight(7.5),
    paddingHorizontal: responsiveWidth(5),
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(5),
    // backgroundColor: "red",
    borderColor: '#C8C8C8',
    color: '#0A0B1E',
    // borderRadius: 100
    // height:100
  },
  title: {
    color: '#0A0B1E',
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    color: '#6C6D78',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(0.6),
    fontFamily: 'Poppins-Regular',
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 20,
    paddingHorizontal: responsiveHeight(1),
    marginHorizontal: '5%',
    marginTop: responsiveHeight(5),
    paddingVertical:'3%'
  },
  
  input1: {
    flex: 1,
    height: 40,
  },
  absoluteBox:{
    position:'absolute',
    top:-15,
    left:15,
    backgroundColor:'#ffffff',
    paddingVertical:2,
    paddingHorizontal:5
  },
  text:{
    color:'#C8C8C8',
    fontWeight:'600',
    fontFamily:"Poppins-Regular"
  }
});
