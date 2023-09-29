import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { resetPlayer } from '../../redux/player'

const ResetPlayer = () => {

    //écrire dans le store
    const dispatch = useDispatch() ;

    const reset = () => {
        
        dispatch(resetPlayer())
    }

    return (
        <View>
            <Button onPress={reset}> Tout supprimer </Button>

        </View>
    )
}

export default ResetPlayer