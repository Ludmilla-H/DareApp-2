import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { heightPercentToDp as hp, widthPercentToDp as wp } from '../utils/sizeUtils'
import stylesHome from '../../stylesHome'



// interface HomeProps {}, props: HomeProps

const Home = ({ navigation }) => {

  // const {} = props
  return (
    <LinearGradient
      colors={['#FFF163', '#FFBD59', '#FFF163']}
      style={stylesHome.homeContainer}>
      <View style={stylesHome.homeTopPart}>
        <Text style={stylesHome.homeQuestionTextStyle}>!A</Text>
        <Text style={stylesHome.homeQuestionTextStyle}>V?</Text>
      </View>
      <View style={stylesHome.homeBottonPart}>
        <TouchableOpacity
          style={stylesHome.homeButtonStyle}>
          <Button style={stylesHome.homeButtonTextStyoe} labelStyle={{color:'#FFBD59', fontFamily: 'ZenDots-Regular'}} onPress={() => navigation.navigate('players')} > Commencer la partie !</Button>

        </TouchableOpacity>

      </View>
    </LinearGradient>
  )
}


export default Home
