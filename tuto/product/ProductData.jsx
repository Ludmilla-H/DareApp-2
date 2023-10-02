import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {products} from '../data'
import CardProduct from './component/CardProduct'
import { stylesProducts } from './stylesProduct'

const ProductData = () => {
    console.log('products' , products)
  return (
    <View  style= {stylesProducts.container}>
        <FlatList
        data={products}
        renderItem={({item}) => <CardProduct product={item}/>}
        keyExtractor={item => item.id}
        numColumns={2}
        
        />
    </View>
  )
}

export default ProductData