import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import CardProduct from './component/CardProduct';

const ProductFirestore = () => {


    const [products, setProducts] = useState([]) ;


    const init = async () => {

        //initialisation des data
        const snapData = await firestore().collection('product').get() ;
        console.log("snapData",snapData )
        const dataProducts = snapData.docs.map(product => {

            const newData = { ...product.data() , id:product.id }
            return newData ;


        })

        setProducts(dataProducts);

    }

    useEffect(() => {

        console.log("component load")
        init();


    }, [])

    return (
        <View>
            <Text>ProductFirestore</Text>
            <FlatList
            data={products}
            renderItem={({item}) => <CardProduct products={item}/>}
            keyExtractor={item => item.id}
            numColumns={2}
            
            />
        </View>
    )
}

export default ProductFirestore