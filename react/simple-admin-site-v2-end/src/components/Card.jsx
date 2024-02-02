import styles from './Card.module.css'

export function Card({ title }) {
    return (
        <li className={styles.Card}>
            {title}
        </li>
    )
}

export function CardList({ children }) {
    return (
        <ul className={styles.CardList}>
            {children}
        </ul>
    )
}