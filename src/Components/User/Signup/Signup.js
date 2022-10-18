import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import styles from './Signup.module.css';

const Signup = () => {
  const { signup } = UseAuth();
  const navigate = useNavigate();

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailConf, setEmailConf] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSignup = e => {
    e.preventDefault();
    if (!name | !phone | !email | !emailConf | !senha) {
      setError('Preencha todos os campos');
      return;
    } else if (email !== emailConf) {
      setError('Os e-mails não são iguais');
      return;
    }

    const res = signup(email, senha);
    if (res) {
      setError(res);
      return;
    }
    alert('Usuário cadastrado com sucesso!');
    navigate('/');
  };
  return (
    <form className={styles.form}>
      <label className={styles.label}>SISTEMA DE CADASTRO</label>
      <input
        type="text"
        placeholder="Nome Completo"
        value={name}
        onChange={({ target }) => [setName(target.value), setError('')]}
      />
      <input
        type="text"
        placeholder="(99) 9 9999-9999"
        value={phone}
        onChange={({ target }) => [setPhone(target.value), setError('')]}
      />
      <input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={({ target }) => [setEmail(target.value), setError('')]}
      />
      <input
        type="email"
        placeholder="Confirme seu E-mail"
        value={emailConf}
        onChange={({ target }) => [setEmailConf(target.value), setError('')]}
      />
      <input
        type="password"
        placeholder="Digite sua Senha"
        value={senha}
        onChange={({ target }) => [setSenha(target.value), setError('')]}
      />
      <label>{error}</label>
      <button onClick={handleSignup}>Inscreva-se</button>
      <label>
        Já tem uma conta?{' '}
        <strong>
          <Link to="/signin">&nbsp;Entre</Link>
        </strong>
      </label>
    </form>
  );
};

export default Signup;
