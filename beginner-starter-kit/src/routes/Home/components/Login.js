import React, { Component } from 'react' 
import { browserHistory  } from 'react-router'

import './Login.less'


class Login extends Component {
    constructor() {
        super()
    }
    componentDidUpdate() {
        const { login } = this.props

        if(login) {
            sessionStorage.setItem('WBCUSERLOGINSTATUS', true)
            browserHistory.push('/counter')

        }
    }

    render() {
        const { login, onchange } = this.props
        return(
            <div className="login">
                <div className="form">
                    <div>
                        <label>账户：<input name="username" type="text" placeholder="请输入账户" onChange={onchange} /></label>
                        <label>密码：<input name="password" type="text" placeholder="请输入密码" onChange={onchange} /></label>
                    </div>
                    <div>
                        <button onClick={login}>登陆</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Login 