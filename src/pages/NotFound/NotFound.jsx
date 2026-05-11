import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <button>
        <Link to="/">Voltar para Home</Link>
      </button>
    </div>
  );
}

export default NotFound;