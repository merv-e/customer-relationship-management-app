import { createSlice } from '@reduxjs/toolkit'

const name = 'customer'

const initialState = {
    customerForm: {
        firstName: null,
        lastName: null,
        isActive: null,
        region: null, 
        // userID : "", //to be generated.
    },
    get: {
        status: "PENDING",
    },
    show: { 
        customers : [],
        status : "PENDING",
    },
    add: { 
        status: "PENDING",
    },
    edit: {
        status: "PENDING",
    },
    clear: {
        status: "PENDING",
    },
    error: {
        message: "",
    },
}

const reducers = {
    getCustomers: (state) => {
        state.get.status = "REQUESTING"
    },

    showCustomers_Status: (state, { payload }) => {
        state.show.customers = payload;
        state.get.status = "SUCCESS";
        state.get = initialState.get;
    },

    noCustomerFound_Status: (state) => {
        state.get.status = "ERROR";
    },
    
    addCustomer_Status: (state) => {
        state.add.status = "REQUESTING";
    },

    addCustomer: (state, { payload }) => {
        state.add.status = "SUCCESS";
        state.show.customers = payload;
        state.customerForm = { ...initialState.customerForm } 
        state.add = initialState.add;
    },

    addCustomer_Success:  (state, { payload }) => {
        state.add.status = "SUCCESS";
        state.show.customers = payload;
        state.customerForm = { ...initialState.customerForm }; 
        state.add = initialState.add;
    },

    addCustomer_Error: (state, { payload }) => {
        state.add.status = "ERROR";
        state.error.message = payload;
        state.customerForm = { ...initialState.customerForm };
    },

    editCustomer: (state) => {
        state.edit.status = "REQUESTING";
    },
    
    setForm: (state, { payload }) => {
      const customer = state.show.customers.filter((c) => c.id === payload);  
      
      customer 
       ? state.customerForm = customer 
       : state.error.message = `The customer you are looking for can not be found with id:${payload}`;
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

    editCustomer_Success: (state, { payload }) => {
        state.edit.status = "SUCCESS";
        state.show.customers = payload;
        state.customerForm = { ...initialState.customerForm }; 
        state.edit.status = initialState.edit.status;
    },

    editCustomer_Error: (state) => {
        state.edit.status = "ERROR";
    },

    clearStorage: (state) => {
        state.clear.status = "REQUESTING";
    },
    
    clearStorage_Success: (state) => {
      state.clear.status = "SUCCESS";
      state.show = { ...initialState.show };
      state.clear.status = initialState.clear.status;
    },

    clearStorage_Error: (state) => {
        state.clear.status = "ERROR";
    },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
    getCustomers,
    showCustomers_Status,
    noCustomerFound_Status,
    addCustomer_Status,
    addCustomer,
    addCustomer_Success,
    addCustomer_Error,
    editCustomer,
    editCustomer_Success,
    editCustomer_Error,
    clearStorage,
    clearStorage_Success,
    clearStorage_Error,
    setForm,
    setFormField,
} = slice.actions

export default slice.reducer
