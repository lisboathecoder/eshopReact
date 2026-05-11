import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div className={styles.home}>
      <h1>Bem vindo ao E-Shop</h1>
      <p>Sua loja de comércio on-line!</p>
    </div>
    <div  className={styles.buttonGroup}>
        <button>
        <Link to="/products">Ver Produtos</Link>
        </button>
    </div>
    </>
  );
}

export default Home;