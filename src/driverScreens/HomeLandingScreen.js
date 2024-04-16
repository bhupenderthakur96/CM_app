import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import LogoScreen from '../outerScreen/LogoScreen';
export default function Home({ navigation }) {
  // useEffect(()=>{
  //   navigation.navigate("driverApply")
  // },[])
  const [termsChecked, setTermsChecked] = useState(false);

  const images = [0, 1, 2, 3];

  const RenderImageItem = ({ item,onPress }) => (
<TouchableOpacity onPress={onPress}>
    <View
      style={{
        height: responsiveHeight(19),
        width: responsiveWidth(68),
    
        // borderWidth: responsiveHeight(0.1),
        // borderColor: '#27AE60',
        borderTopLeftRadius:responsiveWidth(4),
        borderTopRightRadius:responsiveWidth(4),
        borderBottomLeftRadius:responsiveWidth(4),
        borderBottomRightRadius:responsiveWidth(3.9),
        // marginTop: responsiveHeight(2),
        justifyContent: "space-around",
        marginLeft: responsiveHeight(2),
       elevation:2,
        // shadowColor: "#EBEBCE",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        shadowOpacity: 0.25,
        // shadowRadius: 5.84,
        // // For Android
        // elevation: 5,
        // // For iOS
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

      }}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: responsiveHeight(.7),
          marginLeft: responsiveHeight(2),
        
        
        }}>
        <Text style={{fontFamily:"Poppins-Regular",fontSize:responsiveFontSize(1.8),color: "#C8C8C8" }}>Job ID: <Text style={{fontFamily:"Poppins-Bold",fontSize:responsiveFontSize(1.8),color: "#0A0B1E"}}>684</Text></Text>

        <BouncyCheckbox
          isChecked={termsChecked}
          onPress={() => setTermsChecked(!termsChecked)}
          fillColor="#27AE60"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: '#0A0B1E' }}
          textStyle={{ color: '#0A0B1E' }}
          size={22}
        />

      </View>
      <View>
        <Image
          style={{
            height: responsiveHeight(5.5),
            width: responsiveWidth(11),
            bottom: responsiveHeight(1.3)
          }}
          source={require('../../assets/Images/dummy.png')}
          resizeMode="contain"
        />
        <View
          style={{ position: 'absolute', marginLeft: responsiveWidth(8) }}>
      
          <Text style={{ bottom: responsiveHeight(1.9),fontFamily:"Poppins-Regular", fontSize:responsiveFontSize(1.45),color: "#0A0B1E",marginTop:responsiveHeight(0.4) }}>Westhiemer RD, Santa Ana</Text>
    
          <Text style={{ bottom: responsiveHeight(0.8),fontFamily:"Poppins-Regular", fontSize:responsiveFontSize(1.45),color: "#0A0B1E" }}>Preston Rd. Inglewood, Maine</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          bottom: responsiveHeight(1),
          marginHorizontal:responsiveWidth(4.4)
        }}>
        <Text style={{  fontSize: responsiveFontSize(1.8), color: "#6369F3",fontFamily:"Poppins-Bold", }}>$870</Text>
        <Text style={{  fontSize: responsiveFontSize(1.8), color: "#0A0B1E",fontFamily:"Poppins-Bold",marginRight:responsiveWidth(8) }}>40KM</Text>
        <Text style={{  fontSize: responsiveFontSize(1.2),fontFamily:"Poppins-Regular",marginTop:responsiveHeight(0.45),color: "#C8C8C8"  }}>March15,2023 1:24pm</Text>
      </View>


    </View>
    </TouchableOpacity>
  );
  const RenderImageItem1 = ({ item, onPress }) => (
<TouchableOpacity onPress={onPress}>
    <View
      style={{
        height: responsiveHeight(19),
        width: responsiveWidth(68),
    
        // borderWidth: responsiveHeight(0.1),
        // borderColor: '#27AE60',
        borderTopLeftRadius:responsiveWidth(4),
        borderTopRightRadius:responsiveWidth(4),
        borderBottomLeftRadius:responsiveWidth(4),
        borderBottomRightRadius:responsiveWidth(3.9),
        // marginTop: responsiveHeight(2),
        justifyContent: "space-around",
        marginLeft: responsiveHeight(2),
       elevation:2,
        // shadowColor: "#EBEBCE",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        shadowOpacity: 0.25,
        // shadowRadius: 5.84,
        // // For Android
        // elevation: 5,
        // // For iOS
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

      }}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: responsiveHeight(.7),
          marginLeft: responsiveHeight(2),
        
        
        }}>
        <Text style={{fontFamily:"Poppins-Regular",fontSize:responsiveFontSize(1.8),color: "#C8C8C8" }}>Job ID: <Text style={{fontFamily:"Poppins-Bold",fontSize:responsiveFontSize(1.8),color: "#0A0B1E"}}>684</Text></Text>

        <BouncyCheckbox
          isChecked={termsChecked}
          onPress={() => setTermsChecked(!termsChecked)}
          fillColor="#27AE60"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: '#0A0B1E' }}
          textStyle={{ color: '#0A0B1E' }}
          size={22}
        />

      </View>
      <View>
        <Image
          style={{
            height: responsiveHeight(5.5),
            width: responsiveWidth(11),
            bottom: responsiveHeight(1.3)
          }}
          source={require('../../assets/Images/dummy.png')}
          resizeMode="contain"
        />
        <View
          style={{ position: 'absolute', marginLeft: responsiveWidth(8) }}>
      
          <Text style={{ bottom: responsiveHeight(1.9),fontFamily:"Poppins-Regular", fontSize:responsiveFontSize(1.45),color: "#0A0B1E",marginTop:responsiveHeight(0.4) }}>Westhiemer RD, Santa Ana</Text>
    
          <Text style={{ bottom: responsiveHeight(0.8),fontFamily:"Poppins-Regular", fontSize:responsiveFontSize(1.45),color: "#0A0B1E" }}>Preston Rd. Inglewood, Maine</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          bottom: responsiveHeight(1),
          marginHorizontal:responsiveWidth(4.4)
        }}>
        <Text style={{  fontSize: responsiveFontSize(1.8), color: "#6369F3",fontFamily:"Poppins-Bold", }}>$870</Text>
        <Text style={{  fontSize: responsiveFontSize(1.8), color: "#0A0B1E",fontFamily:"Poppins-Bold",marginRight:responsiveWidth(8) }}>40KM</Text>
        <Text style={{  fontSize: responsiveFontSize(1.2),fontFamily:"Poppins-Regular",marginTop:responsiveHeight(0.45),color: "#C8C8C8"  }}>March15,2023 1:24pm</Text>
      </View>


    </View>
    </TouchableOpacity>
  );
  const GridSeparator = () => {
    return <View style={{
      backgroundColor: 'transparent',
      width: responsiveWidth(1)
    }} />;
  };
  return (
    <ScrollView>
      <View style={styles.container}>
      <Image
            source={require("../../assets/Images/line.png")}
            style={{width:responsiveWidth(2),height:"100%",position:"absolute",marginTop:responsiveHeight(2)}}
            />
        <View style={styles.contentContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/Images/locationMap.png')}
          // resizeMode="contain"
          />
          <View style={{
            height: responsiveHeight(19),
            width: responsiveWidth(93),
            borderRadius: responsiveWidth(5),
            position: 'absolute',
            left: responsiveHeight(1),
            flexDirection: 'row',
            top:responsiveHeight(-2.3)
       
          }}>
            <LogoScreen/>
          </View>
         
          <View
            style={{
              flexDirection: 'row',
              // flex: 10,
              // position: 'absolute',
              // top: responsiveHeight(30),
              bottom: responsiveHeight(13)


            }}>
            <Text
              style={{
                flex: 5,
                marginLeft: responsiveHeight(2),
                fontSize: responsiveFontSize(3),
                color: 'black',
                fontFamily:"Poppins-Medium",
                fontSize:responsiveFontSize(2)
              }}>
              Work List
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("todo")}}>
              <View
                style={{
                  backgroundColor: '#6369F3',
                  height: responsiveHeight(4),
                  width: responsiveHeight(10.5),
                  marginRight: responsiveHeight(2),
                  borderRadius: responsiveWidth(2),
                  elevation:4
                }}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: responsiveHeight(0.8),
                    fontFamily:"Poppins-Medium",
                    justifyContent: 'center',
                    fontSize: responsiveFontSize(1.5),
                  }}>
                  View All
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ 
            bottom: responsiveHeight(11),
            marginRight: responsiveHeight(3),
          
             }}>
            <FlatList
              data={images}
              keyExtractor={(item, index) => index.toString()}
              // renderItem={renderImageItem}
              renderItem={({ item }) => <RenderImageItem title={item} onPress={()=>navigation.navigate('start')} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{elevation:4}}
          
              ItemSeparatorComponent={GridSeparator}
            
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: "space-between",
              bottom: responsiveHeight(8.5)

            }}>
            <Text
              style={{
                marginLeft: responsiveHeight(2),
                fontSize: responsiveFontSize(2),
                color: '#0A0B1E',
                fontFamily:"Poppins-Medium",
                
              }}>
              Available Job
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#6369F3',
                  height: responsiveHeight(4),
                  width: responsiveHeight(10.5),
                  marginRight: responsiveHeight(2),
                  borderRadius: responsiveWidth(2),
                  elevation:4
                }}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: responsiveHeight(0.8),
                    fontFamily:"Poppins-Medium",
                    justifyContent: 'center',
                    fontSize: responsiveFontSize(1.5),
                  }}>
                  View all
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginRight: responsiveHeight(3),bottom: responsiveHeight(7)}}>
            <FlatList
              data={images}
              keyExtractor={(item, index) => index.toString()}
              // renderItem={()=>{renderImageItem1}}
              renderItem={({ item }) => <RenderImageItem1 title={item} onPress={()=>navigation.navigate('Accept')} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            
              ItemSeparatorComponent={GridSeparator}
            />
          </View>
        </View>
        <Image
            source={require("../../assets/Images/line.png")}
            style={{width:responsiveWidth(2),height:"100%",alignSelf:"flex-end",position:"absolute",marginTop:responsiveHeight(2)}}
            />
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B1E',
  },
  header: {
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
  contentContainer: {
    backgroundColor: '#FFFFFF',
    height: responsiveHeight(100),
    // borderRadius: responsiveWidth(8),
    // borderTopLeftRadius: responsiveWidth(8),

    // borderTopRightRadius: responsiveHeight(8),
    marginHorizontal:responsiveWidth(2),
    // marginTop: responsiveHeight(1),
    borderRadius:responsiveWidth(4.5)
  },
  image: {
    height: responsiveHeight(56),
    width: responsiveWidth(96.3),
    //  marginTop: responsiveHeight(.7),
    // borderTopLeftRadius: responsiveWidth(8),
    // borderTopRightRadius: responsiveWidth(8),
    // marginHorizontal:responsiveWidth(2),
    alignSelf:"center",
    borderRadius:responsiveWidth(4)
  },

});