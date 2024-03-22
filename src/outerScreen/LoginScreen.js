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
import {useNavigation} from '@react-navigation/native'


export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Indicator for loading state


  const [nameError, setNameError] = useState('');
 
  const [passError, setPassError] = useState('')
 
 


  function blurEmail(){
    // let rjx=/^[a-zA-z]+$/;
    let rjx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid = rjx.test(email)
    if(!isValid){
      setNameError("Please enter email in this form ex:'xyz@gmail.com'")
    }
    else{
      setNameError("")
    }
   }
   function pass(){
      let rjx=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    let isValid = rjx.test(password)
    if(!isValid){
      setPasswordError("enter Minimum eight characters, at least one\nuppercase  letter, one lowercase letter, one number\none character")
    }
    else{
      setPasswordError("")
    }
   }
  
   function emailValidator(){
    if(email == ""){
      setEmailError("email field can not be empty")
    }
    else{
      setEmailError("")
    }
   }
   
   function passValidator(){
      if(password==""){
          setPassError("password field can not be empty")
      }
      else{
          setPassError("")
      }
     }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../Assets/Images/Rectangle1.png')}
                resizeMode="contain"
              />
              <Image
                style={styles.image}
                source={require('../Assets/Images/Rectangle1.png')}
                resizeMode="contain"
              />
            </View>
            <View style={styles.logo}>
              <Image
                style={styles.truckimage}
                source={require('../Assets/Images/trucklogo.png')}
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
                outlineStyle={{ borderWidth: 0.3 }}
                theme={{
                  roundness: 15,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                // value={email}
                // onChangeText={(text) => setEmail(text)}

                onChangeText={(email) =>setEmail(email)}
                onBlur={()=>emailValidator()}
                onChange={()=>{
                  blurEmail(),
                  emailValidator()
                }}
                
                style={styles.email}
              />
               {/* <Text >{emailError}</Text>
              <Text >{nameError}</Text> */}
              {emailError ? <Text style={styles.error}>{emailError}</Text> :  <Text style={styles.error}>{nameError}</Text>}
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                label="Enter password"
                mode="outlined"
                outlineStyle={{ borderWidth: 0.3 }}
                theme={{
                  roundness: 15,
                  color: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                value={password}
                // onChangeText={(text) => setPassword(text)}
                secureTextEntry={hidePassword} // Toggle secure text entry based on hidePassword state
                style={styles.password}
                
                onChange={()=>{
                  pass(),
                  passValidator()
                }}
                onBlur={()=>passValidator()}
                onChangeText={(password) =>setPassword(password)}
              />
              {passError ? <Text style={styles.error}>{passError}</Text> : <Text style={styles.error}>{passwordError}</Text>}
              <TouchableOpacity
                style={styles.eyeContainer}
                onPress={() => setHidePassword(!hidePassword)}
              >
                <Image
                  style={styles.eyeimage}
                  source={
                    hidePassword
                      ? require('../Assets/Icons/eye.png')
                      : require('../Assets/Icons/eye.png')
                  }
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.forgotText}>Forgot password?</Text>

            <TouchableOpacity style={styles.touch}  onPress={() => navigation.navigate("drawer") }>
              {isLoading ? (
                <ActivityIndicator size="small" color="#ffffff" style={styles.activityIndicator} />
              ) : (
                <Text style={styles.loginText}>Login</Text>
              )}
            </TouchableOpacity>

            <View>
              <TouchableOpacity style={styles.touch2}>
                <Text style={styles.touchtext}>Continue Via Mobile Number</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lastview}>
              <Text style={styles.not}>Not yet signed up? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register") }>
                <Text style={styles.up}>Sign up</Text>
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
  emailContainer: {
    alignSelf: 'center',
  },
  email: {
    marginTop: responsiveHeight(4),
    width: responsiveWidth(90),
    height: responsiveHeight(6.8),
    fontSize: responsiveFontSize(2),
    fontFamily: 'Regular',
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
    top:responsiveHeight(3.5),
    right: responsiveHeight(4),
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
  },
  touch2: {
    height: responsiveHeight(7.2),
    width: responsiveWidth(90),
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
    marginVertical: responsiveHeight(10),
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