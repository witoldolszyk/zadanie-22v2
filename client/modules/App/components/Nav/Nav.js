import React from 'react';
import { Link } from 'react-router';
import styles from './Nav.css';

const Nav = () => (
  <div className={styles['site-nav']}>
    <Link to="/home" className={styles['nav-link']} >Home </Link>
    <Link to="/" className={styles['nav-link']} >Posts </Link>
    <Link to="/about" className={styles['nav-link']} >About </Link>
  </div>
  );

export default Nav;
