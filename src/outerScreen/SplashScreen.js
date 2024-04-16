import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React, { useEffect } from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('home'); // Navigate to the 'Home' screen after 2 seconds
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigation]); // Dependency array to ensure useEffect runs only once

  return (
    <View style={styles.container}>
     
      {/* {/ first image /} */}
      <TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/Images/trucklogo.png')}
            resizeMode='contain'
          />
        </View>
      </TouchableOpacity>
      {/* {/ container for both images /} */}
      <View style={styles.imageContainer}>
        {/* {/ Vector image /} */}
        <Image
          style={styles.vectorImage}
          source={require('../../assets/Images/Vector1.png')}
          resizeMode="contain"
        />
        {/* {/ Delivery image /} */}
        <Image
          style={styles.deliveryImage}
          source={require('../../assets/Images/delivery.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B1E',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: responsiveHeight(4),
  },
  logo: {
    height: responsiveHeight(30),
    width: responsiveWidth(60),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: responsiveHeight(23),
  },
  vectorImage: {
     height: responsiveHeight(60),
     width: responsiveWidth(100),
    bottom:responsiveHeight(3.2)
  
  },
  deliveryImage: {
     height: responsiveHeight(43),
     width: responsiveWidth(80),
    bottom:responsiveHeight(65.1)

  },
});