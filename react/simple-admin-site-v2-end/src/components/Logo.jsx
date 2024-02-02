import styles from "./Logo.module.css"
import { IconBolt } from "./Icons"
import { Link } from "react-router-dom"
export function Logo() {
    return (
        <Link className={styles.Logo} to="/">
            <IconBolt /> Java-11 Admin Site</Link>
    )
}