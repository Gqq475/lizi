const Login = (state={}, action) => {
    switch(action.type) {
        case 'SHOW_LOADING':
            return {showLoading: true}
        case 'LOGIN_SUCCESS':
            return {...state, login: true}
        case 'LOGIN_WARNING':
            return {...state, warning: true}
        case 'HID_LOADIG':
            return {showLoading: false}
        default:
            return state
    }
}

export default Login