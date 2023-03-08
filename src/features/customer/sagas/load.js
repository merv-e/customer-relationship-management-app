import { all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducer'
import { get } from '../../../utilities/async_storage'

export function* watchGetCustomers() {
    yield takeLatest(actions.getCustomers.toString(), takeGetCustomers)
};

export function* takeGetCustomers() {
    try {
        const customers = yield get("CUSTOMERS_KEY")

        yield delay(1500) //acts as if there's an API call

        yield put(actions.getSavedCustomers(customers))
    } 
    catch (error) {
        yield put(actions.getSavedCustomers([]))
    }
};

