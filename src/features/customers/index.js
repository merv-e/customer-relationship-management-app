import { Text, View, FlatList , Button} from 'react-native' 
import Row from './rows';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from "react";
import { useListCustomers } from '../customer/hooks';

const Customers = () => {  

    const {navigate} = useNavigation();
    const customers = useListCustomers();

    // const { params} = useRoute();
    // const region = params.region; 
    // const region = route.params.region;
    console.log(customers);
    // console.log(region);  
    // console.log( params.region); 
 

    // const filterByRegion = customers.filter( c => c.region === region)

    // filterByRegion && filterByRegion.length > 0

    // console.log(filterByRegion); customers && customers.length > 0
    // {region}

  return (
    <View> 
        <Text>The list of customers by region </Text>  
        {(
            customers && customers.length > 0
        ) ? (
                <FlatList
                    data={customers || []}
                    renderItem={({item}) => 
                    <Row 
                     item={item}
                     keyExtractor={(item) => item.id}
                     onPress={()=> 
                        navigate('Edit Customer', {customerID: item.id})}
                    />
                    }
                />
            ) : (
                <>
                  <Text>{'No Customers'}</Text>
                </>
            )}
                    <Button 
                     title={'Add Customer'} 
                     onPress={() => {
                        navigate('Add Customer' ) 
                    //  ,
                    //  {region : region}
                     }} 
                    /> 
    </View> 
  )
} 

export default Customers