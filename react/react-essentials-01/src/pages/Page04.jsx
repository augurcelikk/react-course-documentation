export function Page04() {
    return (
        <section>
            <h1>Koşullu render etmek - Conditionalrendering</h1>

            {/* <MyTestComponent/> */}

            <PackingListComp1 />
        </section>
    )
}




function MyTestComponent() {
    return <h1>Hello</h1>;
}



function PackingListComp1() {
    return (
        <>
            <h2>Yaz tatili için yanımıza alacaklarımız</h2>
            <ul>
                <PackingItemComp1 content="Şapka" isPacked={true} />
                <PackingItemComp1 content="Havlu" isPacked={true} />
                <PackingItemComp1 content="Güneş gözlüğü" isPacked={false} />
                <PackingItemComp1 content="Kitap" isPacked={true} />

            </ul>


            <h2>Kış tatili için yanımıza alacaklarımız</h2>
            <ul>
                <PackingItemComp3 content="Mont" isPacked={true} />
                <PackingItemComp3 content="Kitap" isPacked={false} />
                <PackingItemComp3 content="Kazak" isPacked={false} />
            </ul>


            <h2>Liste 3</h2>
            <ul>
                <PackingItemComp7 content="Mont" isPacked={true} />
                <PackingItemComp7 content="Kitap" isPacked={false} />
                <PackingItemComp7 content="Kazak" isPacked={false} />
            </ul>
        </>

    )
}


function PackingItemComp1({ content, isPacked }) {

    if (isPacked) {

        return (
            <li>{content} "alındı"</li>
        )
    }

    return (
        <li>{content} "henüz tedarik edilemedi"</li>
    )
}



function PackingItemComp2({ content, isPacked }) {

    if (isPacked) {

        return (
            <li>{content} <input type="checkbox" checked /></li>
        )
    }

    return (
        <li>{content} <input type="checkbox" checked={false} /></li>
    )
}



// *** conditionally returning null 
function PackingItemComp3({ content, isPacked }) {

    if (isPacked) {
        return null;
    }

    return (
        <li>{content}</li>
    )

}

// *** using ternary operator
function PackingItemComp4({ content, isPacked }) {

    const jsxEl = isPacked ? <li>{content} - alındı</li> : <li>{content} - alınmadı</li>;

    return jsxEl;


}


// *** using ternary operator
function PackingItemComp5({ content, isPacked }) {


    return isPacked ? <li>{content} - alındı</li> : <li>{content} - alınmadı</li>;


}


// *** using ternary operator
function PackingItemComp6({ content, isPacked }) {


    return <li> {content} {isPacked ? "alındı" : "alınmadı"} </li>;


}




// using logical and &&
function PackingItemComp7({ content, isPacked }) {


    return <li> {content} {isPacked && " - alındı -"} </li>;


}
