import { createSlice } from '@reduxjs/toolkit'
import { PENDING, REQUESTING, SUCCESS, ERROR } from "../status"
const name = 'customer'

const initialState = {
    customerForm: {
        firstName: null,
        lastName: null,
        isActive: null,
        region: null, 
    },
    get: {
        status: PENDING,
    },
    list: { 
        customers : [],
        status : PENDING,
    },
    create: { 
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
    clear: {
        status: PENDING,
    },
    error: {
        message: "",
    },
}

const reducers = {
    getCustomers: (state) => {
        state.get.status = REQUESTING
    },

    createCustomer : (state) => {
        state.create.status = REQUESTING
    }, 
    
    createCustomer_Result: (state, {payload}) => {
        state.create.status = SUCCESS
        state.list.customers = payload
    },
    
    createCustomer_Error: (state, { payload }) => {
        state.create.status = ERROR;
        //     state.error.message = payload;
        //     state.customerForm = { ...initialState.customerForm };
    },
    
    setFormField: (state, { payload }) => {
        const current = state.customerForm;
        const { field, value } = payload;
        
        const fields = {
            ...current,
            [field]: value,
        };
        
        state.customerForm = fields
    },
    
    editCustomer: (state) => {
        state.edit.status = REQUESTING;
    },

    editCustomerResult: (state, { payload }) => {
        state.edit.status = SUCCESS;
        state.list.customers = payload;
        
        state.customerForm = { ...initialState.customerForm }; 
        state.edit.status = initialState.edit.status;
    },

    editCustomerError: (state) => {
        state.edit.status = ERROR;
        state.error.message = payload
    },

        // listCustomers_Status: (state, { payload }) => {
            //     state.list.customers = payload;
            //     state.get.status = SUCCESS;
            //     state.get = initialState.get;
            // },
            
        //noCustomerFound_Status: (state) => {
        //     state.get.status = ERROR;
        // },
        

}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
    createCustomer,
    createCustomer_Result,
    createCustomer_Error,
    setForm,
    setFormField,
    getCustomers,
    editCustomer,
    editCustomerResult,
    editCustomerError,
    // listCustomers_Status,
    // noCustomerFound_Status,
    // createCustomer_Success,
} = slice.actions

export default slice.reducer
