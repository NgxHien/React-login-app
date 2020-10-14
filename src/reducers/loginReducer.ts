import produce from 'immer';
const initialState = {
    loading: false,
    username: null,
    password: null,
    token: ''
}
export const loginReducer = (state = initialState, action: any) =>
    produce(state, draft => {
        switch (action.type) {
            case 'LOGIN_REQUEST':
                draft.loading = true;
                draft.username = action.payload.username;
                draft.password = action.payload.password;
                break
            case 'LOGIN_SUCCEED':
                draft.loading = false;
                draft.token = action.data;
                break
            case 'LOGIN_FAIL':
                draft.loading = false;
                break
            default:
                return state;
        }
    })