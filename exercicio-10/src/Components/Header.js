import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
       <ul>
          <li>
             <NavLink style={({ isActive }) => isActive ? 'color: red' : ''}  className={styles.link} to="/"> Produtos</NavLink>
          </li>
          <li>
              <NavLink style={({ isActive }) => isActive ? 'color: red' : ''}  className={styles.link} to="/contacto"> Contactos</NavLink>
          </li>
       </ul>
    </header>
  )
}

export default Header 