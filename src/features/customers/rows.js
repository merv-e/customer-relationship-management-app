import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

const Row = ({ item }) => {
    const { navigate } = useNavigation() 
    // const {params} = useRoute();
    // const region = route.params.region;

    // console.log(region);
    // const isActive = ["active", "passive"];

    return (
        <TouchableOpacity onPress={() => navigate('Edit Customer', {customerID: item.id})}>
            <View id={item.id}
            style={{ borderWidth: 1, padding: 10, margin: 10 }}>
                <Text>ID: {item.id}</Text>
                <Text>First Name: {item.firstName}</Text>
                <Text>Last Name: {item.lastName}</Text>
                <Text>User Activity: {item.isActive}</Text>
                <Text>Region: {item.region}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Row

