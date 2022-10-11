let initState = {
    uid: null,
    signup: null
}

export const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case 'logout_user':
            localStorage.removeItem('uid')
            localStorage.removeItem('signup')
            return { ...state, signup: null, uid: null }
        case 'set_user_value_from_localstorage':
            return { ...state, signup: action.payload?.action, uid: action?.payload?.uid }
        default:
            return state
            break;
    }
}

