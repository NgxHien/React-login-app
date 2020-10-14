import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUserFailed, fetchUserSuccess } from '../actions/login';
import { API_URL } from '../urlConfig';

// don't post anything, just a fake respond from api 

export function* loginSaga(action: any) {
    try {
        const respond = yield call(axios.request, {
            url: API_URL,
            method: 'POST',
            data: {
                name: action.payload.username,
                password: action.payload.password,
            },
        })
        if (respond) {
            yield put(fetchUserSuccess(respond.data));
        } else {
            alert('Wrong username or password');
        }
    } catch (error) {
        yield put(fetchUserFailed(error))
    }
}

export default function* signInSaga() {
    yield takeLatest('LOGIN_REQUEST', loginSaga);
}

