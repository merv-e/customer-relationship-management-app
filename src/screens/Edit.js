import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const Edit = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View> 
                    <Text>Edit information of the customer</Text>
                    <TouchableOpacity 
                        // onPress={() => nav.navigate("Regions")}
                    >
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
      )
}

export default Edit
