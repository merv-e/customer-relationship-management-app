import { Text, View, FlatList , Button} from 'react-native' 
import Row from './rows';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from "react";
import { useListCustomers } from '../customer/hooks';

const Customers = (props) => {  

    const {navigate} = useNavigation();
    const customers = useListCustomers();

    const {params} = useRoute();
    const region = params.region;

    console.log(customers);

  return (
    <View> 
        <Text>The list of customers by {region} </Text>  
        {(customers && customers.length > 0) ? (
                <FlatList
                    data={customers || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                    onPress={()=> { navigate('Edit Customer Info')}}
                />
            ) : (
                <>
                    <Text>{'No Customers'}</Text>
                    <Button title={'Add Customer'} onPress={() => {
                        navigate('Add Customer' ) //{region}
                    }} />
                </>
            )}
    </View> 
  )
} 

export default Customers