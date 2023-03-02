import { Text, View, FlatList , Button} from 'react-native'
import Row from '../regions/rows';
import { useNavigation } from '@react-navigation/native';
import React from "react";


const Customers = (props) => { /* {customers, region} */
   
  const customers = [{}]; // temporary
  const n = useNavigation();

  return (
    <View> 
        <Text>The list of customers by region </Text>  
        {(customers && customers.length > 0) ? (
                <FlatList
                    data={customers || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                    onPress={()=> { n.navigate('Add Customer')}}
                />
            ) : (
                <>
                    <Text>{'No Customers'}</Text>
                    <Button title={'Add Customer'} onPress={() => {
                        n.navigate('Add Customer', {region})
                    }} />
                </>
            )}
    </View> 
  )
} 

export default Customers

// {/*  region name will be changed as {region}conditionally.  */}