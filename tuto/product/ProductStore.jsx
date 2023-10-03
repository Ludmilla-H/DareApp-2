import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductData from './ProductData'
import CardProduct from './component/CardProduct'
import firestore from '@react-native-firebase/firestore'
import { Button } from 'react-native-paper'
import { stylesProducts } from './stylesProduct'
import { asc, desc, init } from '../redux/product'


const ProductStore = () => {

    //lire dans le store = useSelector
    const products = useSelector(state => state.product)

    const dispatch = useDispatch();


    //classement ascendant
    const ascProduct = () => {
        console.log("ascProduct")
        dispatch(asc())

    }
    //classement descendant

    const descProduct = () => {
        console.log("desc")
        dispatch(desc())

    }

    //remmtre a zéro
    const initProduct = () => {
        console.log("init")
        dispatch(init())

    }

    useEffect(() => {

        console.log("product upload")


    }, [])

    return (
        <View>
            <Text>ProductStore</Text>
            <View style={stylesProducts.contentButtonFilter}>
                <Button onPress={ascProduct} >Asc</Button>
                <Button onPress={descProduct}>Desc</Button>
                <Button onPress={initProduct}>Init</Button>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => <CardProduct product={item} />}
                keyExtractor={item => item.id}
                numColumns={"2"}

            />
        </View>
    )
}

export default ProductStore