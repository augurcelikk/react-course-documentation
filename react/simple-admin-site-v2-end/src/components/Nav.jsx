import { NavLink } from "react-router-dom"
import styles from "./Nav.module.css";
export function Nav() {

    return (
        <nav className={styles.Nav}>
            <ul>
                <li>
                    <NavLink to="/" >
                        Anasayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/ürünler">
                        Ürünler
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}