import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import styles from './Signin.module.css';
const Signin = () => {
  const { signin } = UseAuth();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLogin = e => {
    e.preventDefault();
    if (!email | !senha) {
      setError('Preencha todos os campos.');
      return;
    }
    const res = signin(email, senha);
    if (res) {
      setError(res);
      return;
    }
    navigate('/');
  };
  return (
    <form className={styles.form}>
      <label className={styles.label}>SISTEMA DE LOGIN</label>
      <input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={({ target }) => [setEmail(target.value), setError('')]}
      />
      <input
        type="password"
        placeholder="Digite sua Senha"
        value={senha}
        onChange={({ target }) => [setSenha(target.value), setError('')]}
      />
      <label>{error}</label>
      <button onClick={handleLogin}>Entrar</button>

      <label>
        Não tem uma conta?{' '}
        <strong>
          <Link to="/signup">&nbsp;Registre-se</Link>
        </strong>
      </label>
    </form>
  );
};

export default Signin;
