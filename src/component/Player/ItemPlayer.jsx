import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { delPlayer } from '../../redux/player'
import stylesPlayers from '../../../stylesPlayers'

const ItemPlayer = ({player}) => {

  //
  const dispatch = useDispatch() ;

  const supprimer = () => {
    //console.log('player', player)
    dispatch(delPlayer(player))


  }

  return (
    <View style={stylesPlayers.containerPlayer}>
      <View style={stylesPlayers.contentplayer}>
      <Text style={stylesPlayers.namePlayer} >{player.name}</Text>
      <Button labelStyle={{color:"black", marginTop: 15}} onPress={supprimer}>X</Button>
      </View>
    </View>
  )
}

export default ItemPlayer