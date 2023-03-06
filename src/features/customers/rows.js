import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Row = ({ item }) => {
    const { navigate } = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigate('Edit', { customerID: item.id })}>
            <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
                <Text key={'id'}>ID: {item.id}</Text>
                <Text key={'firstName'}>First Name: {item.first_name}</Text>
                <Text key={'lastName'}>Last Name: {item.last_name}</Text>
                <Text key={'isActive'}>Active?: {JSON.stringify(item.active)}</Text>
                <Text key={'region'}>Region: {item.region}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Row