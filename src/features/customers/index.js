import { Text, View, FlatList , Button, TouchableOpacity, StyleSheet} from 'react-native' 
import Row from './rows';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from "react";
import { useListCustomers } from '../customer/hooks';
import customerStyles from './styles';

const Customers = () => {  
    const styles = StyleSheet.create(customerStyles())
    const {navigate} = useNavigation()
    const customers = useListCustomers()

    const { params} = useRoute()
    const region = params.region 

    console.log(filterByRegion);
    console.log(customers);

    const filterByRegion = customers.filter((c) => c.region === region)
    
    // const filterByRegion = () => {
    // if (customers === []) customers.filter((c) => c.region === region)
    //  else filterByRegion = []
      // else filterByRegion = [];
    // }

  return (
    <View style= {styles.container}> 
        <Text style={styles.header} >The list of customers in {region} </Text>  
        {
          (filterByRegion && filterByRegion.length > 0 ) 
        ? ( 
          <FlatList
              data={filterByRegion || []}
              renderItem={(props) => <Row {...props} />}
              keyExtractor={(item) => item.id}
          />
          ) : (
          <>
            <Text style= {styles.noCustomer}>No Customers in {region} region </Text>
            
          </>
            )}
            <TouchableOpacity 
              onPress={() => {
                navigate('Add Customer')}}
            >
              <Text style={styles.button} >Add a New Customer</Text>
            </TouchableOpacity>
    </View> 
  )
} 

export default Customers
