import produce from 'immer';

const initialState = {
    isAuthenticated: false,
}

export const homeReducer = (state = initialState, action: any) =>
    produce(state, draft => {
        switch (action.type) {
            case 'LOGOUT':
                draft.isAuthenticated = false
                break
            case 'LOGIN_SUCCEED':
                draft.isAuthenticated = true
                break
            default:
                return state
        }
    })