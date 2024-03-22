import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import {TextInput} from 'react-native-paper';
  export default function PickDropScreen({navigation}) {
    return (
      <ScrollView>
        <View style={{flex: 1,backgroundColor:"black"}}>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={require('../Assets/Images/Mask.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.logoText}>Home</Text>
        </View>
          <View
            style={styles.containerimageview}>
            <View style={{}}>
              <Image
                style={styles.imageview}
                source={require('../Assets/Images/Map.png')}
              />
              <View style={styles.contentContainer1}>
                <Image
                  style={styles.image}
                  source={require('../Assets/Images/robot.png')}
                  resizeMode="contain"
                />
                <View>
                  <Text style={styles.text}>What sort of size is your item?</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text1}>or just</Text>
                    <TouchableOpacity>
                      <Text style={styles.text2}> ASK ClickMOVERS AI </Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.text3}>to assist you.</Text>
                  <Image
                    style={styles.speakerimage}
                    source={require('../Assets/Images/speaking.png')}
                    resizeMode="contain"
                  />
                  
                </View>
              </View>
              <View
                style={styles.textinputmainview}>
                <TextInput
                  label="Pickup"
                  mode="outlined"
                  outlineStyle={{borderWidth: 1}}
                  placeholder="Enterpick up Location"
                  theme={{
                    roundness: 12,
  
                    colors: {primary: '#C8C8C8', underlineColor: '#C8C8C8'},
                  }}
                  style={styles.textinputstyle}
                />
                <TextInput
                  label="Drop"
                  mode="outlined"
                  outlineStyle={{borderWidth: 1}}
                  placeholder="Enter Drop Location"
                  theme={{
                    roundness: 12,
  
                    colors: {primary: '#C8C8C8', underlineColor: '#C8C8C8'},
                  }}
                  style={styles.textinputstyle}
                />
                <View
                  style={{marginTop: responsiveHeight(7), alignSelf: 'center'}}>
                  <TouchableOpacity
                    style={styles.button}
                    title="Go to Details"
                    onPress={() => navigation.navigate('DeliveryType')}>
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
      backgroundColor: '#E8E8E8',
      height: responsiveHeight(19),
      width: responsiveWidth(93),
      marginTop: responsiveHeight(2),
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
    containerimageview:{
      height: responsiveHeight(100),
      backgroundColor: '#fff',
      
      borderRadius: responsiveWidth(4),
    },
    imageview:{
      height: responsiveHeight(60),
      width: responsiveWidth(100),
      borderTopLeftRadius: responsiveWidth(4),
      borderTopRightRadius: responsiveWidth(4),
    },
    textinputmainview:{
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
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: responsiveFontSize(2.4),
      marginTop: responsiveHeight(2),
    },
  });