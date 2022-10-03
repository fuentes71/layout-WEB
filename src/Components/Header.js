import React, { useState } from 'react';
import styles from './Header.module.css';
import UserNav from './User/UserNav';
import UserNavMobile from './User/UserNavMobile';
import { Link } from 'react-router-dom';
import imgUser from '../img/user.svg';
const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div>
            <Link className={styles.logo} to="/">
              <h1>Ponto Go</h1>
            </Link>
          </div>

          <div style={styles.user}>
            <Link to="/user">
              <img src={imgUser} alt="" />
            </Link>
          </div>
        </nav>
        <div>
          {mobile ? (
            <div>
              <UserNavMobile />
            </div>
          ) : (
            <div>
              <UserNav />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
