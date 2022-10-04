import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowLeft from '../../img/arrow.svg';
import styles from './UserNav.module.css';
import admin from '../../img/admin.svg';
import client from '../../img/client.svg';
import colab from '../../img/colab.svg';
const UserNav = () => {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <NavLink className={styles.link} to="/administrators">
          <img className={styles.img} src={admin} alt="" />
          Administrators
        </NavLink>
        <NavLink className={styles.link} to="/clients">
          <img className={styles.img} src={client} alt="" /> Clients
        </NavLink>
        <NavLink className={styles.link} to="/collaborators">
          <img className={styles.img} src={colab} alt="" />
          Collaborators
        </NavLink>
        <NavLink className={styles.exit} to="/">
          <img src={ArrowLeft} alt="" />
        </NavLink>
      </li>
    </ul>
  );
};

export default UserNav;
