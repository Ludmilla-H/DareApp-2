import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { List } from 'react-native-paper';
import { View , Text} from 'react-native';
import styles from '../../styles';

const ItemCategory = ({ category }) => {

    const navigation = useNavigation() ;
    // return (
    //     <List.Item
    //         title={category.name}
    //         onPress={() => navigation.navigate('truthordare' , {id: category.id})}
    //     />
    // )
    return (
        <View style={[
            styles.slide , {backgroundColor: category.color != undefined ? category.color : "#FFF163", }
            ]}>
          <Text style={styles.slideTitle}>{category.name}</Text>
        {/* <Image source={{uri : category.image}} /> */}
          <Text style={styles.slideText}>{category.description}</Text>
          
        </View>

      );
};

export default ItemCategory;