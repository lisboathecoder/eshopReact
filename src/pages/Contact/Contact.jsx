import styles from "./Contact.module.css";
function Contact() {
    return (
        <div className={styles.contact}>
            <h1>Contato</h1>
            <p>Entre em contato conosco para dúvidas, sugestões ou suporte.</p>
            <ul className={styles.contactList}>
                <li>Email: eshop@contato.com</li>
                <li>Telefone: (11) 1234-5678</li>
                <li>Endereço: Rua Exemplo, 123 - São Paulo/SP</li>
              </ul>
        </div>
    )
}

export default Contact;