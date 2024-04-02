import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'; // Import Platform
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const iosHeight = responsiveHeight(83); // Height for iOS
const androidHeight = responsiveHeight(83.5); // Height for Android

var Height = Platform.OS === 'ios' ? iosHeight : androidHeight;

export default function HomeScreen({ navigation }) {

 

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('../../Images/Mask.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.logoText}>Home</Text>
      </View> */}

      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/Images/Mask.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>Need Something Moved?</Text>
        <Text style={styles.subtitle}>
          Get the best delivery service volume here!
        </Text>
        <Text style={styles.subtitle}>
          Skilled professional drivers are waiting
        </Text>
        <TouchableOpacity
          style={styles.button}
          title="Go to Details"
          onPress={() => navigation.navigate('Item')}>
          <Text style={styles.buttonText}>Let's Get Moving</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B1E',
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
  contentContainer: {
    backgroundColor: '#fff',
    height: Height,
    borderRadius: responsiveWidth(5),
    alignItems: 'center',
  },
  image: {
    height: responsiveHeight(56),
    width: '100%',
    marginTop: responsiveHeight(2),
  },
  title: {
    color: '#0A0B1E',
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    fontWeight:"bold"
  },
  subtitle: {
    color: '#0A0B1E',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.3),
    marginTop: responsiveHeight(0.6),
    
  },
  button: {
    height: responsiveHeight(7.5),
    width: responsiveWidth(90),
    backgroundColor: '#27AE60',
    borderRadius: responsiveWidth(4),
    marginTop: responsiveHeight(3.5),
    justifyContent: 'center',
    elevation:4
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight:"bold"
  },
});
