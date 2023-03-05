import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useUpdateFields, useEditAnimal, useEditAnimalStatus } from '../hooks'
import { PENDING, REQUESTING, SUCCESS, ERROR } from '../status'
import formStyles from './styles'

const Form = () => {
  const styles = formStyles()

  const { params } = useRoute()

  const { fields, setFormField } = useUpdateFields(params.customerID)

  const { onSubmit } = useEditCustomer(params.customerID)

  const status = useEditCustomerStatus()

  const {
    firstName, 
    lastName,
    isActive,
    region
  } = fields



  return (
    <View style={styles.container}>
    <View style={styles.form}></View>

    <TextInput
      key={'common_name'}
      placeholder='Common Name'
      value={common_name || ''}
      style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
      onChangeText={v => setFormField('common_name', v)}
    />
    </View>
  )
}

export default Form
