import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useEditAnimal, useEditAnimalStatus } from '../hooks'
import Form from '../Form'

const Edit = () => {
  const styles = formStyles()

  const { params } = useRoute()
  const {customerID} = params;
  const {status, onSubmit } = useEditCustomer(customerID)

  return (
    <Form 
     onPress={onSubmit}  // handleSubmit
     status={status} 
     animalID={animalID} 
     />
  )
}

export default Edit
