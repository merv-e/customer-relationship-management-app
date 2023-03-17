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

    // console.log(filterByRegion);
    console.log(customers); 

    // const filterByRegion = 
    // typeof customers === null
    // ? []
    // :
    //  customers.filter((c) => c.region === region)
    
    // const filterByRegion =
    // customers === null
    // ? customers === []
    // : customers.filter((c) => c.region === region);

    // if (customers === null) {
    //   customers = [];
    // }

    const temporaryCustomers = [{
      id: "245aasd",
      firstName: "Merve",
      lastName: "Ustun",
      isActive: "yes",
      region: "Europe" 
    }]; 

    // const deneme = (customers === null || customers.length ===0) ? temporaryCustomers : filterByRegion; 
    
    const filterByRegion =
    //  customers === null 
    //  ? filterByRegion === [] 
    //  : 
     customers?.filter((c) => c?.region === region);
    
  return (
    <View style= {styles.container}> 
        <Text style={styles.header} >The list of customers in {region} </Text>  
        {
          ( customers === null || customers === []) //filterByRegion && filterByRegion.length > 0 
        ? (  
            <Text style= {styles.noCustomer}>No Customers in {region} region </Text>
          ) : (
          <>
            <FlatList
              data={filterByRegion || []}
              renderItem={(props) => <Row {...props} />}
              keyExtractor={(item) => item.id}
          />
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
