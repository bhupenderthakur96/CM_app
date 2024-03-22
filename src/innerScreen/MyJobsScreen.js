import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  
];

const data1 = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  
];
export default function Item({ navigation }) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
          Size
        </Text>
      );
    }
    return null;
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.contentContainer1}>
            <Image
              style={styles.image}
              source={require('../Assets/Images/robot.png')}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.text}>What sort of size is your item?</Text>
              <View style={{ flexDirection: 'row' }}>
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
          <View style={styles.weigthview}>
            <Text>Item</Text>
            <Text style={styles.wighttext1}>Volumatric Size(3)</Text>
            <Text>Weight(kg)</Text>
          </View>

          <View style={styles.weigthview1}>
            <Text>Dining table</Text>
            <Text>1.3-1.8</Text>
            <Text style={styles.wighttext2}>20-40</Text>
          </View>
          <View style={styles.weigthview2}>
            <Text>War Drobe Small</Text>
            <Text style={styles.wighttext3}>1.3-1.8</Text>
            <Text style={styles.wighttext4}>20-40</Text>
          </View>
          <View style={styles.textinputview}>
            <View>
              <TextInput
                label="Iteam Name"
                mode="outlined"
                outlineStyle={{ borderWidth: 1 }}
                theme={{
                  roundness: 13,

                  colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
                }}
                style={styles.textinputstyle}
              />
              <View style={styles.dropdownview}>
                {renderLabel()}
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
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
                  style={[styles.dropdown, isFocus1 && { borderColor: 'blue' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data1}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus1 ? 'Size' : '...'}
                  searchPlaceholder="Search..."
                  value={value1}
                  onFocus={() => setIsFocus1(true)}
                  onBlur={() => setIsFocus1(false)}
                  onChange={item => {
                    setValue1(item.value);
                    setIsFocus1(false);
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
                <TouchableOpacity>
                  <Image
                    style={styles.squareimage}
                    source={require('../Assets/Icons/plus1.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                {/* <Image
                style={styles.plusimage}
                source={require('../Assets/Icons/plus.png')}
                resizeMode="contain"
              /> */}
              </View>
            </View>
          </View>

          <TextInput
            mode="outlined"
            multiline
            numberOfLines={6}
            placeholder="Type Short Time Description"
            outlineStyle={{ borderWidth: 1 }}

            theme={{
              roundness: 13,

              colors: { primary: '#C8C8C8', underlineColor: '#C8C8C8' },
            }}
            style={styles.lasttextinput}
          />

          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 5, alignItems: 'flex-start' }}>
              <Text style={styles.lasttext}>
                Total Volumetric
              </Text>
              <Text style={styles.lasttext}>3-3.6 Cm</Text>
            </View>

            <View style={{ flex: 5, alignItems: 'flex-end' }}>
              <Text style={styles.lasttext1}>
                Total Weight
              </Text>
              <Text style={styles.lasttext1}>40-80Kg</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            title="Go to Details"
            onPress={() => navigation.navigate('PickDrop')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    fontFamily: 'Black',
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
    height: responsiveHeight(8),
    width: responsiveWidth(38),
    marginLeft: responsiveHeight(6),
  },
  wighttext1: {
    marginLeft: responsiveHeight(17),
  },
  wighttext2: {
    marginRight: responsiveHeight(4.5),
  },
  wighttext3: {
    marginRight: responsiveHeight(4.3),
  },
  wighttext4: {
    marginRight: responsiveHeight(4.5),
  },
  textinputview: {
    backgroundColor: '#E8E8E8',
    height: responsiveHeight(20),
    width: responsiveWidth(93),
    borderRadius: responsiveWidth(5),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textinputstyle: {
    width: responsiveWidth(85),
    height: responsiveHeight(5.7),
    alignSelf: 'center',
    backgroundColor: '#E8E8E8',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(3),
  },
  dropdownview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  dropdown: {
    width: responsiveWidth(33),
    height: responsiveHeight(6),  //
    alignSelf: 'center',
    backgroundColor: '#E8E8E8',
    fontSize: responsiveFontSize(2),
    // bottom: responsiveHeight(1.5),
    borderWidth: responsiveWidth(0.3),//
    borderColor: 'gray',//
    borderRadius: responsiveHeight(1.7),//
    paddingHorizontal: 8,//
  },
  squareimage: {
    height: responsiveHeight(10),
    width: responsiveWidth(14),
    marginTop: responsiveHeight(5),
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
    width: responsiveWidth(93),
    height: responsiveHeight(13),
    alignSelf: 'center',
    backgroundColor: '#E8E8E8',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
  },
  lasttext: {

    marginLeft: responsiveHeight(2.5)
  },
  lasttext1: {

    marginRight: responsiveHeight(2.5)
  },
  contentContainer: {
    backgroundColor: '#fff',
    height: responsiveHeight(88.7),
    borderRadius: responsiveWidth(5),
    alignItems: 'center',
  },
  weigthview: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    paddingTop: responsiveHeight(2.5),
    borderBottomWidth: responsiveHeight(0.1),
    borderBottomColor: '#F0F0F3',
  },
  weigthview1: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    height: responsiveHeight(4),
    width: responsiveWidth(93),
    paddingTop: responsiveHeight(1),
    borderBottomWidth: responsiveHeight(0.1),
    borderBottomColor: '#F0F0F3',
  },
  weigthview2: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    height: responsiveHeight(4),
    width: responsiveWidth(93),
    // paddingTop: responsiveHeight(1),
  },

  button: {
    height: responsiveHeight(7.5),
    width: responsiveWidth(93),
    backgroundColor: '#27AE60',
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveWidth(4),

    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
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
    backgroundColor: '#E8E8E8',
    left: responsiveWidth(2),
    top: responsiveHeight(3),
    zIndex: 999,
    paddingHorizontal: responsiveWidth(1.5),
    fontSize: 14,
  },
  label1: {
    position: 'absolute',
    backgroundColor: '#E8E8E8',
    left: responsiveWidth(38),
    top: responsiveHeight(3),
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
});