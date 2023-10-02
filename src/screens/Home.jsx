import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles'
import { Button } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { heightPercentToDp as hp, widthPercentToDp as wp } from '../utils/sizeUtils'



// interface HomeProps {}, props: HomeProps

const Home = ({ navigation }) => {

  // const {} = props
  return (
    <LinearGradient
      colors={['#FFF163', '#FFBD59', '#FFF163']}
      style={styles.homeContainer}>
      <View style={styles.homeTopPart}>
        <Text style={styles.homeQuestionTextStyle}>!A</Text>
        <Text style={styles.homeQuestionTextStyle}>V?</Text>
      </View>
      <View style={styles.homeBottonPart}>
        <TouchableOpacity
          style={styles.homeButtonStyle}>
          <Text style={styles.homeButtonTextStyoe} onPress={() => navigation.navigate('players')} > Commencer la partie !</Text>

        </TouchableOpacity>

      </View>
    </LinearGradient>
  )
}


export default Home
