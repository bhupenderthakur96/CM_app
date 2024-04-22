import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView, FlatList,
  SafeAreaView,
  Alert
} from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Dropdown } from 'react-native-element-dropdown';
import LogoScreen from '../outerScreen/LogoScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import sstyles from '../../sstyle';

const data = [
  { id: '1', label: '2cubic', value: '2cubic' },
  { id: '2', label: '3cubic', value: '3cubic' },

];

const data1 = [
  { id: '1', label: '20kg', value: '20', },
  { id: '2', label: '32kg', value: '32', },

];
export default function MyJobScreen({ navigation }) {

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [itemName, setItemName] = useState(null);
  const [id, setId] = useState(0);
  const [itemList, setItemList] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      itemName: 'mobile',
      value: '3inch',
      value1: '34'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53a',
      itemName: 'mobile2',
      value: '3inch',
      value1: '34'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3a',
      itemName: 'mobile3',
      value: '3inch',
      value1: '34'
    },
    {
      id: 'bd7acbe46c2-aed5-3a',
      itemName: 'mobile4',
      value: '3inch',
      value1: '34'
    },
  ]);


  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'gray' }]}>
          Size
        </Text>
      );
    }
    return null;
  };

  const [value1, setValue1] = useState(null);
  const [isFocus1, setIsFocus1] = useState(false);

  const renderLabel1 = () => {
    if (value1 || isFocus1) {
      return (
        <Text style={[styles.label1, isFocus1 && { color: 'gray' }]}>
          Weight
        </Text>
      );
    }
    return null;
  };
  const handleAddItem = () => {
    // console.log("ayush")
    // setId(id+1)
    if (itemName && value && value1) {
      setId(id + 1)
      const newItem = { id, itemName, value, value1 };
      setItemList([...itemList, newItem]);
      // Clear input fields after adding the item
      setItemName('');
      setValue(null);
      setValue1(null);
    }
  };

  const Item = ({ item }) => (
    <View key={item.id} style={styles.weigthview1}>
      <Text style={{ fontFamily: "Poppins-Regular", color: "#0A0B1E", flex: 3, }}>{item?.itemName}</Text>
      <Text style={{ fontFamily: "Poppins-Regular", color: "#0A0B1E", flex: 4 }}>{item?.value}</Text>
      <Text style={styles.wighttext2}>{item?.value1}</Text>
    </View>
  );
//   const next = () => {
//     // console.log(itemList[1].itemName,"itemList")
    
//     for (let i = 0; i < itemList.length; i++) {
//         console.log(itemList[i].itemName, "ayush");
//         if (itemList[i].itemName && itemList[i].value1 && itemList[i].value) {
//             navigation.navigate('PickDrop')
//         }else{
//           Alert.alert("","please enter the above details")
//         }
//     }
  
