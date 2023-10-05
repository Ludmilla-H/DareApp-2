import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import stylesPlayers from '../../../stylesPlayers';

const StartGame = () => {

  const navigation = useNavigation() ;

  const { players } = useSelector(state => state.player) ;

  const start = () => {
    navigation.navigate('category')
  }
  

  return (
    <View>
      <Button 
      labelStyle={{
        color:"#000", 
        fontFamily: "zenDots-Regular", 
        fontSize: 20,
        fontWeight: "bold",
      
      }} 
        disabled={!(players.length >= 2)} onPress={start}>Suivant </Button>
    </View>
  )
}

export default StartGame