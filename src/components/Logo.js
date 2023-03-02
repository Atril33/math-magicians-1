import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import styles from '../styles/Logo.module.css';

const Logo = () => (
  <NavLink to="/">
    <img src={logo} alt="Logo" className={styles.logo} />
  </NavLink>
);

export default Logo;
