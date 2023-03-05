import { all } from 'redux-saga/effects'
import { watchCreateCustomer } from './add'

export default function* animal() {
    yield all([
        watchCreateCustomer(),
    ]) 
}