export function Link(props) {
    //props.smashTheLink()

    function handleClick(e) {
        e.preventDefault();
        props.smashTheLink(props.to);
    }
    return (
        <a href={props.to} onClick={handleClick} >
            {props.children}
        </a>
    )
}


/* { to:"01", children:""}
export function Link({ to, children  }){
    return(
    <a href={to}>
        {children}
      </a>
    )
}
*/


/* { to:"01", children:""}
export function Link(props){
    const { to, children } = props;
    return(
    <a href={to}>
        {children}
      </a>
    )
}
*/