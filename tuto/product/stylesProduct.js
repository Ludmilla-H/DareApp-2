import {StyleSheet , Dimensions } from 'react-native';

const width = Dimensions.get("window").width

export const stylesProducts = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  cardContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: (width - (10*2)-(5*4))/2,
  },
  cardProduct: {
    marginVertical: 15,
    margin: 5,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
  },
  cardPrice: {
    fontSize: 14,
    color: 'orange',
  },
  contentButtonFilter:{
    backgroundColor: 'orange',
    flexDirection:"row",
    justifyContent:"space-around",
  },
});
