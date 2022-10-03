import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../img/arrow.svg';
import styles from './UserNav.module.css';
import admin from '../../img/admin.svg';
import client from '../../img/client.svg';
import colab from '../../img/colab.svg';
const UserNav = () => {
  return (
    <ul style={styles.ul}>
      <li style={styles.li}>
        <Link className={styles.link} to="/administrators">
          <img src={admin} alt="" />
          Administrators
        </Link>
        <Link className={styles.link} to="/clients">
          <img src={client} alt="" /> Clients
        </Link>
        <Link className={styles.link} to="/collaborators">
          <img src={colab} alt="" />
          Collaborators
        </Link>
        <Link className={styles.exit} to="/">
          <img src={ArrowLeft} alt="" />
        </Link>
      </li>
    </ul>
  );
};

export default UserNav;
