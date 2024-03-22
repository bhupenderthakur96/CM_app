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
  export default function JobScreen() {
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'black'}}>
          {/* <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../Assets/Images/Mask.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.logoText}>Job</Text>
          </View> */}
          <View style={styles.containerimageview}>
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
              <View style={styles.textinputmainview}>
                <View style={styles.mechview}>
                  <Text style={styles.mechtext1}> Washing Machine</Text>
                  <Text style={styles.mechttext2}>$870</Text>
                </View>
  
                <Text style={styles.mechtext3}>March 26,2024 1:24pm</Text>
                <View>
                  <Image
                    style={styles.Locationimage}
                    source={require('../Assets/Images/Location.png')}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.idview}>
                  <Text style={styles.idtext}>40KM 1.10-1.5CM</Text>
                  <Text>ID:964</Text>
                </View>
                <View style={styles.ownerview}>
                <Image
                style={styles.ownerimage}
                source={require('../Assets/Images/owner.png')}/>
                <View style={{flexDirection:"column"}}>
                  <Text style={styles.ownwertext}>  Robert C.Stone</Text>
                  <Text>  Owner</Text>
                  </View>
                <Image
                style={styles.ownerimage}
                source={require('../Assets/Images/owner.png')}/>
                </View>
                <View
                  style={{marginTop:responsiveHeight(3),alignItems:"center"}}>
                  <TouchableOpacity
                    style={styles.button}
                    title="Go to Details"
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Start Job</Text>
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
    containerimageview: {
      height: responsiveHeight(100),
      backgroundColor: '#fff',
  
      borderRadius: responsiveWidth(4),
    },
    imageview: {
      height: responsiveHeight(60),
      width: responsiveWidth(100),
      borderTopLeftRadius: responsiveWidth(4),
      borderTopRightRadius: responsiveWidth(4),
    },
    textinputmainview: {
      height: responsiveHeight(20),
      width: responsiveWidth(93),
      backgroundColor: '#fff',
      position: 'relative',
      left: responsiveHeight(2),
      bottom: responsiveHeight(9),
      borderRadius: responsiveWidth(5),
    },
    mechview: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: responsiveHeight(1.5),
    },
    mechtext1: {
      fontSize: responsiveFontSize(2.9),
      color: 'black',
      marginLeft: responsiveHeight(1),
    },
    mechttext2: {
      fontSize: responsiveFontSize(2.9),
      color: '#6369F3',
      marginRight: responsiveFontSize(2.2),
    },
    mechtext3: {
      marginLeft: responsiveHeight(2.7),
    },
    Locationimage: {
      height: responsiveHeight(12),
      width: responsiveWidth(50),
      marginHorizontal: responsiveHeight(2.3),
    },
    idview: {
      flexDirection: 'row',
      height: responsiveHeight(3.7),
      borderBottomWidth: responsiveHeight(0.1),
      borderBottomColor: '#F0F0F3',
      justifyContent: 'space-between',
    },
    idtext: {
      marginLeft: responsiveHeight(3),
    },
    ownerview:{

      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:responsiveHeight(2)
    },
    ownerimage:{

      height:responsiveHeight(6),
      width:responsiveWidth(12),
      borderRadius:responsiveWidth(2)
    },
    ownwertext:{

      marginRight:responsiveHeight(21),
      fontSize:responsiveFontSize(2)
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