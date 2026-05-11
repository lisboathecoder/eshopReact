import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
        <div className={styles.about}>
            <h1>Sobre Nós</h1>
            <p>Somos dois estudantes do Senai Valinhos 465</p>

            <h1>Nossa Equipe</h1>
            <p>Gustavo Lisboa e Fabio Henrique</p>
        </div>

        <div>
            <h1>Sobre o projeto</h1>
            <p>Este projeto é uma aplicação de comércio eletrônico simples, desenvolvida para demonstrar o uso do React e React Router. Ele inclui uma página inicial, uma página de produtos que busca dados de uma API externa, e uma página de contato. O objetivo é fornecer uma experiência de usuário fluida e intuitiva, permitindo que os usuários naveguem facilmente entre as diferentes seções do site. O projeto também inclui um tratamento básico de erros para garantir que os usuários sejam informados caso haja algum problema ao buscar os produtos.</p>
        </div>
        <div>
            <button>
                <Link to="/">Voltar para Home</Link>
            </button>
        </div>
        </>
    )
}

export default About;