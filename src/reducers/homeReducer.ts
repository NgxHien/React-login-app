import produce from 'immer';

const initialState = {
    isLogIn: false,
}

export const homeReducer = (state = initialState, action: any) =>
    produce(state, draft => {
        switch (action.type) {
            case 'LOGOUT':
                draft.isLogIn = false
                break
            case 'LOGIN_SUCCEED':
                draft.isLogIn = true
                break
            default:
                return state
        }
    })