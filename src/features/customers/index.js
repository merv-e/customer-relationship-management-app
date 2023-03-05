import { Text, View, FlatList , Button} from 'react-native'
import Row from '../regions/rows';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { useListCustomers, useNewCustomer } from '../customer/hooks';


const Customers = (props) => { /* {customers, region} */

    const n = useNavigation();
    
    const customers = useListCustomers();

  return (
    <View> 
        <Text>The list of customers by region </Text>  
        {(customers && customers.length > 0) ? (
                <FlatList
                    data={customers || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                    onPress={()=> { n.navigate('Edit Customer Info')}}
                />
            ) : (
                <>
                    <Text>{'No Customers'}</Text>
                    <Button title={'Add Customer'} onPress={() => {
                        n.navigate('Add Customer' ) //{region}
                    }} />
                </>
            )}
    </View> 
  )
} 

export default Customers

// {/*  region name will be changed as {region}conditionally.  */}