import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NextPlayer from '../component/buttonGame/NextPlayer'
import { loadDataDareOrTruth } from '../commonjs/db'
import { getRandomInt } from '../commonjs/function'
import { updateTod } from '../redux/player'

const ShowTruthOrDare = ({ route }) => {


  const { id, type } = route.params;

  const dispatch = useDispatch();


  const [showtod, setShowtod] = useState()

  const { players, position } = useSelector(state => state.player);

  const loadDareOrTruth = async () => {

    console.log('loadDareOrTruth');

    const dataTruthOrDare = await loadDataDareOrTruth(id, type);
    // console.log('dataTruthOrDare' , dataTruthOrDare)
    const index = getRandomInt(0, dataTruthOrDare.length);
    // console.log('index' , index) 
    setShowtod(dataTruthOrDare[index]);

    //enregistrement du tod du player dans le store
    dispatch(updateTod(dataTruthOrDare[index].id));
  }

  useEffect(() => {

    loadDareOrTruth();

  }, [])

  return (
    <View>
      <Text>{players[position].name}</Text>
      <Text>{showtod?.title}</Text>
      <NextPlayer id={id} />
    </View>
  )
}

export default ShowTruthOrDare