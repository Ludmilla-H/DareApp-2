import { StyleSheet} from "react-native"; 
import {heightPercentToDp as hp , widthPercentToDp as wp} from "./src/utils/sizeUtils";


export default  StyleSheet.create({

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
        fontFamily: 'ZenDots-regular',
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
  


})

