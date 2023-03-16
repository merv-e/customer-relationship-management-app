import React from 'react'
import { TouchableOpacity, Text, View} from 'react-native'

// import { StatusBar } from "react-native"

const Btn = ({handleSubmit }) => {
  
  const styles = () => {
      return {
        container: {
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 10,
        },
          button: {
              fontSize: 15,
              alignSelf: 'center',
              padding: 10,
              borderRadius: 10,
              borderWidth : 1,
              marginBottom : 10,
            },
  }};

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.button} 
      onPress={handleSubmit} 
      >
        <Text>Add Customer</Text>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Btn
