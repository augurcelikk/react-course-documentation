import { Link } from "react-router-dom";

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"> Ana sayfa </Link>
                </li>
                <li>
                    <Link to="/02"> Sayfa 2 </Link>
                </li>
                <li>
                    <Link to="/03"> Sayfa 3 </Link>
                </li>
            </ul>
        </nav>
    )
}