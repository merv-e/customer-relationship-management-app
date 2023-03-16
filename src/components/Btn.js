import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

// import { StatusBar } from "react-native"

const Btn = ({handleSubmit }) => {
  
  const styles = () => {
      return {
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
    <>
    <TouchableOpacity 
     style={styles.button} 
     onPress={handleSubmit} 
     >
      <Text>Add Customer</Text>
      {/* <Text>Submit</Text> */}
    </TouchableOpacity>
    </>
  )
}

export default Btn
