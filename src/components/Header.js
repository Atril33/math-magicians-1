import Logo from './Logo';
import Navbar from './Navbar';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <Navbar />
  </header>
);

export default Header;
