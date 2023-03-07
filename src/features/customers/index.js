import { Text, View, FlatList , Button, TouchableOpacity} from 'react-native' 
import Row from './rows';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from "react";
import { useListCustomers } from '../customer/hooks';

const Customers = () => {  

    const {navigate} = useNavigation();
    const customers = useListCustomers();

    const { params} = useRoute();
    const region = params.region; 

    // console.log(customers);
    // console.log(region);  
 

    const filterByRegion = customers.filter( c => c.region === region)

    // filterByRegion && filterByRegion.length > 0
    console.log(filterByRegion);

    // console.log(filterByRegion); customers && customers.length > 0
    // {region}

  return (
    <View> 
        <Text>The list of customers by {region} </Text>  
        {(
            customers && customers.length > 0
        ) ? ( 
                <FlatList
                    data={customers || []}
                    renderItem={({item}) => 
                    <Row 
                     item={item}
                     keyExtractor={(i) => i.id}
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
            <TouchableOpacity 
          onPress={() => {
            navigate('Add Customer')
          }}
        >
          <Text >Add a New Customer</Text>
        </TouchableOpacity>
    </View> 
  )
} 

export default Customers

{/* <Button 
title={'Add Customer'} 
onPress={() => {
   navigate('Add Customer' ) 
}} 
/>  */}