import { Link } from "./Link"

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/01">
                        Liste render etmek
                    </Link>
                </li>
                <li>
                    <Link to="/02">
                        Listelerdeki jsx elemanlarına unique key prop'ları eklemek
                    </Link>
                </li>
                <li>
                    <Link to="/03">
                        Komponentlerin pür-saf olması
                    </Link>
                </li>
                <li>
                    <Link to="/04">
                        Interaktivite
                    </Link>
                </li>
                <li>
                    <Link to="/05">
                        Interaktivite - Event propagation
                    </Link>
                </li>
            </ul>
        </nav>
    )
}



