export function Page02() {

    3 + 5;

    function testing() {
        return "You are testing smt!";
    }

    return (
        <section>
            <h1>Jsx içerisinde js expression'ları kullanmak</h1>

            <p>jsx içerisinde curly brace içerisine js expression'ları yazabilirsiniz.</p>

            {/* Bu bir js yorum satırıdır */}


            {3 + 5}

            {testing()}


            <Avatar />

            <MyList />

            <MyVideoPlayer />

            <Card />


            <MyButton />


            <Circle />
        </section>
    )
}




function Avatar() {

    const imgInfoArr = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",

        "Einstein",

        "avatar"

    ];


    return <img src={imgInfoArr[0]} alt={imgInfoArr[1]} className={imgInfoArr[2]} />
}




function MyList() {
    const myListInfo = {
        listClass: "basic-list",
        listItemContent: "Item",
    }


    return (
        <ul className={myListInfo.listClass} >
            <li> {myListInfo.listItemContent}  </li>
            <li> {myListInfo.listItemContent}  </li>
            <li> {myListInfo.listItemContent}  </li>
            <li> {myListInfo.listItemContent}  </li>
            <li> {myListInfo.listItemContent}  </li>
        </ul>
    )
}



function MyVideoPlayer() {
    const videoPlayerInfo = {
        videos: ["01.mpeg", "rose.mpeg", "mountain..mpeg"],
        status: "stopped",
        sizes: { mobile: ["sm", "md"] },
    }

    const videoClassName = "video-" + videoPlayerInfo.sizes.mobile[0];

    return (
        <div className={videoClassName}>
            video status: {videoPlayerInfo.status}
        </div>
    )
}


function Card() {

    const cardInfo = {
        cardSize: "sm",
        content: "Ben card arayüz elemanıyım"
    }

    // string template literal `card-${ jsexpression }`
    // ternar operator    cardInfo.cardSize === "sm" ? "minimal" : ""

    const jsxEl = (
        <div className={`card-${cardInfo.cardSize === "sm" ? "minimal" : ""}`} >
            {cardInfo.content}
        </div>
    )

    return jsxEl;

}





function MyButton() {

    const buttonStylesObj = { backgroundColor: "red", color: "white" };

    return <button type="button" style={buttonStylesObj}>I am a button</button>
}



const Icon = () => <div style={{ border: "2px solid red", backgroundColor: "yellow", padding: "24px" }}> I am an icon  </div>;

const Icon1 = () => {
    const iconStyleObj = { border: "2px solid red", backgroundColor: "yellow", padding: "24px" };

    return (
        <div style={iconStyleObj}>
            I am an icon
        </div>
    )
}

function Icon2() {
    const iconStyleObj = { border: "2px solid red", backgroundColor: "yellow", padding: "24px" };

    return (
        <div style={iconStyleObj}>
            I am an icon
        </div>
    )

}


// çember çevresi hesaplayan bir fonksiyonumuz olsun
function circlePerimeter(r) {

    const Pi = 3.1415;
    return 2 * Pi * r;

}

// çember adında bir  komponent olacak
function Circle() {
    const r = 12;

    const perimeter = circlePerimeter(r);

    return (
        <div>
            Çemberin çevresi: {perimeter}
        </div>
    )
}

function Circle2() {

    return (
        <div>
            Çemberin çevresi: {circlePerimeter(12)}
        </div>
    )
}


const Circle3 = () => <div> Çemberin çevresi: {circlePerimeter(12)}</div>;


// çember komponenti çember çevresi hesaplayan fonksiyonu kullanarak kendi çevresini yazdıracak








