import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducer'

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer)
}

export function* takeEditCustomer(action) {
    console.log('Starting fetch request to API for Editing')
    const customerID = action.payload

    try {
        const fields = yield select(state => state.customer.customerForm)
        const customers = yield select(state => state.customer.list.customers)

       const result = customers.map(c => {
            // if c is not the one being updated, return it unchanged
            if (c.id !== customerID) return customer
            // otherwise, customer is the one being updated
            // return the new fields instead of the old ones
            return fields
        })

        // pretend call to API
        yield delay(500)


        yield put(actions.editCustomerResult(result))
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()))
    }
}