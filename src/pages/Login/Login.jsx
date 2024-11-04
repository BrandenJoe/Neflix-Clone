import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className ="login_logo" alt="" />
      <div className='login_form'>
        <h1>Sign In</h1>
        <form>
          <input type="text" />
        </form>
      </div>
    </div>
  )
}

export default Login
