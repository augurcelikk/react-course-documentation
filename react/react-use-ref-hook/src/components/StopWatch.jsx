import { useState, useRef } from "react";

export function StopWatch() {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    const intervalId = useRef(null)

    function handleStart() {

        setStartTime(Date.now());
        setNow(Date.now());


        intervalId.current = setInterval(() => {
            setNow(Date.now()); //10 milisaniyede bir rerender talep eder.
        }, 10)
    }

    function handleStop() {
        console.log(intervalId.current, "********");
        clearInterval(intervalId.current);
    }

    return (
        <div>
            <h2>Kronometre</h2>

            <p>{now - startTime}</p>

            <button onClick={handleStart}>başlat</button>
            <button onClick={handleStop}>durdur</button>
        </div>
    )
}

/* useRef kullanmadığımızda neden kronometreyi sıfırlamıyoruz?
export function StopWatch() {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    let intervalId;

    function handleStart() {

        setStartTime(Date.now());
        setNow(Date.now());


        intervalId = setInterval(() => {
            setNow(Date.now()); //10 milisaniyede bir rerender talep eder.
        }, 10)
    }

    function handleStop() {
        console.log(intervalId, "********");
        clearInterval(intervalId);
    }

    return (
        <div>
            <h2>Kronometre</h2>

            <p>{now - startTime}</p>

            <button onClick={handleStart}>başlat</button>
            <button onClick={handleStop}>durdur</button>
        </div>
    )
}
*/


//utc Date.now();