import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, FlatList, Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import regionStyles from './styles' 
import * as actions from "../../features/customer/reducer"; 

const ListRegions = () => {

    const styles = StyleSheet.create(regionStyles());
    const {navigate}= useNavigation();
    const dispatch = useDispatch();
    
    const regions = [
      {
        id : "Europe",
        title: "Europe",
      },
      {
        id : "Americas" ,
        title: "Americas",
      },
      {
        id : "Middle East",
        title: "Middle East",
      },
      {
        id : "Asia Pasific",
        title: "Asia Pasific",
      },
    ];
    
    
    useEffect(() => {
      dispatch(actions.getCustomers());
    }, []);

    return (

    <SafeAreaView>
      <ScrollView>
       <View style={styles.container} >
        <Text style={styles.header}>List of the Regions</Text>
       
        {/* Maybe use Pressable */}
        
        {/* MAP REGIONS */}

        {
          regions.map(region => 
          <Button
            title={region.title} 
            key={region.id}
            onPress={() => 
              navigate("Customers", 
              { region: region.title}
            )
            }
           />
           )
        }

        {/* ADD CUSTOMER BUTTON */}
        <TouchableOpacity 
          onPress={() => {
            navigate('Add Customer')
          }}
        >
          <Text style={styles.button} >Add a New Customer</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default ListRegions

