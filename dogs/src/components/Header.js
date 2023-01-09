import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const Contexto = React.useContext(UserContext)
  console.log(Contexto)
  return (
    <header className={styles.Header}>
      <nav className={` container ${styles.Nav}`}>
        <Link to="/" className={styles.Logo} aria-label='dogs - home'>
          <Dogs/>
        </Link>
        <Link to="/login" className={styles.Login}>
          {Contexto.usuario}
          Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header