import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import styles from './User.module.css';

const User = () => {
  const { signout } = UseAuth();
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <button onClick={() => [signout(), navigate('/')]}>Sair</button>
    </div>
  );
};

export default User;
