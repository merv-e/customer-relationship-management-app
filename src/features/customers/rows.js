import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import customerStyles from './styles'

const Row = ({ item }) => {
    const styles = StyleSheet.create(customerStyles())

    const { navigate } = useNavigation() 

    return (
        <View 
         style={styles.customerContainer}
        >
         <TouchableOpacity 
          onPress={() => navigate('Edit Customer', 
          {customerID: item.id})}>
            <Text 
            style={styles.customerContainerText}>
            ID: {item.id}
            </Text>
            <Text
            style={styles.customerContainerText}>
            First Name: {item.firstName}
            </Text>
            <Text
            style={styles.customerContainerText}
            >
            Last Name: {item.lastName}
            </Text>
            <Text
            style={styles.customerContainerText}
            >
            User Activity: {item.isActive}
            </Text>
            <Text
            style={styles.customerContainerText}
            >
            Region: {item.region}
            </Text>
         </TouchableOpacity>
        </View>
    )
}

export default Row

