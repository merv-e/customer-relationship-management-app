import React from 'react'
import {  View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import newStyles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';

const New = () => {
 
  const generateID = () => {

  }; 

  const n = useNavigation();

  const [firstName, onChangeFN] = React.useState("");
  const [lastName, onChangeLN] = React.useState("");
  const [active, onChangeIsActive] = React.useState("");
  const [region, onChangeRegion] = React.useState("");

  const styles = StyleSheet.create(newStyles())
  const regions = [
    "Europe",
     "Americas",
     "Middle East",
     "Asia Pasific",
  ];
  const isUserActive = ["active", "inactive"];
  //  possible to make a screen for both creating a new customer as well as editing one? 

  return (
    <View style={styles.container}> 
      <Text style={styles.header}>Create a customer</Text>
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
      <SelectDropdown
        style={styles.text}
      	data={isUserActive}
      	onSelect={(selectedItem, index) => {
      		console.log(selectedItem, index)
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
      />

      {/* Instead of using textInput below --use dropdown (above) but style it. */}
      
      {/* <TextInput
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
      /> */}
      <TouchableOpacity style={styles.button}>
          <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default New
