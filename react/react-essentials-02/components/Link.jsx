export function Link(props) {
    console.log(props);
    return (
        <a href={props.to}>{props.children}</a>
    )
}