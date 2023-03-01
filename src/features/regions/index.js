import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import Row from "./rows"
import regionStyles from './styles' 

const index = () => {

  const styles = StyleSheet.create(regionStyles());

  const Item = ({title}) => (
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
          renderItem={ ({item}) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default index
