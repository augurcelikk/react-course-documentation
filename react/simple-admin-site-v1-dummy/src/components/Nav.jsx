import { Link } from "react-router-dom"

export function Nav() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/admin">
                        Anasayfa
                    </Link>
                </li>
                <li>
                    <Link to="/admin/ürünler">
                        Ürünler
                    </Link>
                </li>
            </ul>
        </nav>
    )

}