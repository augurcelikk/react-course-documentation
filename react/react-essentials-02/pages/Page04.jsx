export function Page04() {
    console.log("Ben page04 komponenti, render ediliyorum");


    return (
        <section>
            <h2>Etkileşim - Interactivity</h2>

            <MyButton />
            <MyButton2 />
            <MyButton3 />
            <MyButton4 />
            <MyButton5 > we r the children, we r the world... </MyButton5>


            <Toolbar />

            <PlayButton movieName="The Shining" />
            <UploadButton />

            <MyTestComponent onTestAction={() => { alert('I am testing') }} />
        </section>
    )
}

function MyButton() {
    console.log("Ben page04 componentindeki MyButton  komponenti, render ediliyorum");


    function handleClick(e) {

        alert("Merhaba Dünya!")
    }


    return (
        <button type="button" onClick={handleClick}>Me the button of this project!!!</button>
    )
}

function MyButton2() {
    return (
        <button type="button" onClick={(e) => { alert("Ben MyButton2 Komponenti") }}>Me the button2 of this project!!!</button>
    )
}

function MyButton3() {
    return (
        <button type="button" onClick={function (e) { alert("Ben MyButton3 Komponenti") }}>Me the button3 of this project!!!</button>
    )
}

function MyButton4() {

    const handleClick = (e) => { alert("Ben MyButton4 Komponenti") };

    return (
        <button type="button" onClick={handleClick}>Me the button4 of this project!!!</button>
    )
}


//<MyButton5 > we r the children, we r the world... </MyButton5>  ->   props ->   { children:" we r the children, we r the world... " }

//<MyButton5 > <span>****</span> we r the children, we r the world... </MyButton5>  ->   props ->   { children:<> <span>****</span> we r the children, we r the world...</> }

function MyButton5(props) {

    function handleClick(e) {

        alert("hello");

    }
    return (
        <button type="button" onClick={handleClick}>{props.children}</button>
    )
}


/*  ***** Reading props in event handler functions ***** */
function AlertButton({ message, children }) {
    //console.log(  typeof children, children, message, "*****");
    return (
        <button type="button" onClick={() => { alert(message) }}  >{children}</button>
    )
}


function AlertButton2({ message, children }) {
    //console.log(  typeof children, children, message, "*****");
    function handleClick() {
        alert(message);
    }
    return (
        <button type="button" onClick={handleClick}  >{children}</button>
    )
}




function Toolbar() {
    const toolbarStyles = { backgroundColor: "pink", padding: "24px" };
    return (
        <div style={toolbarStyles}>
            <AlertButton message="Video Oynatılıyor!">
                Videoyu Başlat
            </AlertButton>
            <AlertButton message="Görsel yükleniyor!">
                Görsel Yükle
            </AlertButton>
        </div>
    )
}

/*  ***** Passing event handler functions as props  ***** */

//<BaseButton> Hello </BaseButton>
function BaseButton({ smashTheButtonFunc, children }) {

    return (
        <button type="button" onClick={smashTheButtonFunc}>{children}</button>
    )

}

//  <PlayButton movieName="The Shining" />
function PlayButton({ movieName }) {

    function handlePlayClick() {
        alert(`${movieName} oynatılıyor`);
    }
    return (
        <BaseButton smashTheButtonFunc={handlePlayClick}>
            {movieName} oynat.
        </BaseButton>
    )

}

//  <UploadButton  />
function UploadButton() {
    function handleClick() {
        alert("Görsel yükleniyor");
    }
    return (
        <BaseButton smashTheButtonFunc={handleClick} >
            Görsel <strong>Yükle</strong>
        </BaseButton>
    )
}



/* ***** Naming Event Handler Props ***** */
// <BaseButton2 onSmash={ ()=>{ alert("testing")} } > Hello </BaseButton2>
function BaseButton2({ onSmash, children }) {

    return (
        <button type="button" onClick={onSmash}>{children}</button>
    )
}


function MyApp() {



    return <div>
        <BaseButton2 onSmash={() => { alert("film duraklatıldı") }} > Filmi duraklat </BaseButton2>
        <BaseButton2 onSmash={() => { alert("film hızlı ileri alındı") }} > Filmi hızlı ileri al </BaseButton2>
    </div>
}


//  <MyTestComponent onTestAction={  ()=>{alert('I am testing')} } />
function MyTestComponent({ onTestAction }) {

    return (
        <div style={{ backgroundColor: "red", padding: "24px" }} onClick={onTestAction}>Ben test komponentiyim</div>
    )
}


