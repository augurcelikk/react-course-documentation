import { useState } from "react";
import styles from "../assets/styles/ProductSlider.module.css";

import { DATA_PRODUCTS } from "../data";


export function ProductSlider() {
    const [index, setIndex] = useState(0);
    const [showDetail, setShowDetail] = useState(false);
    // const [isLastSlide, setIsLastSlide ] = useState(false); DO NOT!!!

    const isFirstSlide = index === 0;
    const isLastSlide = index === DATA_PRODUCTS.length - 1;
    //DATA_PRODUCTS[0]

    function handlePrev() {
        if (!isFirstSlide) {
            setIndex(index - 1);
        }
    }

    function handleNext() {
        if (isLastSlide) return;
        setIndex(index + 1); // rerender
    }

    function handleShowDetail() {
        /*
        if (showDetail == false) {
            setShowDetail(true);
        } else {
            setShowDetail(false);
        }*/
        setShowDetail(!showDetail);
    }

    return (
        <div className={styles.ProductSlider}>
            <h2>Ürünlerimiz</h2>
            <button onClick={handlePrev} disabled={isFirstSlide} >Önceki</button>
            <button onClick={handleNext} disabled={isLastSlide ? true : false} >Sonraki</button>
            <div>
                <figure>
                    <img src={DATA_PRODUCTS[index].previewImg} alt={DATA_PRODUCTS[index].title} />
                    <figcaption></figcaption>
                </figure>
                <h3>{DATA_PRODUCTS[index].title}</h3>
                <p> {showDetail ? DATA_PRODUCTS[index].description : DATA_PRODUCTS[index].excerpt}</p>
                <button type="button" onClick={handleShowDetail}>{showDetail ? "Detay sakla" : "Detay göster"}</button>
            </div>
        </div>
    )
}



export function ProductSliderV2() {
    const [index, setIndex] = useState(0);

    //DATA_PRODUCTS[0]

    return (
        <div className={styles.ProductSlider}>
            <h2>Ürünlerimiz</h2>
            <button>Önceki</button>
            <button onClick={() => { setIndex(index + 1) }}  >Sonraki</button>
            <div>
                <figure>
                    <img src={DATA_PRODUCTS[index].previewImg} alt={DATA_PRODUCTS[index].title} />
                    <figcaption></figcaption>
                </figure>
                <h3>{DATA_PRODUCTS[index].title}</h3>
                <p>{DATA_PRODUCTS[index].excerpt}</p>
            </div>
        </div>
    )
}