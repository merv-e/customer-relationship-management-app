import React from 'react'
import {  View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import newStyles from './styles';
// import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import { useUpdateFields } from '../customer/hooks';

const New = () => {

  const styles = StyleSheet.create(newStyles())

  const regions = [
    "Europe",
     "Americas",
     "Middle East",
     "Asia Pasific",
  ];

  const fakeSubmit = (form) => {
    console.log("Fake submit!", form.values);
  };
  
  const isUserActive = ["active", "inactive"];
  
  const n = useNavigation();

  const {fields, setFormField} = useUpdateFields();

  console.log(fields);
  // console.log(setFormField);

  //  possible to make a screen for both creating a new customer as well as editing one? 

  const {
    firstName, 
    lastName,
    isActive,
    region
  } = fields

  return (
    <View style={styles.container}> 
      <Text style={styles.header}>Create a customer</Text>
      <TextInput
        key={"firstName"}
        style={styles.text}
        onChangeText={setFormField("firstName") }
        placeholder="First Name"
        value={firstName || ""}
      />
      <TextInput
        key={"lastName"}
        style={styles.text}
        onChangeText={setFormField("lastName") }
        placeholder="Last Name"
        value={lastName || ""}
      />

      <TextInput
        key={"isActive"}
        style={styles.text}
        onChangeText={setFormField("isActive") }
        placeholder="Is user active?"
        value={isActive || ""}
      />
      <TextInput
        key={"userID"}
        style={styles.text}
        onChangeText={setFormField("region") }
        value={region || ""}
        placeholder="Region"
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={fakeSubmit}
        >
          <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default New

