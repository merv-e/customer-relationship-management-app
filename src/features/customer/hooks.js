import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducer'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { INPROGRESS, PENDING } from '../status';

// USE ASYNC_STORAGE TO SHOW CUSTOMERS LIST
export const useListCustomers = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getCustomers()) // async
  }, [dispatch]) 
  
  return useSelector(state => state.customer.list.customers)
};


// UPDATE THE FIELDS AND EDIT THE FORM IF THE CONDITIONS ARE MET
export const useUpdateFields = (customerID) => {
  
  const dispatch = useDispatch()
  const status = useSelector(state => state.customer.edit.status)
  const fields = useSelector(state => state.customer.form.fields)

  // console.log("customerID : ", customerID, status );

  useEffect(()=> {
   if (customerID && status === PENDING) {
      dispatch(actions.setForm(customerID))
   }
  }, [customerID, status]);

  return {
    fields,
    setFormField: (field, value) => { 
      console.log(`Updating field ${field} to ${value}`)
      dispatch(actions.setFormField({ field, value }))
    },
  }
};

//CREATE
export const useNewCustomer = () => {
  const dispatch = useDispatch();
  
  return {
    onSubmit : () => {
      console.log("dispatching createCustomer action");
      dispatch(actions.createCustomer())
    }
  }
};

//EDIT

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
};
 
export const useEditCustomerStatus = () => {
  return useSelector(state => state.customer.edit.status)
};

