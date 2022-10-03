import React from 'react';
import styles from './Clients.module.css';
import Register from './Register/Register';
const Clients = () => {
  const [clients, setClients] = React.useState(0);

  function addClient() {
    setClients(clients + 1);
  }

  return (
    <>
      <section className={styles.containerMaster}>
        <main className={styles.main}>
          <div className={styles.containerTitle}>
            <div>
              <h1>Lista de clientes</h1>
              <p>{clients} clientes cadastrados</p>
            </div>
            {/* <Register /> */}
          </div>
          <div className={styles.container}>
            <p>teste</p>
            <p>t67es2te</p>
            <p>t6456este</p>
            <p>265453</p>
            <p>t54354e41este</p>
            <p>te2151ste</p>
            <p>tes414122te</p>
            <p>12525</p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Clients;
