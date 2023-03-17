import {all, put, select, takeLatest} from "redux-saga/effects"
import * as actions from '../reducer'
import { clear } from '../../../utilities/async_storage'

export function* watchClearStorage() {
    yield takeLatest(actions.clearStorage.toString(), takeClearStorage);
}

function* takeClearStorage() {
    try {
        console.log("Storage is being cleared!");
      yield clear()  

      yield put(actions.clearStorageResult([]))
    }
    catch (error) {
      yield put(actions.clearStorageError())
    }
  }