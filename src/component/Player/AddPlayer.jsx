import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../../redux/player';
import stylesPlayers from '../../../stylesPlayers';

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
                label="Nom du joueur ?"
                value={name}
                onChangeText={text => setName(text)}
                onSubmitEditing={(value) => send(value.nativeEvent.text)}
                mode="outlined"
                contentStyle={{ }}
                style={{
                    backgroundColor: "#fff", 
                    fontSize:25, 
                    fontFamily: "ZenDots-Regular",
                    fontWeight: "bold",
                    alignContent: 'center',
                    color:"#000",
                }}
        
        />
        </>

    )
}

export default AddPlayer