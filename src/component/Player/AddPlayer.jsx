import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../../redux/player';

const AddPlayer = () => {

    const [name, setName] = useState() ;
    const dispatch = useDispatch() ;

    //enregistrement du joueur dans le store
    const send = (value) => {
        console.log('value' , value)

        //formattage de la donnée a aj dans le store
        const newPlayer = {
            id: Date.now(),
            name : value,
        }
        //envoie dela données dasn le store
        dispatch(addPlayer(newPlayer))



        //vide mon text input
        setName('')


    }


    return (
        <>
            <TextInput
                label="Nom du joueur"
                value={name}
                onChangeText={text => setName(text)}
                onSubmitEditing={(value) => send(value.nativeEvent.text)}
        
        />


        </>

    )
}

export default AddPlayer