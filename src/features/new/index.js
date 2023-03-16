import React from 'react'
import { useNewCustomer, useCreateCustomerStatus } from '../customer/hooks'
import Form from '../Form'

const New = () => {
  const { onSubmit } = useNewCustomer()
  const status = useCreateCustomerStatus()
  const text = "Submit"

  return (
    <Form 
      handleSubmit={onSubmit} 
      status={status} 
      customerID={null}
      text={text}
      />
  )
}

export default New
  