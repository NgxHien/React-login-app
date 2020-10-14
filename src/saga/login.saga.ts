import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUserFailed, fetchUserSuccess } from '../actions/login';

export function* loginSaga(action: any) {
    try {
        const respond = yield call(axios.request, {
            url: 'https://5f855dcfc29abd00161906fe.mockapi.io/users/1',
            method: 'GET'
        })
        if (respond) {
            yield put(fetchUserSuccess(respond.data));
        }
    } catch (error) {
        console.log('error');
        yield put(fetchUserFailed(error))
    }
}

export default function* signInSaga() {
    yield takeLatest('LOGIN_REQUEST', loginSaga);
}

