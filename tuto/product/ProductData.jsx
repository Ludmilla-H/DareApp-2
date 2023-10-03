import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {dataProducts} from '../data'
import CardProduct from './component/CardProduct'
import { stylesProducts } from './stylesProduct'

const ProductData = () => {
    console.log('products' , dataProducts)
  return (
    <View  style= {stylesProducts.container}>
        <FlatList
        data={dataProducts}
        renderItem={({item}) => <CardProduct product={item}/>}
        keyExtractor={item => item.id}
        numColumns={2}
        
        />
    </View>
  )
}

export default ProductData