import { Text, View, FlatList , Button} from 'react-native' 
import Row from './rows';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from "react";
import { useListCustomers } from '../customer/hooks';

const Customers = () => {  

    const {navigate} = useNavigation();
    const customers = useListCustomers();

    const {params} = useRoute();
    // const region = params.region;

    console.log(customers);
    // console.log(region); 

    const filterByRegion = customers.filter(c=> c.region === region)
    // {region}
  return (
    <View> 
        <Text>The list of customers by region </Text>  
        {(filterByRegion && filterByRegion.length > 0) ? (
                <FlatList
                    data={customers || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                    onPress={()=> 
                     navigate('Edit Customer Info' 
                     ,
                     {customerID: item.id}
                    )}
                />
            ) : (
                <>
                    <Text>{'No Customers'}</Text>
                    <Button title={'Add Customer'} onPress={() => {
                        navigate('Add Customer' ) 
                    }} /> 
                </>
            )}
    </View> 
  )
} 

export default Customers