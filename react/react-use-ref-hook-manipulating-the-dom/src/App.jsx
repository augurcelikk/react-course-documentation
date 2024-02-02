
import { useState, useRef } from 'react'
import './App.css'



function App() {
  const inpRef = useRef(null);

  function handleClick() {

    inpRef.current.focus();

  }

  return (
    <>
      <h1>Hello</h1>

      <input ref={inpRef} id="inpTest" type="text" placeholder="Beni odakla" />
      <button onClick={handleClick}>Odakla</button>

    </>
  )
}



export default App
