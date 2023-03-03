import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducer'

// (customerID)
export const useUpdateFields = () => {
  
  const dispatch = useDispatch()
  const fields = useSelector(state => state.customer.customerForm)

  // useEffect(()=> {
  //   customerID 
  //     ? dispatch(actions.setForm(customerID))
  //     : console.log("Do not update!");
  // },[])

  return {
    fields,
    setFormField: (field, value) => { 
      console.log(`Updating field ${field} to ${value}`)
      return dispatch(actions.setFormField({ field, value }))
    },
  }
}
