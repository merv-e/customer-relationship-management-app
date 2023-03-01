import React from 'react'
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Row from "./rows"
import regionStyles from './styles' 
import Customers from '../customers'
import { useNavigation } from '@react-navigation/native'

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

  return (
    <View style={styles.container} >
        <Text style={styles.header}>List of the Regions</Text>
        <FlatList
            data={regions}
            renderItem={ ({item}) => 
            
            <TouchableOpacity
              style={styles.item}
              key={item.title}
              onPress={() => navigate.navigate("Customers")}
            >

              <View> {/* style={{color: 'white'}} */}
                <Text>{item.title}</Text>
              </View>
            
            </TouchableOpacity>
            }
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
