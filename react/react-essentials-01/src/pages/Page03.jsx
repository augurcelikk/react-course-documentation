export function Page03() {
    return (
        <section>
            <h1>bir komponente özellik - prop geçirmek</h1>

            <p>Komponentlerin üzerine yazdığınız, property-value çiftleri veya props, tek bir obje içinde toplanıp component fonksiyonuna argüman olarak gönderilir.</p>

            {/* MyComponent1({deneme:1, testing:"d"}) */}
            <MyComponent1 deneme="1" testing="d" content="asdf" />
            <MyComponent1 content="Hi there!" />
            <MyComponent1 content="Hello" title="Testing" />

            {/* MyFancyButton({}) */}
            <MyFancyButton />

            {/* MyFancyButton({content:"Hello there!"}) */}
            <MyFancyButton content="Hello there!" />


            {/* MyFancyButton({content:"Hello there2!", color:"aqua"}) */}
            <MyFancyButton content="Hello there2!" color="aqua" />

            <MyCard title="Product 1" content="lore lorem" color="red" />
            <MyCard title="Product 2" content="ipsum lore lorem" color="red" />
            <MyCard title="Product 3" content="Dolores lore lorem" color="red" />

            <MyCard2 title="Product X" content="lore lorem" color="red" />
            <MyCard2 title="Product Y" content="lore lorem" color="red" />
            <MyCard2 title="Product Z" content="lore lorem" color="red" />

            <h2>children prop</h2>

            <p>Komponentinizi iki parçalı kullanır ve çocuk öğelerle yazarsanız, komponent fonksiyonunuz çağrılırken gönderilen props objesinin içinde children key'ini ve değerini bulabilirsiniz.</p>

            <MyList title="products" >
                {/* Deneme <p>deneme</p>  */}
                <MyListItem content="Item 1" />
                <MyListItem content="Item 2" />
                <MyListItem content="Item 3" />
                <MyListItem content="Item 4" />
            </MyList>

            <ModalBox title="Merhaba Modal">
                <p>lorem lorem lorem</p>

                <h3>Einstein</h3>

                <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg" />
            </ModalBox>


            <h2>Forwarding props</h2>

            <p>Bir komponent hiyerarşisinde prop'ların daha derindeki komponentler geçirilmesi</p>


            <Toolbar size="sm" theme="light" mediaId={12} mediaList={[]} isExpandable={true} />
            <Toolbar3 size="sm" theme="light" mediaId={12} mediaList={[]} isExpandable={true} />



        </section>
    )
}


function MyComponent1(proplardanOluşanBirObje) {
    console.log(proplardanOluşanBirObje);

    const content = proplardanOluşanBirObje.content;
    return <p>{content}</p>
}

//{deneme:1, testing:"d"}


function MyFancyButton(proplardanOluşanBirObje) {

    //proplardanOluşanBirObje -> {content:"Hello you, the button..."}
    return <button type="button">{proplardanOluşanBirObje.content}</button>
}



function MyCard(props) {
    const color = props.color;
    const title = props.title;
    const content = props.content;


    const cardStyles = {
        border: "1px solid black",
        color,
    }

    return (
        <div style={cardStyles}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}


function MyCard2(props) {

    return (
        <div style={{ color: props.color, border: "1px solid blue" }}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}


function MyCard3(props) {
    const { title, content, color } = props;

    return (
        <div style={{ color, border: "1px solid blue" }}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

//bkz- destructuring in function parameters
function MyCard4({ title, content, color }) {

    return (
        <div style={{ color, border: "1px solid blue" }}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}


//bir navigasyon komponenti yazınız. Komponentimiz size, color, mediaUrlList, propları alıp kullanabilsin. 


// <MyNav  size={ {width:300, height:400} } color="red" mediaUrlList={ ["/01.mpeg", "/02.mpeg"]  }    />

const MyNav = (props) => {

    const size = props.size;
    const color = props.color;
    const mediaUrlList = props.mediaUrlList;


    return (
        <nav style={{ color, width: size.width, height: size.height }}   >
            {mediaUrlList}
        </nav>
    )

}

// <MyNav2  size={ {width:300, height:400} } color="red" mediaUrlList={ ["/01.mpeg", "/02.mpeg"]  }    />

const MyNav2 = (props) => {
    return (
        <nav style={{ color: props.color, width: props.size.width, height: props.size.height }}>
            {props.mediaUrlList}
        </nav>
    )
}

// <MyNav3  size={ {width:300, height:400} }  mediaUrlList={ ["/01.mpeg", "/02.mpeg"]  }    />

const MyNav3 = (props) => {
    const { size = { width: 200, height: 300 }, color = "red", mediaUrlList } = props;

    const navStyles = {
        color,
        width: size.width,
        height: size.height,
    }

    return (
        <nav style={navStyles}>
            {mediaUrlList}
        </nav>
    )
}

// <MyNav4   mediaUrlList={ ["/01.mpeg", "/02.mpeg"]  }    />
const MyNav4 = ({ size = { width: 200, height: 100 }, color = "red", mediaUrlList }) => {
    return (
        <nav style={{ color, width: size.width, height: size.height }}>
            {mediaUrlList}
        </nav>
    )
}




/* **** CHILDREN PROP !!!! **** */
function MyList(props) {
    console.log(props, "**********"); //{ title:"products" }
    const children = props.children;
    return (
        <ul>
            {children}
        </ul>
    )
}

function MyListItem({ content = "Liste öğesiyim ben." }) {

    return (
        <li>{content}</li>
    )
}


/* <ModalBox title="Merhaba modal" content="Merhaba dünya"/> */

function ModalBox(props) {
    return (
        <div className="modal">
            <h2>{props.title}</h2>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}




function ModalBox2({ title, children }) {
    return (
        <div className="modal">
            <h2>{title}</h2>
            <div className="content">
                {children}
            </div>
        </div>
    )
}



/* *** Forwarding Props  !!!!!!!! *** */


//  <Toolbar size="sm" theme="light" mediaId={12} mediaList={[]} isExpandable={true}/>
function Toolbar({ size, theme, mediaId, mediaList, isExpandable }) {
    return (
        <div style={{ border: "4px solid red" }}>
            I am the toolbar
            <VideoPlayer size={size} theme={theme} mediaId={mediaId} mediaList={mediaList} isExpandable={isExpandable} />
        </div>
    )
}


function Toolbar2(props) {

    return (
        <div style={{ border: "4px solid red" }}>
            I am the toolbar
            <VideoPlayer size={props.size} theme={props.theme} mediaId={props.mediaId} mediaList={props.mediaList} isExpandable={props.isExpandable} />
        </div>
    )
}

// ***  passing all props via spread operator ***
function Toolbar3(props) {
    
    return (
        <div style={{ border: "4px solid red" }}>
            I am the toolbar
            <VideoPlayer  {...props} />
        </div>
    )
}



function VideoPlayer({ size, theme, mediaId, mediaList, isExpandable }) {

    console.log(size, theme, mediaId, mediaList, isExpandable);

    return (
        <div style={{ border: "1px solid blue" }}>
            I am the video player
        </div>
    )
}





