import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducer'
// import * as services from "../services"
 
export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer) //First action --- second cb func.
}

export function* takeCreateCustomer() {
    console.log('Starting fetch request to API -- CREATE')
    try {
        const fields = yield select(state => state.customer.form.fields)

        const customers = yield select(state => state.customer.list.customers)

        const customer = {
            id: customers.length + 1,
            ...fields,
        }

        yield delay(500)

        const result = [customer, ...customers]

        yield put(actions.createCustomer_Result(result))
    } catch (error) {
        yield put(actions.createCustomer_Error(error.toString()))
    }
}

