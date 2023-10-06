import { createSlice } from "@reduxjs/toolkit"

const initState = {
                players : 
                    [
                    {id:1, name:'Ludmilla', tod:[]},
                    {id:2, name:'Anne',tod:[]},
                    {id:3, name:'Yohan', tod:[]},
                    {id:4, name:'Hervé', tod:[]}
                ],
                position : 0,
        
}

export const player = createSlice ({
    name: 'player',
    initialState : initState,
    reducers : {
        //action creator
        addPlayer: (state , action ) => { // ajouter un joueur

            //ajoute un élément a la fin du tableau
            console.log('action.payload' , action.payload)
            state.players.push(action.payload)

            return state ;
        },

        delPlayer : (state , action ) => { // supprimer un joueur

            //recherche l'index de l'élément a supprimer
            const newPlayers = state.players.filter(item => item.id != action.payload.id)
            console.log(action.payload)
            console.log('newPlayers', newPlayers)

            //filtrer les joueurs et reformatter le state
            const newState = {
                players : newPlayers ,
                position : state.position,
        
            }

            return newState ;
        },

        resetPlayer : (state , action ) => { // remettre a zéro la partie

            console.log('supprimer')
            return initState ;
        },

        nextPlayer : (state , action ) => { // joueur suivant
            console.log(action.payload)
            const newState = {...state, position: action.payload}

            return newState ;
        },

        updateTod: (state , action) => {
            //console.log("prev state", state)
            console.log("actions.payload", action.payload);
            // console.log("first", state.players[state.position].tod);

            state.players[state.position].tod.push(action.payload) ;
            //console.log("next state", state);

        },
    }

})
                

export const {addPlayer , delPlayer, resetPlayer, nextPlayer, updateTod} = player.actions ;
export default player.reducer ;

