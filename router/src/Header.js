import React from 'react'
import {NavLink } from 'react-router-dom'
import './Link.css'


const Header = () => {
  return (
    <div>
       
        <h1>Header</h1>
        <nav>
            <NavLink to='/'>Home</NavLink> {'  '}
            <NavLink to='sobre'>Sobre</NavLink>{'  '}
            <NavLink to='login'>Login</NavLink>
        </nav>
    </div>
  )
}

export default Header