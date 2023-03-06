import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import { useNavigation, useRoute } from '@react-navigation/native'

const Row = ({ item , onPress }) => {
    // const { navigate } = useNavigation() 
    // const {params} = useRoute();
    // const region = route.params.region;

    // console.log(region);
    // const isActive = ["active", "passive"];

    return (
        <TouchableOpacity onPress={onPress}>
            <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
                <Text key={'id'}>ID: {item.id}</Text>
                <Text key={'firstName'}>First Name: {item.firstName}</Text>
                <Text key={'lastName'}>Last Name: {item.lastName}</Text>
                <Text>User Activity: {item.isActive}</Text>
                <Text>Region: {item.region}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Row

