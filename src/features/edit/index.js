import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useEditCustomer, useEditCustomerStatus } from '../customer/hooks'
import Form from '../Form'

const Edit = () => {
  // const styles = formStyles()

  const { params } = useRoute()
  const {customerID} = params;
  
  const {status, onSubmit } = useEditCustomer(customerID)

  return (
    <Form 
     handleSubmit={onSubmit} 
     status={status} 
     customerID={customerID} 
     />
  )
}

export default Edit
