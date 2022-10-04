import React from 'react';
import styles from './UserNavMobile.module.css';
import burger from '../../img/burger.svg';
import { NavLink } from 'react-router-dom';
import ArrowLeft from '../../img/arrow.svg';
import admin from '../../img/admin.svg';
import client from '../../img/client.svg';
import colab from '../../img/colab.svg';
const UserNavMobile = () => {
  const [nav, setNav] = React.useState(false);
  return (
    <>
      <div className={styles.burger}>
        <button
          className={styles.button}
          onClick={e => {
            setNav(!nav);
          }}
        >
          <img src={burger} alt="" />
        </button>
      </div>
      {nav ? (
        <ul style={styles.ul}>
          <li style={styles.li}>
            <NavLink className={styles.link} to="/administrators">
              <img className={styles.img} src={admin} alt="" />
              Administrators
            </NavLink>
            <NavLink className={styles.link} to="/clients">
              <img src={client} alt="" /> Clients
            </NavLink>
            <NavLink className={styles.link} to="/collaborators">
              <img src={colab} alt="" />
              Collaborators
            </NavLink>
            <NavLink className={styles.exit} to="/">
              <img src={ArrowLeft} alt="" />
            </NavLink>
          </li>
        </ul>
      ) : (
        <span></span>
      )}
    </>
  );
};

export default UserNavMobile;
