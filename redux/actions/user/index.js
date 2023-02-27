
export const logout_user = () => {
    return async (dispatch) => {
        dispatch({
            type: 'logout_user',
        })

    }
}

export const set_user_value_from_localstorage = (userinfo) => {
    return async (dispatch) => {
        dispatch({
            type: 'set_user_value_from_localstorage',
            payload: userinfo
        })

    }
}


