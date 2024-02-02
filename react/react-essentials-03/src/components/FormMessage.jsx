import { useState } from "react";

export function FormMessage() {
    const [message, setMessage] = useState("");
    const [isMessageSent, setIsMessageSent] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(message, "***");
        setIsMessageSent(true);
        sendMessageToServer(message);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value); //rerender
    }

    if (isMessageSent) {
        return <p>Mesajınız gönderildi...</p>
    }

    return (
        <>
            <h2>Mesaj Formu</h2>

            <form onSubmit={handleSubmit}>
                <textarea value={message} placeholder="Mesajınız..." onChange={handleMessageChange}></textarea>

                <button type="submit">Gönder</button>
            </form>

            <Button />

            <br />
            <Button2 />
            <br />
            <Button3 />
        </>
    )
}



function sendMessageToServer(message) {
    /*  statements */
}



function Button() {
    const [counter, setCounter] = useState(0);
    console.log("-----")

    function handleIncrement() {
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
    }

    return (
        <button onClick={handleIncrement}>{counter}</button>
    )
}


function Button2() {
    const [counter, setCounter] = useState(0);
    console.log("-----")

    function handleIncrement() {
        setCounter(counter + 10);
        alert(counter);
    }

    return (
        <button onClick={handleIncrement}>{counter} button2 +10</button>
    )


}


function Button3() {
    const [counter, setCounter] = useState(0);
    console.log("-----")

    function handleIncrement() {
        setCounter(counter + 30);
        setTimeout(() => { alert(counter) }, 4000)
    }

    return (
        <button onClick={handleIncrement}>{counter} button3 +10</button>
    )


}

