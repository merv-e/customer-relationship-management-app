import React from 'react'
import {  View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import newStyles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
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

      {/* Instead of using textInput below --use dropdown (above) but style it. */}

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

      <TouchableOpacity style={styles.button}>
          <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default New


      {/* <SelectDropdown
        style={styles.text}
      	data={isUserActive}
      	onSelect={(selectedItem, index) => {
          selectedItem => setFormField("isActive", selectedItem) 
      		// console.log(selectedItem, index)
      	}}
      	buttonTextAfterSelection={(selectedItem, index) => {
      		return selectedItem
      	}}
      	rowTextForSelection={(item, index) => {
      		return item
      	}}
      />
      <SelectDropdown
        style={styles.text}
      	data={regions}
      	onSelect={(selectedItem, index) => { //to be changed...
      		console.log(selectedItem, index)
      	}}
      	buttonTextAfterSelection={(selectedItem) => {
      		// text represented after item is selected
      		// if data array is an array of objects then return selectedItem.property to render after item is selected
      		return selectedItem
      	}}
      	rowTextForSelection={(item, index) => {
      		// text represented for each item in dropdown
      		// if data array is an array of objects then return item.property to represent item in dropdown
      		return item
      	}}
      /> */}