import { DATA_PRODUCT_NAMES, DATA_PRODUCTS } from "../src/data";

const theThings = [
    "Kalem",
    "Kağıt",
    "Elma",
    "Böcek",
    "Çiçek",
    "Kaya",
    "Bardak",
];

const myLuckyNum = 3;

const myArray = [
    "Mouse",
    "Ajanda",
    "Kağıt mendil",
    3,
    true,
    [1, 2, 3],
    <p key="0">Ben bir p</p>,
];

const myJsxList = [
    <li key="0">item1</li>,
    <li key="1">item2</li>,
    <li key="2">item3</li>,
    <li key="3">item4</li>,
    <li key="4">item5</li>,
];

const myJsxList2 = [
    <p key="0">Hello</p>,
    <h1 key="1">The Main Title</h1>,
    <h4 key="2">The Main Title</h4>,
    <h6 key="3">The Main Title</h6>,
    <span key="4">The Main Title</span>,
];

export function Page01() {
    return (
        <section>
            <h2>Liste render etmek</h2>
            <p>
                js array'leri react tarafından sorunsuz bir şekilde render edilebilir.
                Array'ler içerisindeki jsx elemanlarının key prop'larının olması ve
                unique bir değerlerin olması gerekir.
            </p>
            <ul>
                <li>Laptop</li>
                <li>Şapka</li>
                <li>Bardak</li>
                <li>Kalemlik</li>
                <li>Mouse</li>
                <li>Kalem</li>
            </ul>
            {myLuckyNum} <br />
            {theThings} <br />
            {myArray}
            <ul>{myJsxList}</ul>
            <ul>{myJsxList2}</ul>
            <ProductList />
            <ProductList2 />
            <ProductList3 />
            <ProductList4 />
            <CardList />
            <CardList2 />
            <CardList3 />


            <FilteredProductList />
        </section>
    );
}

/*
 [
  "Hp laptop fire",
  "Lenovo desktop - xq",
  "Mac studio Max",
  "Mac studio Ultra",
  "Lg monitor Ultra",
  "Lg monitor fs2",
  "Lg monitor Ultra-Blue",
];

-> convert to without mutation
 [
  <li>Hp laptop fire</li>,
  <li>Lenovo desktop - xq</li>,
  <li>Mac studio Max/li>,
   <li>Mac studio Ultra </li>,
...
];

*/

function ProductList() {
    // copy of DATA_PRODUCT_NAMES
    /* via slice method ---
      const copy = DATA_PRODUCT_NAMES.slice();
      */
    /* via spread operator --- */
    /*
      const copiedDataProducts = [...DATA_PRODUCT_NAMES];
      */

    const productsJsxList = DATA_PRODUCT_NAMES.map((productName, index, arr) => {
        return <li>{productName}</li>;
    });

    return (
        <>
            <h2>Ürün listesi 1. yol</h2>
            <ul>{productsJsxList}</ul>
        </>
    );
}

function ProductList2() {
    const copiedDataProducts = [...DATA_PRODUCT_NAMES];

    copiedDataProducts.forEach((productName, index) => {
        copiedDataProducts[index] = <li>{productName}</li>;
    });

    return (
        <>
            <h2>Ürün listesi 2. yol</h2>
            <ul>{copiedDataProducts}</ul>
        </>
    );
}

function ProductList3() {
    const productsJsxList = [];

    DATA_PRODUCT_NAMES.forEach((productName) => {
        productsJsxList.push(<li>{productName}</li>);
    });

    return (
        <>
            <h2>Ürün Listesi 3.yol</h2>
            <ul>{productsJsxList}</ul>
        </>
    );
}

function ProductList4() {
    return (
        <>
            <h2>Ürün listesi 4.yol</h2>
            <ul>
                {DATA_PRODUCT_NAMES.map((productName, index, arr) => {
                    return <li>{productName}</li>;
                })}
            </ul>
        </>
    );
}

