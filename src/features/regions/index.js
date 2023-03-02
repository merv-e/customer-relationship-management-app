import React, { useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';

import regionStyles from './styles' 
import * as actions from "../customer/reducer"; 

import Row from "./rows"
import Customers from '../customers'

const Regions = () => {
  const styles = StyleSheet.create(regionStyles());
  const navigate= useNavigation();

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
    <View style={styles.container} >
        <Text style={styles.header}>List of the Regions</Text>
        {/* Can Pressable be used here ??? */}
        <FlatList
            data={regions}
            renderItem={ ({item}) => 
              <TouchableOpacity
                style={styles.item}
                key={item.title}
                onPress={() => navigate.navigate("Customers")}
              >
                <View>
                  <Text>{item.title}</Text>
                </View>
              
              </TouchableOpacity>
              }
            keyExtractor={item => item.id}
        />

        <TouchableOpacity 
          onPress={() => {
            navigate.navigate('Add Customer')
          }}
        >
          <Text style={styles.button} >Add a New Customer</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Regions
