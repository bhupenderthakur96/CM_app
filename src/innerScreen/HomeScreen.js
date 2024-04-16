import React, {useState} from 'react';
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
const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
];

const data1 = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
];
export default function HomeScreen({navigation}) {
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

            <View style={{marginTop: responsiveHeight(10)}}>
              <Text style={styles.title}>Need Something Moved?</Text>
              <Text style={styles.subtitle}>
                Get the best delivery service volume here!
              </Text>
              <Text style={styles.subtitle}>
                Skilled professional drivers are waiting
              </Text>
            </View>

            <View style={{alignSelf: 'center', marginTop: responsiveHeight(1)}}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus1 && {borderColor: '#C8C8C8'}]}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus1 ? 'Read Language' : 'English US'}
                placeholderStyle={{color:"#6C6D78",fontSize:responsiveFontSize(2),fontFamily:"Poppins-Regular"}}
                selectedTextStyle={{color:"#0A0B1E",fontSize:responsiveFontSize(2),fontFamily:"Poppins-Regular"}}
                searchPlaceholder="Search..."
                value={value1}
                onFocus={() => setIsFocus1(true)}
                onBlur={() => setIsFocus1(false)}
                onChange={item => {
                  setValue1(item.value);
                  setIsFocus1(false);
                }}
                renderLeftIcon={() => (
                  <Image
                    source={require('../../assets/Images/Reading.png')}
                    style={{
                      height: responsiveHeight(4),
                      width: responsiveWidth(9),
                      marginBottom: responsiveHeight(0.4),
                    }}
                    resizeMode="contain"
                  />
                )}
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              {renderLabe2()}
              <Dropdown
                style={[styles.dropdown, isFocus2 && {borderColor: '#C8C8C8'}]}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus2 ? 'Hear Language' : 'English US'}
                placeholderStyle={{color:"#6C6D78",fontSize:responsiveFontSize(2),fontFamily:"Poppins-Regular"}}
                selectedTextStyle={{color:"#0A0B1E",fontSize:responsiveFontSize(2),fontFamily:"Poppins-Regular"}}
                searchPlaceholder="Search..."
                value={value2}
                onFocus={() => setIsFocus2(true)}
                onBlur={() => setIsFocus2(false)}
                onChange={item => {
                  setValue2(item.value);
                  setIsFocus2(false);
                }}
                renderLeftIcon={() => (
                  <Image
                    source={require('../../assets/Images/Hearing.png')}
                    style={{
                      height: responsiveHeight(4),
                      width: responsiveWidth(9),
                      marginBottom: responsiveHeight(0.4),
                      
                    }}
                    resizeMode="contain"
                  />
                )}
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              {renderLabe3()}
              <Dropdown
                style={[styles.dropdown, isFocus3 && {borderColor: '#C8C8C8'}]}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus3 ? 'Select Currency' : 'United States Dollar'}
                placeholderStyle={{color:"#6C6D78",fontSize:responsiveFontSize(2),fontFamily:"Poppins-Regular"}}
                selectedTextStyle={{color:"#0A0B1E",fontSize:responsiveFontSize(2),fontFamily:"Poppins-Regular"}}
                searchPlaceholder="Search..."
                value={value3}
                onFocus={() => setIsFocus3(true)}
                onBlur={() => setIsFocus3(false)}
                onChange={item => {
                  setValue3(item.value);
                  setIsFocus3(false);
                }}
                renderLeftIcon={() => (
                  <Image
                    source={require('../../assets/Images/Dollar.png')}
                    style={{
                      height: responsiveHeight(4),
                      width: responsiveWidth(9),
                      marginBottom: responsiveHeight(0.4),
                    }}
                    resizeMode="contain"
                  />
                )}
              />
            </View>
            <TouchableOpacity
              style={[sstyles.buttonText,{marginTop:responsiveHeight(5)}]}
              onPress={() =>{navigation.navigate("drawer")}}>
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
              <TouchableOpacity style={styles.touch2}
               onPress={() =>{navigation.navigate("loginD",{isTrue:isTrue})}}
              >
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
    color:"#0A0B1E"
    // borderRadius: 100
    // height:100
  },
  title: {
    color: '#0A0B1E',
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    fontFamily:"Poppins-Medium"
  },
  subtitle: {
    color: '#6C6D78',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(0.6),
    fontFamily:"Poppins-Regular"
  },
});