function CardList() {
    return (
        <>
            <h2>Bilgisayar ürünlerimiz</h2>
            <ul>
                {DATA_PRODUCTS.map((productObj) => {
                    return (
                        <li>
                            <h2>{productObj.title}</h2>
                            <p>
                                <strong>Fiyatı:</strong>
                                {productObj.price}
                            </p>
                            <p>{productObj.description}</p>
                            <p>Stok adedi:{productObj.count}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

function CardList2() {
    return (
        <>
            <h2>Bilgisayar ürünlerimiz</h2>
            <ul>
                {DATA_PRODUCTS.map((productObj) => {
                    const { title, price, description, count } = productObj;
                    return (
                        <li>
                            <h2>{title}</h2>
                            <p>
                                <strong>Fiyatı:</strong>
                                {price}
                            </p>
                            <p>{description}</p>
                            <p>Stok adedi:{count}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

function CardList3() {
    function createProductJsx(productObj) {
        const { title, price, description, count } = productObj;
        return (
            <li>
                <h2>{title}</h2>
                <p>
                    <strong>Fiyatı:</strong>
                    {price}
                </p>
                <p>{description}</p>
                <p>Stok adedi:{count}</p>
            </li>
        );
    }
    return (
        <>
            <h2>Bilgisayar ürünlerimiz</h2>
            <ul>{DATA_PRODUCTS.map(createProductJsx)}</ul>
        </>
    );
}


/* ***** CardList4 ***** */

function CardList4() {
    return (
        <>
            <ul>Ürün item komponenti kullanan ürün listesi</ul>

            {
                DATA_PRODUCTS.map((productObj) => {
                    const { title, price, description, count } = productObj;
                    return <ProductItem title={title} price={price} description={description} count={count} />

                })
            }
        </>
    )
}


/* ***** CardList5 ***** */
//passing props via spread syntax. Data Obje keyleri ve componentin beklediği prop isimleri aynı olduğunda propları spread poperator ile gönderebilirsiniz...
function CardList5() {
    return (
        <>
            <ul>Ürün item komponenti kullanan ürün listesi</ul>

            {
                DATA_PRODUCTS.map((productObj) => {

                    return <ProductItem {...productObj} />

                })
            }
        </>
    )
}



// <ProductItem  title="Laptop" price="12000" description="lorem lorem" count="3" />

function ProductItem({ title, price, description, count }) {

    return (
        <li>
            <h2>{title}</h2>
            <p>
                <strong>Fiyatı:</strong>
                {price}
            </p>
            <p>{description}</p>
            <p>Stok adedi:{count}</p>
        </li>
    )
}


function FilteredProductList() {
    // [  <ProductItem title="Polo T-shirt" /> , <ProductItem title="Mavi Jeans Pantolon" /> ]
    const filteredProductsList = DATA_PRODUCTS.filter((product) => product.category == "textile");

    const filteredProductJsxList = filteredProductsList.map((product) => <ProductItem {...product} />)

    return (

        <>
            <h2>Tekstil Kategorisindeki Ürünler</h2>

            {filteredProductJsxList}
        </>

    )
}


function FilteredProductList2() {
    // [  <ProductItem title="Polo T-shirt" /> , <ProductItem title="Mavi Jeans Pantolon" /> ]
    /* chainig filter and map */
    const filteredProductJsxList = DATA_PRODUCTS
        .filter((product) => product.category == "textile")
        .map((product) => <ProductItem {...product} />);



    return (

        <>
            <h2>Tekstil Kategorisindeki Ürünler</h2>

            {filteredProductJsxList}
        </>

    )
}


function FilteredProductList3() {


    return (

        <>
            <h2>Tekstil Kategorisindeki Ürünler</h2>

            {
                DATA_PRODUCTS
                    .filter((product) => product.category == "textile")
                    .map((product) => <ProductItem {...product} />)

            }
        </>

    )
}