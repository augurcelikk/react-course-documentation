
import { getProducts } from "../api";
import { useState, useEffect } from "react";

export function Products() {
    const [productsData, setProductsData] = useState(null);


    useEffect(

        () => {


            getProducts()
                .then((data) => {

                    setProductsData(data); //rerender

                })
                .catch((err) => { console.log(err) });



        },

        [] //dependency array ( calback function'ın hangi koşullarda renderdan sonra çağrılacağını belirler  )
        //dependency array boş geçilirse callback,sadece ilk renderdan sonra çağrılır

    );




    return (
        <section>
            <h1>Ürünler</h1>
            <ul>
                {
                    productsData && productsData.map((p) => <li key={p.id}>{p.title}</li>)
                }
            </ul>

            <TestingComp />
        </section>
    )
}




function TestingComp() {
    const [counter, setCounter] = useState(0);
    const [size, setSize] = useState("lg");


    //console.log("Test komponentimiz render aşamasında 1...");

    //1.argüman renderdan sonra çağrılacak callback function
    //2. argüman dependency array. callbackin hangi durumda çağrılacağı
    //2. argüman hiç verilmezse, callback her renderdan sonra çağrılır
    //2. argüman boş bir array olarak verilirse, sadece initial renderdan sonra çağrılır...
    //2.argüman olarak [size] verilirse size değeri değiştiğinde çağrılır
    useEffect(() => {
        console.log("useEffect calback'i çağrıldı... *************")
    }, [size]);


    //console.log("Test komponentimiz render aşamasında 2...")


    return (
        <>
            <h1>Ben useEffect test komponentiyim</h1>
            <p>sayaç değeri:{counter}</p>

            <button onClick={() => { setCounter(counter + 1) }}>sayaç değerini değiştir ve render tetikle</button>
            <button onClick={() => { setSize(size === "lg" ? "sm" : "lg") }}>size değerini değiştir ve render tetikle {size}</button>
        </>
    )

}



/*
const[productId,i setProductId] = useState(0);
useEffect(() => {
    getProduct(productId);
}, [productId]);

*/
