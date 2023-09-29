import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const TruthOrDare = ({navigation , route }) => {

  const { id } = route.params ;


  const action = () => {
    navigation.navigate('showtruthordare' ,  {id:id , type:'dare'})
  }

  const verite = () => {
    navigation.navigate('showtruthordare', {id:id , type:'truth'})
  }


  return (
    <View>
      <Button onPress={action} mode='contained'>Action</Button>
      <Button onPress={verite} mode='contained'>Vérité</Button>


    </View>
  )
}

export default TruthOrDare