// }

  return (
    <ScrollView horizontal={false} >
      <ScrollView horizontal={true}>
        <View style={styles.container}>


          <View style={styles.contentContainer}>
<View style={{ marginRight: responsiveWidth(6)}}>
            <LogoScreen 
          
            />
</View>
            <View style={styles.weigthview}>
              <Text style={{ fontFamily: "Poppins-Regular", color: "#6C6D78", flex: 3 }}>Item</Text>
              <Text style={styles.wighttext1}>Volumetric Size(M3)</Text>
              <Text
                style={{
                  fontFamily: "Poppins-Regular", color: "#6C6D78", flex: 2.5, marginRight: responsiveWidth(6),
                }}>Weight(kg)</Text>
            </View>
            <View style={{ height: responsiveHeight(20) }}>
              <FlatList
                data={itemList}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
                nestedScrollEnabled
              // style={{height:responsiveHeight(15)}}

              />
            </View>


            <View style={styles.textinputview}>
              <View>
                <TextInput
                  label="Item Name"
                  mode="outlined"
                  outlineStyle={{
                    borderWidth: responsiveWidth(0.2),
                    borderColor: "#C8C8C8"
                  }}
                  theme={{
                    roundness: 13,

                    colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                  }}
                  style={styles.textinputstyle}
                  value={itemName}
                  onChangeText={setItemName}
                />
                <View style={styles.dropdownview}>
                  {renderLabel()}
                  <Dropdown
                    style={[styles.dropdown, isFocus && {
                      borderWidth: responsiveWidth(0.2),
                      borderColor: "#C8C8C8"
                    }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Size' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                  // renderLeftIcon={() => (
                  //   <AntDesign
                  //     style={styles.icon}
                  //     color={isFocus ? 'blue' : 'black'}
                  //     name="Safety"
                  //     size={20}
                  //   />
                  // )}
                  />
                  {renderLabel1()}
                  <Dropdown
                    style={[styles.dropdown1, isFocus1 && {
                      borderWidth: responsiveWidth(0.2),
                      borderColor: "#C8C8C8"
                    }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data1}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus1 ? 'Weight' : '...'}
                    searchPlaceholder="Search..."
                    value={value1}
                    onFocus={() => setIsFocus1(true)}
                    onBlur={() => setIsFocus1(false)}
                    onChange={item => {
                      setValue1(item.value);
                      setIsFocus1(false);
                    }}
                  />

                  <TouchableOpacity onPress={handleAddItem}>
                    <Image
                      style={styles.squareimage}
                      source={require('../../assets/Icons/plusB2.png')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  {/* <Image
                style={styles.plusimage}
                source={require('../../assets/Icons/plus.png')}
                resizeMode="contain"
              /> */}
                </View>
              </View>
            </View>

            <TextInput
              mode="outlined"
              multiline
              numberOfLines={6}
              placeholder="Type Short Item Description"
              placeholderTextColor={"#C8C8C8"}
              outlineStyle={{
                borderWidth: responsiveWidth(0.2),
                borderColor: "#C8C8C8"
              }}

              theme={{
                roundness: 13,

                colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
              }}
              style={styles.lasttextinput}
            />

            <View style={{ flexDirection: 'row', flex: 1, marginTop: responsiveHeight(3), marginRight: responsiveWidth(6) }}>
              <View style={{ flex: 5, alignItems: 'flex-start' }}>
                <Text style={styles.lasttext}>
                  Total Volumetric
                </Text>
                <Text style={[styles.lasttext, { color: "#6369F3" }]}>3-3.6 Cm</Text>
              </View>

              <View style={{ flex: 5, alignItems: 'flex-end' }}>
                <Text style={styles.lasttext1}>
                  Total Weight
                </Text>
                <Text style={[styles.lasttext1, { color: "#6369F3" }]}>40-80Kg</Text>
              </View>
            </View>
            <TouchableOpacity

              title="Go to Details"
              onPress={()=>{navigation.navigate('PickDrop')}}
              style={[sstyles.buttonText,{marginBottom: responsiveHeight(2),
                marginRight: responsiveWidth(6),}]}
              >

              <Text style={ { 
                
            
                  fontFamily: "Poppins-Medium",
                  fontSize: responsiveFontSize(2),
                  color: '#fff',
                  textAlign: 'center',
          

               } }>


                Next</Text>
            </TouchableOpacity>

          </View>
          {/* </ScrollView> */}
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B1E',
  },
  contentContainer1: {
    backgroundColor: '#E8E8E8',
    height: responsiveHeight(20),
    width: responsiveWidth(93),
    marginTop: responsiveHeight(2),
    borderRadius: responsiveWidth(5),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: responsiveHeight(22),
    width: responsiveWidth(42),
    marginLeft: responsiveHeight(2),
  },
  text: {
    color: 'black',
    fontSize: responsiveFontSize(1.7),
    fontFamily: "Poppins-Regular"
  },
  text1: {
    color: 'black',
    fontSize: responsiveFontSize(1.7),
    fontFamily: "Poppins-Regular"
  },
  text2: {
    color: '#6369F3',
    fontSize: responsiveFontSize(1.6),
    fontFamily: "Poppins-Regular",
  },
  text3: {
    color: 'black',
    fontSize: responsiveFontSize(1.7),
    fontFamily: "Poppins-Regular"
  },
  speakerimage: {
    height: responsiveHeight(8),
    width: responsiveWidth(38),
    marginLeft: responsiveHeight(6),
  },
  wighttext1: {
    marginRight: responsiveWidth(5),
    fontFamily: "Poppins-Regular",
    color: "#6C6D78",
    flex: 4.5,


  },
  wighttext2: {

    fontFamily: "Poppins-Regular",
    color: "#0A0B1E",
    flex: 2
  },
  wighttext3: {
    marginRight: responsiveHeight(4.4),
    fontFamily: "Poppins-Regular",
    color: "#0A0B1E"
  },
  wighttext4: {
    marginRight: responsiveHeight(4.5),
    fontFamily: "Poppins-Regular",
    color: "#0A0B1E"
  },
  textinputview: {
    backgroundColor: '#F6F6Fe',
    height: responsiveHeight(20),
    width: responsiveWidth(93),
    borderRadius: responsiveWidth(5),
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: responsiveWidth(6),
    marginTop: responsiveHeight(2.5)
  },
  textinputstyle: {
    width: responsiveWidth(83),
    height: responsiveHeight(5.7),
    alignSelf: 'center',
    backgroundColor: '#F6F6FE',
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(6
    
    ),
    fontFamily: "Poppins-Regular"

  },
  dropdownview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: "relative",
    bottom: responsiveHeight(1.5)

  },
  dropdown: {
    width: responsiveWidth(33),
    height: responsiveHeight(5.2),  //
    alignSelf: 'center',
    backgroundColor: '#F6F6FE',
    fontSize: responsiveFontSize(2),
    // bottom: responsiveHeight(1.5),
    borderWidth: responsiveWidth(0.3),//
    borderColor: 'gray',//
    borderRadius: responsiveHeight(1.7),//
    paddingHorizontal: 8,//
  },
  dropdown1: {
    width: responsiveWidth(33),
    height: responsiveHeight(5.2),  //
    alignSelf: 'center',
    backgroundColor: '#F6F6FE',
    fontSize: responsiveFontSize(2),
    // bottom: responsiveHeight(1.5),
    borderWidth: responsiveWidth(0.3),//
    borderColor: 'gray',//
    borderRadius: responsiveHeight(1.7),//
    paddingHorizontal: 8,//
    marginLeft: responsiveWidth(3.5)
  },
  squareimage: {
    height: responsiveHeight(10),
    width: responsiveWidth(14),
    marginTop: responsiveHeight(5),
    position: "relative",
    left: responsiveWidth(1.4),
    // marginLeft:responsiveWidth(3),
    bottom: responsiveHeight(1.5),

  },
  // plusimage: {
  //   position: 'absolute',
  //   left: responsiveHeight(41.7),
  //   top: responsiveHeight(3.8),
  //   height: responsiveHeight(3),
  //   width: responsiveWidth(8),
  // },
  lasttextinput: {
    width: responsiveWidth(92.5),
    height: responsiveHeight(10.5),
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(2),
    fontFamily: "Poppins-Regular",
    marginRight: responsiveWidth(6)
  },
  lasttext: {

    marginLeft: responsiveHeight(2.5),


    fontSize: responsiveFontSize(1.5),

    fontFamily: "Poppins-Regular",
  },
  lasttext1: {

    marginRight: responsiveHeight(2.5),
    fontSize: responsiveFontSize(1.5),
    fontFamily: "Poppins-Regular",
  },
  contentContainer: {
    backgroundColor: '#fff',
    height: responsiveHeight(100),
    borderRadius: responsiveWidth(5),
    alignItems: 'center',
  },
  weigthview: {
    flexDirection: 'row',
    fontFamily: "Poppins-Regular",
    // justifyContent: 'space-around',
    height: responsiveHeight(7),
    width: responsiveWidth(98),
    paddingTop: responsiveHeight(2.5),
    borderBottomWidth: responsiveHeight(0.1),
    borderBottomColor: '#F0F0F3',
    marginLeft: responsiveWidth(8)

  },
  weigthview1: {
    flexDirection: 'row',
    fontFamily: "Poppins-Regular",
    justifyContent: 'space-between',
    height: responsiveHeight(4),
    width: responsiveWidth(98),
    paddingTop: responsiveHeight(1),
    borderBottomWidth: responsiveHeight(0.1),
    borderBottomColor: '#F0F0F3',
    marginLeft: responsiveWidth(5)

  },
  weigthview2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(4),
    width: responsiveWidth(93),
    // paddingTop: responsiveHeight(1),
    marginTop: responsiveHeight(2)
  },

  button: {
    height: responsiveHeight(7.5),
    width: responsiveWidth(90),
    backgroundColor: '#27AE60',
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveWidth(4),
    elevation: 4,
    justifyContent: 'center',


  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontFamily: "Poppins-Medium",
  },

  // container: {
  //   backgroundColor: 'white',
  //   padding: 16,
  // },
  // dropdown: {
  //   height: 50,
  //   borderColor: 'gray',
  //   borderWidth: 0.5,
  //   borderRadius: 8,
  //   paddingHorizontal: 8,
  // },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#f8f8f8',
    left: responsiveWidth(2),
    top: responsiveHeight(3.5),
    zIndex: 999,
    paddingHorizontal: responsiveWidth(1.5),
    fontSize: 14,
  },
  label1: {
    position: 'absolute',
    backgroundColor: '#f8f8f8',
    left: responsiveWidth(38),
    top: responsiveHeight(3.5),
    zIndex: 99,
    paddingHorizontal: responsiveWidth(1.5),
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row"
    // justifyContent:"space-around"

  },
  title: {
    color: "black"
  },
});