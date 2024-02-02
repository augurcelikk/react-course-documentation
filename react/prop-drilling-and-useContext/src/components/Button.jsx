import { Icon } from "./Icon"

export function Button({theme}) {
    return (
        <button type="button">Ben düğme!
            <Icon  theme={theme}/>
        </button>
    )
}