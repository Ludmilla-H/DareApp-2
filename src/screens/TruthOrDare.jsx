import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux';

const TruthOrDare = ({navigation , route }) => {

  const { id } = route.params ;

  const { players , position } = useSelector( state => state.player) ;



  const action = () => {
    navigation.navigate('showtruthordare' ,  {id:id , type:'dare'})
  }

  const verite = () => {
    navigation.navigate('showtruthordare', {id:id , type:'truth'})
  }


  return (
    <View>
      <Text>{players[position].name}</Text>
      <Button onPress={action} mode='contained'>Action</Button>
      <Button onPress={verite} mode='contained'>Vérité</Button>


    </View>
  )
}

export default TruthOrDare