export function Page05() {
    console.log("Ben page04 komponenti, render ediliyorum");


    return (
        <section>
            <h2>Event Propagation</h2>

            <Toolbar />
            <Stage />
        </section>
    )
}



function Toolbar() {


    return (
        <div className="Toolbar" onClick={() => { alert("This is Toolbar speaking!!!") }}>
            <button onClick={(e) => { e.stopPropagation(); alert("Now Playing") }}>Play</button>
            <button onClick={(e) => { e.stopPropagation(); alert("Now uploading") }}>Upload</button>
        </div>
    )
}


function Toolbar2() {
    return (
        <div className="Toolbar" onClick={() => { alert("This is Toolbar speaking!!!") }}>

            <Button onOutsideClick={() => { alert("Movie has been started...") }} >Start Movie</Button>
            <Button onOutsideClick={() => { alert("Movie has been paused...") }} >Pause Movie</Button>
        </div>
    )
}


function Button({ onOutsideClick, children }) {

    function handleClick(e) {
        e.stopPropagation();
        onOutsideClick();
    }

    return (
        <button type="button" onCLick={handleClick}>{children}</button>
    )

}


function Stage() {

    function handleMouseCursorMove(e) {
        const x = e.clientX;
        const y = e.clientY;
        console.log("Mouse cursor moves", x, y);

    }
    return (
        <div className="Stage" onMouseMove={handleMouseCursorMove}>

        </div>
    )
}


