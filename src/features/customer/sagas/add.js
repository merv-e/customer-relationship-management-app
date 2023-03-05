import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducer'
import * as services from "../services"
 
export function* watchAddCustomer() {
    yield takeLatest(actions.addCustomer_Status.toString(), takeAddCustomer) //First action --- second cb func.
}

export function* takeAddCustomer() {
    console.log('Starting fetch request to API')
    try {
        const fields = yield select(state => state.customer.customerForm)

        const customers = yield select(state => state.customers.list)

        const customer = {
            id: customers.length + 1,
            ...fields,
        }

        // pretend call to API
        yield delay(500)

        const result = [customer, ...customers]

        yield put(actions.addCustomer_Result(result))
    } catch (error) {
        yield put(actions.addCustomer_Error(error.toString()))
    }
}

