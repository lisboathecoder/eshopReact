import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>E-SHOP</div>
      <ul className={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;   