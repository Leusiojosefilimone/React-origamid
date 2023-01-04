import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordReset from './LoginPasswordReset'
import LoginPasswordLost from './LoginPasswordLost'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/create' element={<LoginCreate/>}/>
        <Route path='/passwordlost' element={<LoginPasswordLost/>}/>
        <Route path='/passwordreset' element={<LoginPasswordReset/>}/>
      </Routes>
    </div>
  )
}

export default Login