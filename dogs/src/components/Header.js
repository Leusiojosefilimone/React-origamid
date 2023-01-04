import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';

const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={` container ${styles.Nav}`}>
        <Link to="/" className={styles.Logo} aria-label='dogs - home'>
          <Dogs/>
        </Link>

        <Link to="/login" className={styles.Login}>Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header