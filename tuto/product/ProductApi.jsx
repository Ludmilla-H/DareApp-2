import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button } from 'react-native-paper';
import CardProduct from './component/CardProduct';

const ProductApi = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    // const [skip, setSkip] = useState(0);

    const init = async () => {

        console.log("init")
        const res = await fetch("https://dummyjson.com/products?limit=2&skip=10")

        const productsData = await res.json() ;
            console.log(productsData)
            setProducts(productsData.products) ;
            setLoading(false) ;

    }

    const more = async () => {
        console.log("more", more)

        setLoadingMore(true) ;
        const nextSkip = products.length + 1 ;
        const res = await fetch("https://dummyjson.com/products?limit=2&skip=" + nextSkip)

        const productsData = await res.json() ;

        const moreProducts = productsData.products ;

        const newProducts = [...products, ...moreProducts]

        setProducts(newProducts) ;

        console.log(newProducts)

        setLoadingMore(false) ;



    }

    useEffect(() => {
        init() ;
    }, [])
    






    return (
        <View>
            <Text>ProductApi</Text>
            { loading ? <ActivityIndicator size={20} animating={true} />
            :
            <FlatList
                data={products}
                renderItem={({ item }) => <CardProduct product={item} />}
                keyExtractor={item => item.id}
                numColumns={"2"}
                ListFooterComponent={loadingMore ? <ActivityIndicator size={20} animating={true}/> : 
                                                    <Button onPress={more}>More</Button>}

            />
        }
        </View>
    )
}

export default ProductApi