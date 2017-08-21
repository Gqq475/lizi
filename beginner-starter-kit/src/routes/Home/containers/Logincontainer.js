import { connect } from 'react-redux'
import Login from '../components/Login'
import { browserHistory  } from 'react-router';

import { loginCounter } from '../../Counter/modules/loginAction'

const mapStateToProps = ( state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    return {
        login: state.Login.login
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    let ma = {}
    return {
            login:() => {
                dispatch(loginCounter(ma))
                // browserHistory.push('/counter');
            },
            onchange: (e) => {
                if(e.target.name === 'username') {
                    ma.username = e.target.value
                }else {
                    ma.password = e.target.value
                }
            }
    }
}

const LoginContainer = connect( mapStateToProps, mapDispatchToProps)(Login)
export default LoginContainer