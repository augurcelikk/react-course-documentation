import { useState } from "react"; //your first react hook 
import styles from "../assets/styles/Buttons.module.css"



const BasicButton = () => {
    //console.log("Ben basic button render ediliyorum");
    let counter = 0;
    function handleClick() {
        counter++;
        //console.log(counter);
        BasicButton();
    }

    return (
        <button className={styles.Button} type="button" onClick={handleClick}>{counter} counter çalışmıyor, bu komponent kodunu inceleyiniz...</button>
    )
}


const Button = () => {
    //console.log("Ben Button render ediliyorum");
    const [counter, setCounter] = useState(0); // usetate returns an array composing of a dynamic value and a setter function [ willBeChangedValue, setterFunction ]
    //console.log(counter);
    // Örnek [ userName, setUserName ] = useState("");


    const handleClick = () => {
        setCounter(counter + 1);
    }


    return (
        <button className={styles.Button} type="button" onClick={handleClick}>{counter}</button>
    )

}





export { BasicButton, Button }