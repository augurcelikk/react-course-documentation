import { Link } from "./Link"

export function Nav({onCurrentPathChange}) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/01" smashTheLink={onCurrentPathChange}>
                        Bir komponentin hafızası
                    </Link>
                </li>
                <li>
                    <Link to="/02" smashTheLink={onCurrentPathChange}>
                        State içerisindeki diziler
                    </Link>
                </li>
                <li>
                    <Link to="/03" smashTheLink={onCurrentPathChange}>
                        State içerisindeki objeler
                    </Link>
                </li>
            </ul>
        </nav>
    )
}




function BaseButton({ onSmash }) {

    function handleClick() {
        onSmash();
    }
    return (
        <button onClick={handleClick}></button>
    )

}


function Button() {
    return (
        <BaseButton onSmash={() => { alert("I am the higher button") }}></BaseButton>
    )
}
