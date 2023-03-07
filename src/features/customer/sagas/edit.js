import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducer'

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
            if (c.id !== customerID) return customer
            return fields
        })

        yield delay(500)

        yield put(actions.editCustomerResult(result))
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()))
    }
}