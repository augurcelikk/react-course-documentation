import './App.css'
import { Page01 } from "./pages/Page01";
import { Page02 } from "./pages/Page02";
import { Page03 } from "./pages/Page03";
import { Routes, Route } from "react-router-dom";

import { Nav } from './components/Nav';



function App() {
  return (

    <>
      <h1>Hello world!</h1>

      <Nav />

      <Routes>
        <Route path="/" element={<Page01 />} />

        <Route path="/02" element={<Page02 />} />

        <Route path="/03" element={<Page03 />} />


        <Route path="*" element={<p>Ooops</p>} />
      </Routes>


    </>

  )
}

export default App
