import React from 'react';
import styles from './Clients.module.css';
import Trash from '../../img/trash.svg';
import Editor from '../../img/editor.svg';
import userMobile from '../../img/usermobile.svg';
import { useLocation } from 'react-router-dom';
import UseMedia from '../Hooks/UseMedia';

const Clients = () => {
  const [number, setNumber] = React.useState(12);
  const [clients, setClients] = React.useState([
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
    { name: 'jose', email: 'teste@hotmail.com', phone: '(53) 99999999' },
  ]);
  const mobile = UseMedia('(max-width: 780px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  const handleRemoteClient = position => {
    setClients([...clients.filter((_, index) => index !== position)]);
    setNumber(number - 1);
  };
  return (
    <>
      <section className={styles.containerMaster}>
        <div className={styles.containerTitle}>
          <h1>Lista de clientes</h1>
          <p>{number} clientes cadastrados</p>
        </div>
        <div className={styles.register}>
          {mobile ? (
            <span onClick={() => setNumber(number + 1)}>
              <img src={userMobile} alt="" />
            </span>
          ) : (
            <span onClick={() => setNumber(number + 1)}>
              + Cadatrar Cliente
            </span>
          )}
        </div>
        <div className={styles.containerClient}>
          {clients.map((client, index) => (
            <div className={styles.Clients} key={index}>
              <div>
                <button
                  onClick={() => {
                    handleRemoteClient(index);
                  }}
                >
                  <img src={Trash} alt="Lixeira" />
                </button>
                <button>
                  <img src={Editor} alt="Editor" />
                </button>
              </div>
              <div>
                <h1>{client.name}</h1>
                <p>{client.email}</p>
                <p>{client.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Clients;
