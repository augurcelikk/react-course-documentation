import styles from "../assets/styles/Logo.module.css"; //prevent name collisions

const Logo = () => {
    return (
        <a href="#" className={styles.Logo}>
            Java-11 Frontend - <strong>React</strong>
        </a>
    )
}



export { Logo };


