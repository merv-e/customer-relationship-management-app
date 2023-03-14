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

    const filterByRegion = customers.filter((c) => c.region === region);

  return (
    <View> 
        <Text>The list of customers in {region} </Text>  
        {
          (customers && customers.length > 0) 
        ? ( 
          <FlatList
              data={filterByRegion || []}
              renderItem={(props) => <Row {...props} />}
               keyExtractor={(item) => item.id}
          />
          ) : (
          <>
            <Text>No Customers in {region} region </Text>
            
          </>
            )}
            <TouchableOpacity 
              onPress={() => {
                navigate('Add Customer')}}
            >
              <Text >Add a New Customer</Text>
            </TouchableOpacity>
    </View> 
  )
} 

export default Customers
