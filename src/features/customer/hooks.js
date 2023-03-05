import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducer'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export const useUpdateFields = (customerID) => {
  
  const dispatch = useDispatch()
  let fields;

  // useEffect(()=> {
   if (customerID) {
    fields = useSelector(state => state.customer.list.customers.find(c => c.id === customerID))
   }
   fields = useSelector(state=> state.customer.customerForm)
      
    // dispatch(actions.setForm(customerID))
      // : console.log("Do not update!");
  // },[])

  return {
    fields,
    setFormField: (field ) => (value) => { 
      console.log(`Updating field ${field} to ${value}`)
      return dispatch(actions.setFormField({ field, value }))
    },
  }
}

export const useNewCustomer = () => {
  console.log("dispatching createCustomer action");
  const dispatch = useDispatch();
  const n = useNavigation();

  return {
    onSubmit : () => dispatch(actions.createCustomer())
    // ,
    // navigate: n.navigate("Regions")
    
  }
};

// use this...
export const useListCustomers = () => {
  return useSelector((state) => state.customer.list.customers)
}

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch()

  return {
    onSubmit: () => {
      console.log('Dispatching EditCustomer action')
      dispatch(actions.editCustomer(customerID))
    }
  }
}

export const useEditCustomerStatus = () => {
  return useSelector(state => state.customer.edit.status)
}

export const useListcustomers = () => {
  return useSelector(state => state.customer.list.customers)
}
