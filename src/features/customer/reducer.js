import { createSlice } from '@reduxjs/toolkit'
import { PENDING, REQUESTING, SUCCESS, ERROR, INPROGRESS } from "../status"

const name = 'customer'

const initialState = {
    form: {
        fields: {
            firstName: null,
            lastName: null,
            isActive: null,
            region: null, 
        }
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
    // creating a customer in the first place
    createCustomer : (state) => {
        state.create.status = REQUESTING
    }, 
    
    createCustomer_Result: (state, {payload}) => {
        state.create.status = SUCCESS
        state.list.customers = payload
        
        //to make the fields blank again and return the status of create to the initial state.
        state.form.fields = initialState.form.fields
        state.create = initialState.create
    },
    
    createCustomer_Error: (state, { payload }) => {
        state.create.status = ERROR;
        state.error.message = payload;
        state.form.fields = initialState.form.fields    
    },
    
    // fill the form fields as the user info
    setFormField: (state, { payload }) => {
        const current = state.form.fields;
        const { field, value } = payload;
        
        const fields = {
            ...current,
            [field]: value,
        };
        
        state.form.fields = fields
    },
     
    setForm: (state, { payload }) => {
        const customer = state.list.customers.find(c => c.id === payload) // ===
        if (customer) {
            state.form.fields = customer
        } 
        else {
            state.error.message = `could not find customer with id: ${payload}`
            }
    },
    
    // editing a customer info
    editCustomer: (state, {payload}) => {
        state.edit.status = REQUESTING;
    },
    
    editCustomerStatus: (state, { payload }) => {
        state.edit = payload
    },
    
    editCustomerResult: (state, { payload }) => {
        state.edit.status = SUCCESS;
        state.list.customers = payload;
         
        state.form.fields = initialState.form.fields; 
        state.edit = initialState.edit;
    },
    
    editCustomerError: (state, {payload}) => {
        state.edit.status = ERROR;
        state.error.message = payload;
        state.form.fields = initialState.form.fields
    },
    
    // get the customers/info from async storage
    getCustomers: (state) => {
        state.get.status = REQUESTING;
    },

    getCustomersResult :(state, {payload}) => {
        state.get.status = SUCCESS;
        state.list.customers = payload;
        state.form.fields = initialState.form.fields; 
        state.get = initialState.get;
    },

    getCustomersError : (state, {payload}) => {
        state.get.status = ERROR;
        state.error.message = payload;
        state.form.fields = initialState.form.fields;
    },
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
    editCustomer,
    editCustomerResult,
    editCustomerError,
    editCustomerStatus,
    getCustomers,
    getCustomersResult,
    getCustomersError,    
} = slice.actions

export default slice.reducer


// deleteCustomer