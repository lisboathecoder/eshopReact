import styles from './Footer.module.css';
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 Senai Valinhos - Todos os direitos reservados.</p>
        <p>Desenvolvido por Gustavo Lisboa e Fabio Henrique</p>
        <a href="https://github.com/lisboathecoder/eshopReact" target="_blank" className='githubLogo'>
          <FaGithub />
        </a>
    </footer>
  );
}
export default Footer;