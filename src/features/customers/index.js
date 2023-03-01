import React from 'react'
import { Text, View, FlatList , Button} from 'react-native'
import Row from '../regions/rows';

const Customers = (props) => { /* {customers, region} */
  
  const customers = [{
  }]; // temporary

  return (
    <View> 
        <Text>The list of customers by region </Text>  {/*  region name will be changed as {region}conditionally.  */}
        {(customers && customers.length > 0) ? (
                <FlatList
                    data={customers || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text>{'No Customers'}</Text>
                    <Button title={'Add Customer'} onPress={() => {
                        navigate('Add Customer')
                    }} />
                </>
            )}
    </View> 
  )
} 

export default Customers
