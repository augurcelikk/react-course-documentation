/*  <Link to="/01" content="jsx ile işaretleme yapmak"/> */


/*  <Link to="/01">jsx ile işaretleme yapmak</Link> */

/*
export function Link(props){
    return (
        <a href={props.to}>{props.children}</a>
    )
}
*/

export function Link({ to = "#", children }) {
    return (
        <a href={to}>{children}</a>
    )
}