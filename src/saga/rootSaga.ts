import { all } from 'redux-saga/effects';
import signInSaga from '../saga/login.saga'

export default function* rootSaga() {
    yield all([
        signInSaga()
    ]);
}