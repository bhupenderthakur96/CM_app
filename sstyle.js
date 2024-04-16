import {StyleSheet} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
const sstyles = StyleSheet.create({
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#27AE60',
        justifyContent: 'center',
        // marginHorizontal: responsiveWidth(4.2)
        height: responsiveHeight(7),
        width: responsiveWidth(90),
        padding: responsiveHeight(2),
        // marginTop: responsiveHeight(5),
        borderRadius: responsiveWidth(4),
        fontFamily: "Poppins-Medium",
        fontSize: responsiveFontSize(2),
        elevation: 4,
        alignSelf:"center",
    
    },

   
});

export default sstyles;