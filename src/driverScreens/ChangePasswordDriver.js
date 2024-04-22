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

export default function ChangePasswordDriver({navigation}) {
  const [password, setPassword] = useState('');
  
  const [passwordError, setPasswordError] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
        <TouchableOpacity 
        onPress={()=>{navigation.goBack()}}
        style={{   position:"absolute",
                  right:responsiveWidth(93),
                  top:responsiveHeight(2)}}>
        <Image
                style={{
                  height: responsiveHeight(5),
                  width: responsiveWidth(6),
                  // position:"absolute",
                  // right:responsiveWidth(93),
                  // top:responsiveHeight(2)
                  // marginLeft: responsiveWidth(2.5),

                }}
                source={require('../../assets/Icons/back.png')}
                resizeMode="contain"

              />
</TouchableOpacity>
          <Image
            style={{
              width: responsiveWidth(2),
              height: responsiveHeight(100),
              marginTop: responsiveHeight(21.7),
            }}
            source={require('../../assets/Images/line.png')}
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

            <View style={{marginTop: responsiveHeight(10)}}>
              <Text style={styles.textContainer}>Reset password</Text>
            </View>

            <View style={styles.passwordContainer}>
              <TextInput
                label="Enter Current Password"
                mode="outlined"
                outlineStyle={{borderWidth: 0.2}}
                theme={{
                  roundness: 11,
                  colors: {primary: '#C8C8C8', underlineColor: '#C8C8C8'},
                  
                }}
             
                style={styles.password}
              />

              <TouchableOpacity
                style={styles.eyeContainer}
                onPress={() => setHidePassword(!hidePassword)}>
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
            <View style={styles.passwordContainer}>
              <TextInput
                label="Enter New Password"
                mode="outlined"
                outlineStyle={{borderWidth: 0.2}}
                theme={{
                  roundness: 11,
                  colors: {primary: '#C8C8C8', underlineColor: '#C8C8C8'},
                }}
             
                style={styles.password}
              />

              <TouchableOpacity
                style={styles.eyeContainer}
                onPress={() => setHidePassword(!hidePassword)}>
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
            <View style={styles.passwordContainer}>
              <TextInput
                label="Confirm New password"
                mode="outlined"
                outlineStyle={{borderWidth: 0.2}}
                theme={{
                  roundness: 11,
                  colors: {primary: '#C8C8C8', underlineColor: '#C8C8C8'},
                }}
             
                style={styles.password}
              />

              <TouchableOpacity
                style={styles.eyeContainer}
                onPress={() => setHidePassword(!hidePassword)}>
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

            <TouchableOpacity
              style={styles.touch}
             >
              <Text style={styles.loginText}>Save Password</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={{
              width: responsiveWidth(2),
              height: responsiveHeight(100),
              marginTop: responsiveHeight(21.7),
            }}
            source={require('../../assets/Images/line.png')}
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: responsiveHeight(21),
    borderTopLeftRadius: responsiveWidth(8),
    borderTopRightRadius: responsiveWidth(8),
    width: '95%',
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
    fontFamily: 'poppins-Medium',
  },
  emailContainer: {
    alignSelf: 'center',

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
    backgroundColor:"#FFFFFF"
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


});