import axios from "axios"
export const fetchUser = (username: string, password: string) => {
    return {
        type: 'LOGIN_REQUEST',
        payload: {
            username,
            password,
        }
    }
}

export const fetchUserSuccess = (data: any) => {
    return {
        type: 'LOGIN_SUCCEED',
        data,
    }
}

export const fetchUserFailed = (error: any) => {
    return {
        type: 'LOGIN_FAIL',
        error,
    }
}

// thunk 
// export default (username: any, password: any) => {
//     return (dispatch: any) => {
//         dispatch(fetchUser(username, password));
//         return axios.get(`https://5f855dcfc29abd00161906fe.mockapi.io/users/1`)
//             .then(
//                 (user: any) => {
//                     dispatch(fetchUserSuccess(user));
//                     localStorage.setItem('token', user.data.token);
//                     console.log(user.data.token);
//                 },
//                 (err: any) => dispatch(fetchUserFailed(err))
//             )
//             .catch(error => error)
//     }
// }