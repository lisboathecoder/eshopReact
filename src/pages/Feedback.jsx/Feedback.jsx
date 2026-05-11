import styles from "./Extra.module.css"
import { useState, useEffect } from "react";



export default function Feedback() {
    const [feedbacks, setFeedbacks] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        let isMounted = true
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {
                if (isMounted) {
                    setFeedbacks(data)
                    setCarregando(false)
                }
            })

        return () => {
            isMounted = false
        }
    }, [])

    return(
        <div className={styles.feedback}>
            <h1>Feedback dos Clientes</h1>
            {carregando ? (
                <p>Carregando feedbacks...</p>
            ) : (
                <ul className={styles.feedbackList}>
                    {feedbacks.map(feedback => (
                        <li key={feedback.id} className={styles.feedbackItem}>
                            <h2>{feedback.name}</h2>
                            <p>{feedback.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}