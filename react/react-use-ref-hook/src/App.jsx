
import { useState, useRef } from 'react'
import './App.css'
import { StopWatch } from './components/StopWatch';


function App() {
  return (
    <>
      <h1>Hello</h1>
      <Button />
      <MyButton2 />
      <StopWatch/>
    </>
  )
}

//setter functions rerenders the components
function Button() {
  const [counter, setCounter] = useState(0); // returns -> [value, setterfunction]
  return (
    <button onClick={() => { setCounter(counter + 1) }}>
      {counter}
    </button>
  )
}


// *** useRef HOOK *** 
function MyButton2() {
  const [random, setRandom] = useState(Math.random());
  const counterRef = useRef(0); // returns -> { current:0 }

  console.log("rendering ****")

  function handleClick() {
    counterRef.current += 1; //rerender talep etmez
  }

  return (
    <div style={{ border: "2px solid red" }}>
      <h2>useRef'i anlamak</h2>
      <button onClick={handleClick}>
        {counterRef.current}
      </button>
      <button onClick={() => { setRandom(Math.random()) }}>
        {random}
      </button>
    </div>
  )
}


function myOrdinaryButton() {
  let counter = 0;

  console.log(counter)
  counter++;
  // myOrdinaryButton();


}

export default App
