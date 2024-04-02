import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BouncyCheckbox from 'react-native-bouncy-checkbox'; // Import BouncyCheckbox
import {useNavigation} from '@react-navigation/native'


export default function Item() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state variable
  const [emailError, setEmailError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hidePassword1, setHidePassword1] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);
  const [phoneNO, setphoneNO] = useState('');
  const [termsChecked, setTermsChecked] = useState(false); // State for checkbox

  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
;
  };

  const validatePassword = password => {
    return password.length >= 6; // Minimum 6 characters
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');

      // Perform login logic here
      // For example:
      navigation.navigate('Register');
    }
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

            <View style={{ marginTop: responsiveHeight(10) }}>
              <Text style={styles.textContainer}>Register</Text>
            </View>
            <View style={styles.emailContainer}>
              <TextInput
                label="Enter Name"
                mode="outlined"
                outlineStyle={{ borderWidth: 0.2 }}
                theme={{
                  roundness: 11,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                value={firstName}
                onChangeText={text => setFirstName(text)}

                style={styles.email}
              />

            </View>

            <View style={styles.emailContainer}>
              <TextInput
                label="Enter Email"
                mode="outlined"
                outlineStyle={{ borderWidth: 0.2 }}
                theme={{
                  roundness: 11,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                value={email}
                onChangeText={text => setEmail(text)}
                error={!!emailError}
                style={styles.email}
              />
              {emailError ? (
                <Text style={styles.error}>{emailError}</Text>
              ) : null}
            </View>

            <View style={styles.emailContainer}>
              <TextInput
                label="Enter Phone"
                mode="outlined"
                outlineStyle={{ borderWidth: 0.2 }}
                theme={{
                  roundness: 11,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                value={phoneNO}
                onChangeText={text => setphoneNO(text)}

                style={styles.email}
              />

            </View>

            <View style={styles.passwordContainer}>
              <TextInput
                label="Enter password"
                mode="outlined"
                outlineStyle={{ borderWidth: 0.2 }}
                theme={{
                  roundness: 11,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                value={password}
                onChangeText={text => setPassword(text)}
                error={!!passwordError}
                secureTextEntry={hidePassword1} // Toggle secure text entry based on hidePassword state
                style={styles.password}
              />
              {passwordError ? (
                <Text style={styles.error}>{passwordError}</Text>
              ) : null}
              <TouchableOpacity
                style={styles.eyeContainer}
                onPress={() => setHidePassword1(!hidePassword1)}>
                <Image
                  style={styles.eyeimage}
                  source={
                    hidePassword1
                      ? require('../../assets/Icons/eye.png')
                      : require('../../assets/Icons/eye.png')


                  }
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.passwordContainer}>
              <TextInput
                label="Confirm password"
                mode="outlined"
                outlineStyle={{ borderWidth: 0.2 }}
                theme={{
                  roundness: 11,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                error={!!passwordError}
                secureTextEntry={hidePassword2}
                style={styles.password}
              />
              {passwordError ? (
                <Text style={styles.error}>{passwordError}</Text>
              ) : null}
              <TouchableOpacity
                style={styles.eyeContainer}
                onPress={() => setHidePassword2(!hidePassword2)}>
                <Image
                  style={styles.eyeimage}
                  source={
                    hidePassword2
                      ? require('../../assets/Icons/eye.png')
                      : require('../../assets/Icons/eye.png')
                  }
                  resizeMode="contain"
                />
              </TouchableOpacity>


            </View>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(1.4), marginLeft: responsiveHeight(3) }}>
              <BouncyCheckbox
                isChecked={termsChecked}
                onPress={() => setTermsChecked(!termsChecked)}
                fillColor="#6369F3"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "#6369F3", }}
                textStyle={{ color: "#0A0B1E" }}
                size={22} 
              />
              <Text style={{ paddingTop:responsiveHeight(.5), color: "#0A0B1E",fontFamily:"Poppins-Regular" }}>I have read the terms and conditions    </Text>
            
            </View>
            <Text style={{  color: "#0A0B1E", marginLeft:responsiveHeight(9),fontFamily:"Poppins-Regular"}}>guidelines </Text>

            <View>
              <TouchableOpacity
                style={styles.touch}
                title="Go to Details"
                onPress={() => handleLogin()}>
                <Text style={styles.login}>sign Up</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.lastview}>
              <Text style={styles.not}>Already registered? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login") }>
                <Text style={styles.up}>Login</Text>
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
    borderRadius: responsiveWidth(19),
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
    fontFamily:"Poppins-Regular"
  },
  emailContainer: {
    alignSelf: 'center',
  },
  email: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(90),
    height: responsiveHeight(6.8),
    fontSize: responsiveFontSize(2),
    fontFamily:"Poppins-Regular"
  },
  passwordContainer: {
    alignSelf: 'center',
  },
  password: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(90),
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2),
    fontFamily: 'Regular',
  },
  eyeContainer: {
    position: 'absolute',
    top: '33%',
    right: '4%',
    height: responsiveHeight(8),
    width: responsiveWidth(8),
    alignContent: 'center',
    justifyContent: 'center',
  },
  eyeimage: {
    height: responsiveHeight(9),
    width: responsiveWidth(8),
  },
  forgotText: {
    color: '#6369F3',
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(7),
    paddingTop: responsiveHeight(1),
    fontFamily: 'Regular',
  },
  touch: {
    height: responsiveHeight(7.2),
    width: responsiveWidth(90),
    backgroundColor: '#27AE60',
    borderRadius: responsiveWidth(5),
    marginTop: responsiveHeight(6),
    alignSelf: 'center',
    elevation: 4,
  },
  login: {
    color: '#fff',
    textAlign: 'center',
    marginTop: responsiveHeight(1.7),
    fontSize: responsiveFontSize(2.1),
    fontFamily:"Poppins-Regular"
  },

  lastview: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: responsiveHeight(4),
  },
  not: {
    color: '#757680',
    fontSize: responsiveFontSize(2),
    fontFamily:"Poppins-Regular"
  },
  up: {
    color: '#6369F3',
    fontSize: responsiveFontSize(2.1),
    textDecorationLine: 'underline',
    fontFamily:"Poppins-Regular"
  },
});