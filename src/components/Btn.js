import React from 'react'
import { TouchableOpacity, Text, View} from 'react-native'

// import { StatusBar } from "react-native"

const Btn = ({handleSubmit, text }) => {
  
  const onSubmit = () => {
    handleSubmit() 
    n.navigate("List Regions")
  };

  const styles = () => {
      return {
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems : "stretch",
          paddingHorizontal: 10,
        },
          button: {
              fontSize: 15, //doesnt work
              alignSelf: 'center',
              backgroundColor: "rgba(78, 116, 289, 1)",
              padding: 10,
              borderRadius: 5,
              marginBottom : 10,
              width: 200,
              textAlign: "center",
            },
  }};

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={onSubmit} 
      >
        <Text style={styles.button}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Btn

{/*  <TouchableOpacity 
          onPress="will be different for component">
          <Text style={styles.button} >Add a New Customer</Text>
        </TouchableOpacity> */}