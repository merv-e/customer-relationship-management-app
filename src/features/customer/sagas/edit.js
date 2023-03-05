import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducer'


export function* watchEditcustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer)
}

export function* takeEditcustomer() {
    console.log('Starting fetch request to API')
    try {
        const fields = yield select(state => state.customer.customerForm)
        const customers = yield select(state => state.customer.list.customers)

        const customer = {
            id: customers.length + 1,
            ...fields,
        }

        // pretend call to API
        yield delay(500)

        const result = [customer, ...customers]

        yield put(actions.editCustomerResult(result))
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()))
    }
}