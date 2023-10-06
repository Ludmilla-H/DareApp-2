import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import CardProduct from './component/CardProduct';
import { stylesProducts } from './stylesProduct';
import { Button } from 'react-native-paper';


const ProductFirestore = () => {


    const [products, setProducts] = useState([]);


    const init = async () => {

        //initialisation des data
        const snapData = await firestore().collection('product').get();
        console.log("snapData", snapData)
        const dataProducts = snapData.docs.map(product => {

            const newData = { ...product.data(), id: product.id }
            return newData;


        })

        setProducts(dataProducts);

    }

        const ascProduct = async () => {
            const snapData = await firestore()
                                                .collection('product')
                                                .orderBy("price" , "asc")
                                                .get();
            console.log("snapData", snapData)
            const dataProducts = snapData.docs.map(product => {
    
                const newData = { ...product.data(), id: product.id }
                return newData;
    
    
            })
    
            setProducts(dataProducts);
        }


        const descProduct = async () => {
            const snapData = await firestore()
                                                .collection('product')
                                                .orderBy("price" , "desc")
                                                .get();
            console.log("snapData", snapData)
            const dataProducts = snapData.docs.map(product => {
    
                const newData = { ...product.data(), id: product.id }
                return newData;
    
    
            })
    
            setProducts(dataProducts);
        }

    useEffect(() => {

        console.log("component load")
        init();


    }, [])

    return (
        <View>
            <View style={stylesProducts.contentButtonFilter}>
                <Button onPress={ascProduct} >Asc</Button>
                <Button onPress={descProduct}>Desc</Button>
                <Button onPress={init}>Init</Button>
            </View>

            <Text>ProductFirestore</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => <CardProduct product={item} />}
                keyExtractor={item => item.id}
                numColumns={2}

            />
        </View>
    )
}

export default ProductFirestore