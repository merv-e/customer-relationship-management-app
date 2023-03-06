import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, FlatList, Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import regionStyles from './styles' 
import * as actions from "../../features/customer/reducer"; 
import Customers from '../customers/ListCustomers'
// import Regions from "../../features/regions/index"

const ListRegions = () => {
    const styles = StyleSheet.create(regionStyles());
    const {navigate}= useNavigation();
    
    const Item = ({Customers}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
    
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
    
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(actions.getCustomers());
    }, []);

    return (

    <SafeAreaView>
      <ScrollView>
       <View style={styles.container} >
        <Text style={styles.header}>List of the Regions</Text>
       
        {/* Can Pressable be used here ??? */}
        
        {
          regions.map(region => 
          <Button
            title={region.title} 
            key={region.id}
            onPress={() => navigate("Customers", {region: region.title})}

           />
           )
        }
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

