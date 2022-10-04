import React from 'react';
import styles from './Header.module.css';
import UserNav from './User/UserNav';
import UserNavMobile from './User/UserNavMobile';
import { Link } from 'react-router-dom';
import imgUser from '../img/user.svg';
import { useLocation } from 'react-router-dom';
import UseMedia from './Hooks/UseMedia';
const Header = () => {
  const mobile = UseMedia('(max-width: 425px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
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
        <div>{mobile ? <UserNavMobile /> : <UserNav />}</div>
      </header>
    </>
  );
};

export default Header;
