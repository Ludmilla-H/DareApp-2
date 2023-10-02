import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { stylesProducts } from '../stylesProduct';

const CardProduct = ({product}) => {
  return (
    <Card style={stylesProducts.cardProduct} contentStyle={stylesProducts.cardContent} >
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Cover source={{ uri: product.thumbnail}} />

    <Card.Content >
      <Text style={stylesProducts.cardTitle} variant="titleLarge">{product.title}</Text>
      <Text style={stylesProducts.cardPrice} variant="bodyMedium">{product.price}€</Text>
    </Card.Content>
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>  )
}

export default CardProduct