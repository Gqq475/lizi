import React from 'react'
import './HomeView.scss'

// import Login from './Login'
import LoginContainer from '../containers/Logincontainer'
const HomeView = () => (
  <div className="test">
    <h2>歡迎各位加入團隊</h2>
    <div>
        <LoginContainer/>
    </div>
  </div>
)

export default HomeView
