import React, {useState} from 'react'
import {  View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import newStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useUpdateFields } from '../customer/hooks';
// import SelectDropdown from 'react-native-select-dropdown';
import { SelectList } from 'react-native-dropdown-select-list';

const Form = ({handleSubmit, customerID, status }) => {

  const styles = StyleSheet.create(newStyles())
  const n = useNavigation();
  const {fields, setFormField} = useUpdateFields(customerID);

  const [selected, setSelected] = React.useState("");

  const regions = [
    "Europe",
     "Americas",
     "Middle East",
     "Asia Pasific",
  ];
  
  const isUserActive = ["active", "inactive"];
  
  const onSubmit = () => {
    handleSubmit() 
    n.navigate("List Regions")
  };

  const {
    firstName, 
    lastName,
    isActive,
    region
  } = fields

  // console.log(fields); 

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

        {/* <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={isUserActive} 
          save="value"
          onSelect={setFormField("isActive")(value) }
          
        />

        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={regions} 
          save="value" 
          onChangeText={setFormField("region")(selected)}
        /> */}


      <TouchableOpacity 
        style={styles.button} 
        onPress={onSubmit} 
        >
          <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Form

