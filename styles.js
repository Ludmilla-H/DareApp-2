import { StyleSheet , StatusBar} from "react-native"; 
import {heightPercentToDp as hp , widthPercentToDp as wp} from "./src/utils/sizeUtils";

export default  StyleSheet.create({
    container: {
      flex: 1,
      margin:  10,
      marginTop: StatusBar.currentHeight || 0,
    },
    homeContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    homeTopPart: {
      flex: 2,
      alignItems: 'center',
      justifyContent: "flex-end",
      paddingVertical: hp(10),

    },
    homeBottonPart:{
      flex: 1,
    },

    homeQuestionTextStyle: {
      color: "#000",
      fontSize: wp(14),
      letterSpacing: wp(4),
      fontFamily: 'Montserrat-Light',
    },
    homeButtonStyle: {
      height: hp(7),
      backgroundColor: "#000",
      width: wp(60),
      alignItems:'center',
      justifyContent:'center',
      borderRadius: wp(3),
      shadowColor: '#f0f0f',
      shadowOffset:{width: 0, height: 4},
      shadowOpacity: 0.5,
    },
    homeButtonTextStyoe:{
      letterSpacing:wp(0.4),

    },

    modal: {
      backgroundColor: 'white', 
      padding: 20,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 16,
      borderRadius:50,
    },
    title: {
      fontSize: 22,
    },

    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
    },
    slideImage: {
      width: 320,
      height: 320,
      marginVertical: 32,
    },
    slideText: {
      color: 'black',
      textAlign: 'center',
    },
    slideTitle: {
      fontSize: 35,
      color: 'black',
      textAlign: 'center',
    },
  });