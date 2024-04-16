import React, { useState } from 'react';
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
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function LoginDriver({ navigation, route},) {
  const { isTrue } = route.params;
  console.log(isTrue,"data binding")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Indicator for loading state



  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Image
          style={{width:responsiveWidth(2),height:responsiveHeight(100),marginTop:responsiveHeight(21.7)}}
          source={require("../../assets/Images/line.png")}
          />
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
              <Text style={styles.textContainer}>Login</Text>
            </View>

            <View style={styles.emailContainer}>
              <TextInput
                label="Enter Email"
                mode="outlined"
                outlineStyle={{ 
                    borderWidth:responsiveWidth(0.2),
                    borderColor:"#C8C8C8"
                   }}
                   theme={{
                    roundness: 15,
                    colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                value={email}
                onChangeText={(text) => setEmail(text)}
                error={!!emailError}
                style={styles.email}
              />
              {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                label="Enter password"
                mode="outlined"
                outlineStyle={{ 
                    borderWidth:responsiveWidth(0.2),
                    borderColor:"#C8C8C8"
                   }}
                   theme={{
                    roundness: 15,
                    colors: { primary: '#C8C8C8', placeholder: '#C8C8C8', text: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                value={password}
                onChangeText={(text) => setPassword(text)}
                error={!!passwordError}
                secureTextEntry={hidePassword} // Toggle secure text entry based on hidePassword state
                style={styles.password}
              />
              {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
              <TouchableOpacity
                style={styles.eyeContainer}
                onPress={() => setHidePassword(!hidePassword)}
              >
                <Image
                  style={styles.eyeimage}
                  source={
                    hidePassword
                      ? require('../../assets/Icons/eye.png')
                      : require('../../assets/Icons/eye.png')
                  }
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.forgotText}>Forgot password?</Text>

            <TouchableOpacity style={styles.touch} 

onPress={() => {
  isTrue== true ? navigation.navigate("drawer") : navigation.navigate("Home")
}}
            
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#ffffff" style={styles.activityIndicator} />
              ) : (
                <Text style={styles.loginText}>Login</Text>
              )}
            </TouchableOpacity>
           
           
              <TouchableOpacity style={styles.touch2}>
                <Text style={styles.touchtext}>Continue Via Mobile Number</Text>
              </TouchableOpacity>
            
            <View style={styles.lastview}>
              <Text style={styles.not}>Not yet signed up? </Text>
              <TouchableOpacity>
                <Text style={styles.up}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image
          style={{width:responsiveWidth(2),height:responsiveHeight(100),marginTop:responsiveHeight(21.7)}}
          source={require("../../assets/Images/line.png")}
          />
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B1E',
    flexDirection:"row",
    justifyContent:"center"
  },
  innerContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: responsiveHeight(21),
    borderTopLeftRadius: responsiveWidth(8),
    borderTopRightRadius: responsiveWidth(8),
    width:"95%"
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
    width: responsiveWidth(60.4),
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
  emailContainer: {
    alignSelf: 'center',
  },
  email: {
    marginTop: responsiveHeight(4),
    width: responsiveWidth(85),
    height: responsiveHeight(6.8),
    fontSize: responsiveFontSize(2),
    fontFamily: 'Regular',
  },
  passwordContainer: {
    alignSelf: 'center',
  },
  password: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(85),
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
    width: responsiveWidth(85),
    backgroundColor: '#27AE60',
    borderRadius: responsiveWidth(5),
    marginTop: responsiveHeight(2.9),
    alignSelf: 'center',
    elevation: 4,
    justifyContent: 'center',
    
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.1),
    fontFamily: 'Poppins-Medium',
    // width:"100%"
  },
  touch2: {
    height: responsiveHeight(7.2),
    width: responsiveWidth(85),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(5),
    marginTop: responsiveHeight(2.5),
    alignSelf: 'center',
    borderWidth: responsiveHeight(0.2),
    borderColor: 'blue',
    elevation: 4,
   
  },
  touchtext: {
    color: '#6369F3',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1.5),
    fontSize: responsiveFontSize(2.3),
    fontFamily: 'Regular',
  },
  lastview: {
    flexDirection: 'row',
    alignSelf: 'center',
  marginTop:responsiveHeight(10)
  },
  not: {
    color: '#757680',
    fontSize: responsiveFontSize(2),
  },
  up: {
    color: '#6369F3',
    fontSize: responsiveFontSize(2.1),
    textDecorationLine: 'underline',
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
  },
});