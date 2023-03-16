import React, {useState} from 'react'
import {  View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import newStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useUpdateFields } from '../../features/customer/hooks';
import Btn from '../Btn';
// import SelectDropdown from 'react-native-select-dropdown';
// import { SelectList } from 'react-native-dropdown-select-list';

const Form = ({handleSubmit, customerID, status, text, headerText }) => {

  const styles = StyleSheet.create(newStyles())
  const n = useNavigation();
  const {fields, setFormField} = useUpdateFields(customerID);
  
  const onSubmit = () => {
    handleSubmit() 
    n.navigate("List Regions")
  };
  
  // TODO: DELETE FUNCTIONALITY
  const onDelete = () => {
    handleDelete()
    n.navigate("List Regions")
  };

  const {
    firstName, 
    lastName,
    isActive,
    region
  } = fields

  // console.log(fields); 
  console.log(status);

  return (
    <View style={styles.container}> 
      <TextInput
        key={"firstName"}
        style={styles.text}
        onChangeText={(value) => setFormField("firstName", value) }
        placeholder="First Name"
        value={firstName || ""}
      />
      <TextInput
        key={"lastName"}
        style={styles.text}
        onChangeText={(value) => setFormField("lastName", value) }
        placeholder="Last Name"
        value={lastName || ""}
      />

      <TextInput
        key={"isActive"}
        style={styles.text}
        onChangeText={(value) => setFormField("isActive", value) }
        placeholder="Is user active?"
        value={isActive || ""}
      />
      <TextInput
        key={"userID"}
        style={styles.text}
        onChangeText={(value) => setFormField("region", value) }
        value={region || ""}
        placeholder="Region"
      />
    
    {/* Todo : add the Btn component instead. */}
      <TouchableOpacity 
        onPress={onSubmit}
        >
          <Text style={styles.button}>{text}</Text>
      </TouchableOpacity>

{/* ADD DELETE FUNCTIONALITY */}
      {/* { customerID && 
      <TouchableOpacity  
        style={styles.button} 
        onPress={onDelete} 
        >
          <Text>Delete Customer</Text>
      </TouchableOpacity>
      } */}
    </View>

    
  )
}

export default Form

// {/* <SelectList 
//           setSelected={(val) => setSelected(val)} 
//           data={isUserActive} 
//           save="value"
//           onSelect={setFormField("isActive")(value) }
          
//         />

//         <SelectList 
//           setSelected={(val) => setSelected(val)} 
//           data={regions} 
//           save="value" 
//           onChangeText={setFormField("region")(selected)}
//         /> */}