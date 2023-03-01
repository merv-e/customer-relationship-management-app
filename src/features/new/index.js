import React from 'react'
import {  View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import newStyles from './styles';

const New = () => {
 
  const generateID = () => {

  }; 


  const [firstName, onChangeFN] = React.useState("");
  const [lastName, onChangeLN] = React.useState("");
  const [active, onChangeIsActive] = React.useState("");
  const [region, onChangeRegion] = React.useState("");

  const styles = StyleSheet.create(newStyles())
  
  //  possible to make a screen for both creating a new customer as well as editing one? 

  return (
    <View style={styles.container} > 
      <Text style={styles.header} >Create a customer</Text>
      <TextInput
        style={styles.text}
        onChangeText={onChangeFN}
        placeholder="First Name"
        value={firstName}
      />
      <TextInput
        style={styles.text}
        onChangeText={onChangeLN}
        placeholder="Last Name"
        value={lastName}
      />
      <TextInput
        style={styles.text}
        onChangeText={onChangeIsActive}
        placeholder="Active"
        value={active}
      />
      <TextInput
        style={styles.text}
        onChangeText={onChangeRegion}
        placeholder="Region"
        value={region}
      />
      <TouchableOpacity style={styles.button}>
          <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default New
