import { all } from 'redux-saga/effects'
import { watchAddCustomer } from './add'

export default function* animal() {
    yield all([
        watchAddCustomer(),
    ]) 
}