import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles'
import ItemPlayer from '../component/Player/ItemPlayer'
import EmptyPlayer from '../component/Player/EmptyPlayer'
import AddPlayer from '../component/Player/AddPlayer'
import ResetPlayer from '../component/Player/ResetPlayer'
import StartGame from '../component/buttonGame/StartGame'

const Players = () => {

  //lire dans le store = use selector
  const {players} = useSelector(state => state.player) ;
  console.log('players' ,players)

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={({item}) => <ItemPlayer player={item}/>}
        keyExtractor={item => item.id}
        //lorsque la liste est vide
        ListEmptyComponent={EmptyPlayer}
        ListHeaderComponent={AddPlayer}
      />
      <StartGame/>
      <ResetPlayer/>
    </View>
  )
}

export default Players