import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducer'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { INPROGRESS, PENDING } from '../status';

export const useUpdateFields = (customerID = null) => {
  
  const dispatch = useDispatch()
  const status = useSelector(state => state.customer.edit.status)
  const fields = useSelector(state => state.customer.customerForm)

  console.log("customer.id : ", customerID, "status:", status, );
  //customerID && status !== INPROGRESS

  useEffect(()=> {
  //  if (customerID && status === PENDING) {
      dispatch(actions.setForm(customerID))
  //  }

  },[customerID, status])

  return {
    fields,
    setFormField: (field ) => (value) => { 
      console.log(`Updating field ${field} to ${value}`)
      dispatch(actions.setFormField({ field, value }))
    },
  }
}

export const useListCustomers = () => {
  return useSelector((state) => state.customer.list.customers)
}

export const useNewCustomer = () => {
  const dispatch = useDispatch();
  
  return {
    onSubmit : () => {
      console.log("dispatching createCustomer action");
      dispatch(actions.createCustomer())
    }
  }
};

export const useCreateCustomerStatus = () => {
  return useSelector(state => state.customer.create.status)
};


export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch()
  const status = useEditCustomerStatus()

  return {
    status,
    onSubmit: () => {
      console.log('Dispatching EditCustomer action')
      dispatch(actions.editCustomer(customerID))
    }
  }
}

export const useEditCustomerStatus = () => {
  return useSelector(state => state.customer.edit.status)
}

