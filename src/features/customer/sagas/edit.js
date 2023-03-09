import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducer'
import { set } from '../../../utilities/async_storage'

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer)
}

export function* takeEditCustomer(action) {
    console.log('Starting fetch request to API for Editing')
    const customerID = action.payload

    try {
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)

       const result = 
         customers.map(c => {
             console.log("customerID:", customerID);
             console.log("customerMapped:", c.id);
          if (c.id !== customerID) {
            return c;
          }
            return fields;
        })

        yield delay(500)
        
        yield set("CUSTOMERS_KEY", result)

        yield put(actions.editCustomerResult(result))
    } 
    catch (error) {
        yield put(actions.editCustomerError(error.toString()))
    }
}