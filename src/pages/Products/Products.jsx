import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import { useState, useEffect } from "react";

export default function Products() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    let isMounted = true

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        if (!isMounted) return
        setProdutos(data.products || [])
        setCarregando(false)
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error)
        if (isMounted) {
          setProdutos([])
          setCarregando(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  if (carregando) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
        <p>Buscando produtos selecionados...</p>
      </div>
    )
  }

  return (
    <div className={styles.products}>
      <h1>Produtos Disponíveis</h1>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
        ) : (
        <ul className={styles.productList}>
          {produtos.map(produto => (
            <li key={produto.id} className={styles.productItem}>
                <img src={produto.thumbnail} alt={produto.title} className={styles.productImage} />
                <h2>{produto.title}</h2>
                <p>{produto.description}</p>
                <p>Preço: ${produto.price}</p>
            </li>
            ))}
        </ul>
      )}
      <button>
        <Link to="/">Voltar para Home</Link>
        </button>
    </div>
  )
}